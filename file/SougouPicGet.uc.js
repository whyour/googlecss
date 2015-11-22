//==UserScript==
// @name           SougouPicGet.uc.js
// @description    每次启动自动随机获取一张搜狗壁纸
//==/UserScript==

var setTime = 60; //表示间隔多少分钟范围【0-60*24*10】-0到10天->越界时间不准,就不好玩了       O_O

var regexp = RegExp("<a href=\"(/detail/info/[\\d]+)\" target=\"_blank\">", "g");
var regexp2 = RegExp("<img height=\"600\" width=\"950\" src=\"([^\"]+)\"", "g");
var imgURL;
setRileGou();

function  setRileGou() {
    setTime = setTime * 60000;
    var now=getNow();
    var history=getprfDate();
    if(now-history > setTime) {
        init();
    }
};
function getNow() {
    var time=new Date().getTime() % 1000000000;
    return time;
}
function getprfDate() {
    var pref=Cc["@mozilla.org/preferences-service;1"].getService(Ci.nsIPrefBranch);
    try {
        var data=pref.getIntPref('userchromejs.data.MysougouTime');
        return data;
    }
    catch(err) {
        pref.setIntPref('userchromejs.data.MyRiGouTime',0);
        return 0;
    }
};
function init(){
    // 先获取这里的N张图片的随机一张的网页地址
    var url = "http://bizhi.sogou.com/label/index/";
    var xhr=new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.onload=function() {
        var htmls = xhr.responseText;
        var tmpstr, tmpcount=0;
        var randomNum = Math.round(Math.random()*28);
        while((tmpstr = regexp.exec(htmls)[1]) != null){
            tmpcount++;
            if(tmpcount == randomNum) break;
        }
        var dirURL = "http://bizhi.sogou.com"+tmpstr;
        // 使用正则获得到改网页对应的大图的地址
        var xhr2=new XMLHttpRequest();
        xhr2.open('GET', dirURL, false);
        xhr2.onload=function() {
            var endhtmls = xhr2.responseText;
            imgURL = regexp2.exec(endhtmls)[1];
            //alert(imgURL);
        }
        xhr2.send();
        var image=new Image();
        image.src=imgURL;
        image.onload=function() {
            var pref=Components.classes["@mozilla.org/preferences-service;1"].getService(Ci.nsIPrefBranch);
            var currentTime = new Date().getTime() % 1000000000;
            pref.setIntPref('userchromejs.data.MyRiGouTime', currentTime);
            var shell=Cc["@mozilla.org/browser/shell-service;1"].getService(Ci.nsIShellService);
            shell.setDesktopBackground(image,Ci.nsIShellService["BACKGROUND_STRETCH"]); 
            try{var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
            var path = Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("ProfLD", Components.interfaces.nsILocalFile).path + "\\ProfD\\" + "\\sougou\\"+new Date().getTime()+ ".jpg";
            file.initWithPath(path);
            file.create(Components.interfaces.nsIFile.NOMAL_FILE_TYPE, 0777)		
            Components.classes["@mozilla.org/embedding/browser/nsWebBrowserPersist;1"].createInstance(Components.interfaces.nsIWebBrowserPersist).saveURI(Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService).newURI(imgURL, null, null), null,null,null,null,null, file,null);
            }catch(err){alert(err)};    
        }       
    }
    xhr.send();
};
