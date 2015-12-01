// ==UserScript==
// @name           webSafe.uc.js
// @description    通过360检测被访问网页是否安全
// @author         AC
// @include      main
// @namespace      checkSafe
// @license        MIT License
// @charset        UTF-8
// @version        2015.12.1
// @version        4.0 
// @note           4.0 修正：在存在多个相同域名时，关闭其中一个导致重新读取数据
// @note           3.0 改变函数结构，更有条理
// @note           2.0 修正CSS和白名单
// @note           1.0 初步建立脚本数据
// @reviewURL    http://bbs.kafan.cn/thread-1867072-1-1.html
// ==/UserScript==
var whiteList = new Array("baidu.com", "qq.com", "kafan.cn", "taobao.com", "sina.com", "sina.cn");
var SAFE = "#C9F7E8";
var UNKNOWN = "#D3ADFF"; //未知站点推荐值：#D3ADFF
var DANGEROUS_A = "#FFEAEA"; //普通危险
var DANGEROUS_Z = "#F99F9F"; //严重危险
var target = ".urlbar-input-box";
var Safemap = {};
var Safemap_count={};
(function(){
    let { classes: Cc, interfaces: Ci, utils: Cu, results: Cr } = Components;
    Cu.import("resource://gre/modules/devtools/Console.jsm"); //使用了这个才能使用console
    setColor(SAFE);
    var gcurTab;
    var container = gBrowser.tabContainer;
    gBrowser.addEventListener("DOMContentLoaded", func, false); // 载入事件
    container.addEventListener("TabSelect", func, false); //注意多次触发问题-选择
    container.addEventListener("TabClose", removefunc, false); //关闭事件-移除
    content.document.addEventListener("onload", function(){alert("loding,,,")}, false);
    function func(e){
        if(e.target.baseURI.indexOf("http") == 0 || e.type == "TabSelect" || e.type == "TabClose"){
            //DOMContentLoaded--->从中排除掉非https?请求【chrome://】
            var mainUrl = getMainUrl();
            //console.log("***"+mainUrl+"***");
            if(mainUrl != null && mainUrl != ""){ //地址要正确才能继续查询
                dealHttp(mainUrl);
            }else{
                console.log("安全监测不支持:"+gcurTab.contentDocument.location.href);
            }
        }
    }
    function dealHttp(dealUrl){
        var score = getMapScore(dealUrl);
        //console.log(inWhiteList(dealUrl));
        if(inWhiteList(dealUrl)) score=100;
        if(score == -1){ // 不存在该记录--->从网址获取
            var endURL = "http://tool.chinaz.com/webscan/?host="+dealUrl;
            (function GetScore(dirURL, addUrl){ // 在 不在Safemap中的时候，请求获得分数，并且加入Safemap
                console.log("start...with..."+addUrl);
                var xhr2 = new XMLHttpRequest();
                xhr2.open('GET', dirURL, true);
                xhr2.onreadystatechange=function() {
                    if(xhr2.readyState == 4){
                        if(xhr2.status == 200){
                            var endhtmls = xhr2.responseText;
                            var reg = new RegExp("\"score\":([\\d]*)", "g");
                            var result = reg.exec(endhtmls); result = reg.exec(endhtmls); //第二次的才是真正结果
                            var score = result[1]; //第一个括号中的值
                            setColorWithScore(score, true); //可能存在空值""
                            addIntoMap(addUrl, score);
                        }
                        console.log("end..........");
                    }
                }
                xhr2.send(); 
            })(endURL, dealUrl);
        }else{
            setColorWithScore(score);
        }
    }
    function removefunc(e){
        var removeUrl = getMainUrl();
        removefromMap(removeUrl);
    }
    function getMainUrl(){ // 当前URL转为域名URL【http//:www.baidu.com/xxx/x.x/xx.xxx】-->【www.baidu.com】
        var mainUrl;
        gcurTab = gBrowser.getBrowserForTab(gBrowser.selectedTab);
        mainUrl = gcurTab.contentDocument.location.href+"";
        setColor(SAFE); //先设定个默认值，如果查询出来了在改变就是了
        var regH = new RegExp("[^/]+//([^/]+)/"); // 地址中必须要有.的存在，否则不是http地址：about:config chrome://xxx/xxx
        regH.test(mainUrl);
        mainUrl = RegExp.$1;
        var index = mainUrl.indexOf(".");
        if(index > -1){
            var tmp = mainUrl.split(".");
            if(tmp[3] != null) // 表明是4段地址类型的:www0.lenovo1.com2.cn3
                mainUrl = mainUrl.substring(index+1, mainUrl.length);
            return mainUrl;
        }
        else
            return null;
    }
    
    function addIntoMap(url, score){ //插入分数
        Safemap[url] = score;
        if(Safemap_count[url] == null) Safemap_count[url]=0;
        Safemap_count[url] = Safemap_count[url]+1;
    }
    function getMapScore(url){ //查找Safemap获得分数，没有返回-1
        if(Safemap[url] == null)
            return -1;
        else
            return Safemap[url];
    }
    function removefromMap(url){ //Tab关闭的时候remove掉
        if(Safemap_count[url] == 1){ //只有在count为1的时候才删除该节点【避免多个相同域名中关闭其中一个....】，并且countUrl = null
            Safemap[url] = null;
            Safemap_count[url] = null;
        }else{
            Safemap_count[url] = Safemap_count[url]-1;
        }
    }
    function setColorWithScore(score, flag){ // 根据分数直接上色,flag存在表示是从网页获取的
        var outStr="";
        if(flag != null) outStr += "网页获取";
         if(score != ""){ // 正则成功=（1.有值（>30或者<30）2.空的string）
            if(score < 10){
                outStr += "成功， 分数："+score;
                setColor(DANGEROUS_Z);
            }
            else if(score < 30){
                outStr += "成功， 分数："+score;
                setColor(DANGEROUS_A);
            }else{
                outStr += "成功， 分数："+score;
                setColor(SAFE);
            }
        }else{
            outStr += "失败，没有改网站的数据";
            setColor(UNKNOWN);
        }
        console.log(outStr);
    }

    function inWhiteList(url){
        var length = whiteList.length;
        for(var i = 0; i < length; i++){
            if(url.indexOf(whiteList[i]) > -1)
                return true;
        }
        //console.log(url+" not  in ");
        return false;
    }
    function setColor(cccolor){ //上色
        var node = document.getElementById("urlbar");
        node.style = addStyle(target+"{border-radius: 13px;padding: 0 2px !important;margin: 0 !important;\
                background-color: "+cccolor+" !important; border: none !important;\
                border-right: 0px solid rgb(235, 235, 235) !important;}");
    }
    function addStyle(css) { //添加CSS的代码--copy的
        var pi = document.createProcessingInstruction(
            'xml-stylesheet',
            'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
        );
        return document.insertBefore(pi, document.documentElement);
    }
})()