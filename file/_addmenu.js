// 这是一个 addMenuPlus 配置文件
// 请到 http://ywzhaiqi.github.io/addMenu_creator/ 生成配置文件
css("#context-copylink {display: none}");

page({
    label: "有道翻译",
    insertBefore: "snaplinksMenuEntry",
    condition: "normal",
    oncommand : function (){
        var s = content.document.createElement('script');
        s.type = 'text/javascript';
        s.src="http://fanyi.youdao.com/web2/seed.js?'+Date.parse(new Date())";
        content.document.body.insertBefore(s, content.document.body.firstChild);
     },
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVQ4jc1QsQ3CMBB0R5seJJ/F2wPQpUtHSwN1RoiYgA0YgVEYIQNQuEFCiS1lhNDg5IE4gQpO+ub0d39/QvwVaujcK9N6ZVoP3dwACCFErWjH+VGTblGZNhhYIOF8VHyd06K/ZOwU/wYnacWingJfSUoD76DPUYPnRSq6bhRte94c4gagNbtUOlBWSUqdpH2fbLn57IXIhGIHcRE043FDaTxVVDwECyTcoIbORwUO+uhA2WOKr6/H/nbQpQWSaQPo5lU4GfvnuAOO7rs1HAnRyQAAAABJRU5ErkJggg=="
});
menu = PageMenu({
    label: "页面操作·更多",
    position:2,
    condition: "normal",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAANUlEQVQ4jWNgoAYIWG3632eFAV5MWwMGH3BeoNFGDKadAQMHPBbqbMWHaW/AwAGKnT2g/gYAO457j2byyvYAAAAASUVORK5CYII="
});
menu([{
// GBK--UTF-8
    label: "GBK <-> UTF-8",
    position:1,
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC3SURBVDhPY6AKmGs//z85GKp9WBlwtP/Yf2RwY/PN/xeXX4Ly/v+/f/D+/9XRa7EbsDV/O1gRSNNCj8X/T886A+aDAEhuV+UeMBtkCFYD0DFMw/OLz+FiMACyAMSHakcYALL1/aMPUGW4wYbUTZgG7G8+CJYE2QhSAPMSspPRMVQ7xABYAILoZYErwAbBACjgQGIgw0AAqxdAgjAFIAAyABQOyAaB2CCXYXUBORiqfTAYQD5gYAAArhcq19H6/18AAAAASUVORK5CYII=",
    oncommand: function() {
        var charset = gBrowser.mCurrentBrowser._docShell.charset;
        BrowserSetForcedCharacterSet(charset == "UTF-8" ? "GBK" : "UTF-8");
    }
},{
    label: "繁体转简体",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADlSURBVDhPrVPJDYQwDEwRroMKkPJLFUj8+NNBPjxSwn4ogBrogAq2hW3Cm8NOAgkR0m6kUWTkGQ9jEH85r/cHm1gnBADs9HF6TvSrwIFDDwi9wcUR7T2MtrYCARPO9wJEdo3jhMpPNf5OAoBqrQpk5AiathvsXO1cxWEVB4uWliRx2PP6LMrTqwKMnBiDq7gg+k2IJODhSVvIoilA64LeBmhF3HR2k8JsbYFsdnorXDwTIJvcnK9QrfQKTxy4pOfi42GBtCWilxnkq0rpy3A3BfwGUkMEi3g0M2iB80k/FNF/OUJ8Aad+5VEArUCmAAAAAElFTkSuQmCC",
    oncommand: function() {
        content.document.documentElement.appendChild(content.document.createElement("script")).src = "http://tongwen.openfoundry.org/NewTongWen/tools/bookmarklet_cn2.js";
        content.document.documentElement.appendChild(content.document.createElement("style")).textContent = 'body { font-family: "微软雅黑" }';
    }
},{
    label:"在侧栏中打开",
		oncommand:"openWebPanel(content.document.title, content.location);",
    image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAPElEQVQ4jWNgoBL4jwcTbQAp4kPUADsGBoZfUJpkA/zxaSZkgB0DEbFEUxfAgAM+Q4ZGNBI0gKK8MHAAANGVMRA9chdTAAAAAElFTkSuQmCC"
	},{
    label:'可见区域截图',
    oncommand:function() {
    var canvas = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    canvas.width = content.innerWidth;canvas.height = content.innerHeight;
    var ctx =canvas.getContext("2d");ctx.drawWindow(content,content.pageXOffset, content.pageYOffset, canvas.width, canvas.height, "rgb(255,255,255)");
    saveImageURL(canvas.toDataURL(), content.document.title + ".png", null, null, null, null, document);},
    image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgUlEQVQ4jd3Orw3CYBCG8V9JJQMgKjoCkoQg2IRRukMHqEQiOkM9IyBwFYzQGkB8yaVNERDe5HJ/nrvLy7eV4YxdwAvcA3bDEYYETPV9Oh9mRP/Mj6QHl8DilGrIscEpWNqjC1j5KpqFDipYLTx+6w8eZGixDvgW14DlOHxq4Ac0Am4mHKhHtyEUAAAAAElFTkSuQmCC"
    },{
    label:'所有区域截图',
    oncommand:function() {
    var canvas = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    canvas.width = content.document.documentElement.scrollWidth;
    canvas.height = content.document.documentElement.scrollHeight;
    var ctx = canvas.getContext("2d");ctx.drawWindow(content, 0, 0, canvas.width, canvas.height, "rgb(255,255,255)");saveImageURL(canvas.toDataURL(), content.document.title + ".png", null, null, null, null, document);},
    image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUElEQVQ4jWNgGGjACKX/UyiPUwE+8J+BgYGBBZsgEQBuM7oBKJL4bIYBJiJtJBoQ4wXqugBmANmxQLELsMUCSa5BN4BQFOI1AJvNhJLyIAAAHYkNFxbl8rAAAAAASUVORK5CYII="
},{
    label: "查找此页脚本",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAflBMVEUAAAAzMzNNTU2bm5s+Pj4uLi4qKirq6urZ2dm0tLR4eHhxcXFdXV1DQ0M7Ozv8/PzAwMCwsLCnp6eCgoJHR0dGRkY3NzceHh4HBwfk5OTg4ODR0dHPz8/FxcWqqqqenp6UlJSOjo58fHxsbGxmZmZYWFg6OjomJiYkJCQYGBhoja3FAAAAAXRSTlMAQObYZgAAAINJREFUGNNNjlcSwyAMRFf0YMB24pbe2/0vmHHADO9HehpptEg8wsBR4AKOonBLgKZ99qvSgK+yt3QARsq+mi6AZ2yNRBieunNo3qc0INjJzpufNg66qt7EWzr/ay2jA/KeGhVDivx4J+cPjGHBqNHAFdHllrPbC8h4DvVFQSP63qT+B7shBQwlpDJKAAAAAElFTkSuQmCC",
    url: "https://greasyfork.org/zh-CN/scripts/search?q=%HOST%"
},{
                                label : '列出所有图片',
                                subdir : '',
                                image :"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADK0lEQVQ4jQXB209aBwDA4fOn7WFLlq7RNUszN13tRbOlpslefOsetmR7mFuy1k57QywFAVEBQVqgTKJ4VwQrXhiCcrgeOFwEzgEG/PZ9wvjpGbfcHj5xufjMu8ot5xaDKwfcdYR54DvlS+8efe51vrW6MF3lKHahVlGh1aZbqyLcdfu44/XzjX+D255NBhzb3DZv0Kf10Wfwc2PRz80lL8NWD892jxFb0AE6Shs6XYRRq4e/E0Xe5No8TzTQZUFXAE0eDApoa/CqADPJBq9CcY7r0ACkVAmaIDxc8mIrw1yszuPlIOPOj/xgDzO0uMeI+4QxzxkPXUHGljcZ1TuYWN1lp1And92h1wPhjtHGUqWH5iDF2GsP9w1++t/6+FTv48bCBp/PuOmbfU+/zsnXFheDCzb+DB8RB8QeCEMGCy4FHKKKNpzDUIQpGSbb8BLQtsHcg9kWzAK/JK/4/TJBGDgGhBGTmeWqwlJSRhfNMp0o8CgQ5H7gkO/Wggw6A3y/esDIP1vc8wcY+uBhwL7IT+vrmNMZhHGzEW+pjCOVYzGZ4/lpnAfzNgaMS/Tr5vnqjYXhBReDJhtfvNAwardzz2xi+LWGlXIFYX5tjQmjibGnT9hvquiCYRbP4niyMvZkHodUxZ4r48qWsMdEfIkcvssMc/uHmEJHCLLSICRe8YfVxG6tgO0ozIdojM1EirBcZeUigVdMsyeVCaVkkkWFS1nBfXSC5SCIUG83qQPWyDar8iXO0xCRcpEzSSJWqRJp1ImoChcNlfOURD5fQyqpeI4j6Lc3EWSlxjVgDK3xq1PPj1MT+OMnyPSQeh3OlWuirTpJRSWazlMoNSg3u6xe/Mvc4Q5ChQ4VIEGLfUVi0mdnuySSByK1AknaSEAFKAFVIA8441Gmd9cRVCBZqZJqqhQBy/4GfjFGHpCBTEul0GpT7va4rDeItVTCjRoL5yfoI2EEOkAL+A/ogiuwxaTZyM8vp/ltagqddo63L/ToZ0w80+j5a8HKk/fveLryjvmDQ4Sm3IMmoAB1SGUrXFVqHGXSiHIZKZZH+igixQpELzLspPP4M1kCYg4R+B+Et1zo35zIagAAAABJRU5ErkJggg==",
                                oncommand :function () {
                                gBrowser.loadURI("javascript:outText='';for(i=0;i<document.images.length;i++){if(outText.indexOf(document.images%5Bi%5D.src)==-1){outText+='<tr><td><img%20src='+document.images%5Bi%5D.src+'></td><td>'+document.images%5Bi%5D.height+'</td><td>'+document.images%5Bi%5D.width+'</td><td>'+document.images%5Bi%5D.src+'</td></tr>'}};if(outText!=''){imgWindow=window.open('','imgWin','width=800,height=600');imgWindow.document.write%20('<table%20border=1%20cellpadding=10><tr><th>Image</th><th>Height</th><th>Width</th><th>URL</th></tr>'+outText+'</table>');imgWindow.document.close()}else{alert('No%20images!')}");
                                },
                        },{
    label : '明文显示密码',
    subdir : '',
    image : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADRElEQVQ4jW3Tf0zUdRzH8Y9QkUHLOW9KYEmtGkziPMexDicMuB/Q0TFg2MQK2gkRP+JEQjhyJr8Kji/I7zhghLBkghvS6cFUfhxwcXLFFvpPK4iTWLM/+0NW7dkftwJX7+315+vxx2t7C3X9ZEy8ZWYxt64PveUWGsnxv1E3TJF8yUFK2wKJzXPEW2YW1fWTMSLBMr3Z3VTN2vkIhk1xaKXZf0sZHfPIM84gC1PxbGAI+4JfQhb4ArFqLeUDtzk77N4UGsnBNXMKK4VBTBSEo5EcaCUHxYMuDsmjEUI8lmOh+8mtbya5ppuMum6ERnJgaLCTYniLTGmcU1YXlpvLpGVloZUJSo4KqmOexvKmjK7UA/S2f8JHc79gmlzhw+t3vYBGchD5fhX5fQ4sN5dI77FT+2Uf9p6PGb3aSf9wHy2D/Vzs7KLA0kG+ZKWwyUpRc+828LZkI+ezTnJGnZTZlzFarOiyC4nUGHg5XIHsQBDyqGiSUtKRyWQE+D3JHv/d20DxoIuTHSMUX53myBvH0CTq0adlIHb5IITgOdl+XMvf8+iPP+m/MoKv327vLv8A58fuYbK5OXQkisOvy/n90RYAn7d2Inx8USXo2HkZWUYvoG6cJb5hhrKBWd7ttSF8nyI7J4/fHj5kdXWVv4CjquOEK1UsLC6SlpoKwNDomBeIqryB0mzjvdoh0lqG2RvyGrFqLaXnKjiVmQnA6fwi/J4JwDowRE11NQA9l7/yAkqzDaXZhrZmkqrriyR92o4QgtN5BWx41tna2iI6Ng4hBK+EHmbi1h1u35kiLELBnsCD24DSbMN0+S5VC6skVDQSoT9BZYuV7DPl7A15lefD5BxUqIgwZBKbV05yVQe5Y0uPA0qzjbNDS7S5PFTM/4xxzE32iJOiiXuUzPxE6fw6JY41yhY8SN/9SvP0j/8FlGYbxy/Yye9zUnfjPm1ODy0uD63frNPuXOPS1A9UXnGS1ziCIceMUFaMP9hZTmya4YP+OYq7xiltGsBYWEbSCSP6k7no0rOJM7zDi6EKdvk8gRDigVCUXtNFnvt6M/qCnSLbfWrdHmq/3eCie4PKqRVMrV8QH7qPAH9/goKDdz7Wpr8Qur8B/c1d/jmhRwsAAAAASUVORK5CYII=",
    oncommand : function () {
        gBrowser.loadURI("javascript:(function()%7Bvar%20IN,F;IN=document.getElementsByTagName('input');for(var%20i=0;i<IN.length;i++)%7BF=IN%5Bi%5D;if(F.type.toLowerCase()=='password')%7Btry%7BF.type='text'%7Dcatch(r)%7Bvar%20n,Fa;n=document.createElement('input');Fa=F.attributes;for(var%20ii=0;ii<Fa.length;ii++)%7Bvar%20k,knn,knv;k=Fa%5Bii%5D;knn=k.nodeName;knv=k.nodeValue;if(knn.toLowerCase()!='type')%7Bif(knn!='height'&&knn!='width'&!!knv)n%5Bknn%5D=knv%7D%7D;F.parentNode.replaceChild(n,F)%7D%7D%7D%7D)()")
    },
},{
				label :'在线PS+特殊字型+动态+美图',
				image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAFVklEQVRIib2UbUzV1x3Hv9JkTUz2ZlnflL1aTNNlS0pM1zSrMsSbmk1bWx02PGgffKRTM2Cr0QmeO6RQHopojYAiWNqy20rHQEGpgohSRbhOik9Xi5ZHFYV7Fb3cC9xPX5w2Mmb3sv/km5yc8/39Pr/z/51zpB/lmzHjca36ME4p1U5tqjEydUYZh41yvjDKbzQqaDQqaDLa0WS0o9mOC5rsWs5Ro8zDRs46o001RinVTi0vfUXSYw8Bf8xZqORjXm1xo8wOlH8RFV1F+75Brj5UeRNVDaJ/37b61yDafwP9s896ir5GBZdQVgcybpTUMCBHuuMhICrHaNHnKK4WvdWAEltQcjva2ImMB2V0ofe6UXaPVVa3nTMetKkTpbjR2y02Nr4OLa5CkXlbJgHyjBZXoaX1aNVxtP4M2tCBUi+j9Gsoqxfl3EB5t6xyb6CsPrT1OkrzoA1fob+0odXNaFm9BUTlmYeA6HyjJTW2grWn0Dv/QZsv2eTZfSh/EH0wjHZ50S4f2jmMtt9Guf3o3etoy2W04Rxadwotb0SvHUDR+VMAcbW2+qQz/MR5gbdqbpJ0dJikprusbb5PdO0Dwsr9qNSPSkZQoRdtH0S5vWjr1+jv51Fym80RX4ccBZMAjgKjhENoTTNKbic810OPN8hEKMSd+0F8o2PcHwtRcHGCMNcY2jeK9txDO4fQ+wMo8xpKu4j+6kZrTqClh34IcAKluAnPu0KfL8iVoSDPum7x28ohvrwRwD8OjoYJtC9AWNkIv/jEy5Mlt5iW/Y0F/O0sSjyJlh5Gjh3/fwf9viCdt4NM330HFfpwtvsBWHs6yBP7R3F1jdF7b5we3zil5+7ys2yPPU2P3EF0vlH8wx6E51yygMEgPy0eJKx4mA89ASBEbMN9nO4AoVCIrJY77HYPEZqYIOVgH0pqQ6sf1YPofKPYA2hFI1p3ivCs8/R6A9wLTFB7bZTG3iD+8RCt/X5+XjZEnnsEgPQvffyquJsF+67ydG4nWn8arTiGYg9OOUVReUYx1ejNIyjxJOEZHfR6AzwIjnOm28fxLi8ftN7m6dIBtO0mM/YO8MVVH6NjE3x1K8DbNQOEbTyL/tyC3jyKllRPuQeR79mbvPQQWtlEuHHT7w1w/qafJ3IvM+1dD8r8/jZ3M72gh1/u7CLe1UVbt4+xiRCrXV1oZRNadvi7m5wzCfC7TKOFn6HYA+iNI4RvbqXfO0rnwAOmp19AqReQ8zL6hwdt9VDcNkx7v59fb7/Cyv3XAdh2pMf+gbiDaOFnaFbmJMDzGUbzK9CfqlBCHU9uOEnfkJ+OvhGmp55F75xFG8+hTR1oYwcxH11h8O4o3cMB+r0Beu6MMDfnDEqoQzFVaEEFej5jEuA5p9G8cvRKJVpSzWMr6lm4rZV5+W1MW99in4Ck0yi51SrpNM9mt5PiusC6jzv5TdoJtOwQeq3G5pj3EXoufRJgpjFylFnyos+tMb7WPlzLG9CqY2jNcZTYbLXmOFp5zDZ0Wb2tPLbGxi5wIUcZmmkmASLSjKL2oBfLreHVShRTbXuSUGure70evfGdXq+3cwl1KO6A9S6qRC+5bI6oPSgibTJgs9HsIhS91xrmV6CXP7WgxVW2N0uq/1sxVXbt1UrrnV9hY6P3osgiFLF5CmBWIfp9MZpTYrf4Yjn6w8c2cIHLVvfyp1Yvuezc/ArrmVduY+aU2ByzCh8BeGGXXZhdhCKLUdRuGxC9F80tRXPLbBJHmR3PLbVrc0qsN7LYxs4qRC/smgJ4KnG2nkl1KiLN/I9mphnNND+gR/gj0oyeSXXqqcTZ+jG+bwEE/kTdDwun4wAAAABJRU5ErkJggg==",
				oncommand:function () {gBrowser.addTab("http://www.uupoop.com/");}
}]);

page([{
    label: "粘贴并确定",
    condition: "input",
    position : 1,
    oncommand: function(event) {
        goDoCommand("cmd_paste");
        window.QueryInterface(Ci.nsIInterfaceRequestor)
            .getInterface(Ci.nsIDOMWindowUtils)
            .sendKeyEvent("keypress", KeyEvent.DOM_VK_RETURN, 0, 0);
}
},{ 
    label: "页面稍后阅读",
    id: 'context-pocket',clone :false,
    insertAfter: "context-bookmark",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABOklEQVQ4je3Mv07CUBTH8QNBYxodGOgf0VITHFRahC6OfQB9Bd1IdCbp2gXLUGhCaMpty71tivo+SqJrI4s+ACN1MzSxEIhxMPyS73bOB+APl91tNukjwyjl220+GeJBVb/bMYwSaBoNANml6onrXlcJGYtBEM136vsRh9yIQ04iBqHxXr9/sxClWy1GHOLn+mgU18IwkRSG8QEm8f4QJypiEjMD70XQNDYVLlhWWcT4fVWYGzgT6HbLC+Gq70828AbewP8ePiNkWkRo+muwFAQfFUJGx7Z9SfV6VzRCDyxyPteCxSCYSYS8Shjfl2y7BrK8NXe2TZlmvWBZOjvw3mjXmy2FL0xTOPf9xwrGt5VO5xAAMqnHABlQVT5vOXeM7Tyxui6knypKDhoNagH282SZAkXJrfy3zr4AjZtp8ihzZbAAAAAASUVORK5CYII="
},{
    label: "链接稍后阅读",
    id: 'context-savelinktopocket',clone :false,
    insertAfter: "context-copylinktext",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABOklEQVQ4je3Mv07CUBTH8QNBYxodGOgf0VITHFRahC6OfQB9Bd1IdCbp2gXLUGhCaMpty71tivo+SqJrI4s+ACN1MzSxEIhxMPyS73bOB+APl91tNukjwyjl220+GeJBVb/bMYwSaBoNANml6onrXlcJGYtBEM136vsRh9yIQ04iBqHxXr9/sxClWy1GHOLn+mgU18IwkRSG8QEm8f4QJypiEjMD70XQNDYVLlhWWcT4fVWYGzgT6HbLC+Gq70828AbewP8ePiNkWkRo+muwFAQfFUJGx7Z9SfV6VzRCDyxyPteCxSCYSYS8Shjfl2y7BrK8NXe2TZlmvWBZOjvw3mjXmy2FL0xTOPf9xwrGt5VO5xAAMqnHABlQVT5vOXeM7Tyxui6knypKDhoNagH282SZAkXJrfy3zr4AjZtp8ihzZbAAAAAASUVORK5CYII="
}]);

page({
    label: "PlaywithPot",
    tooltiptext: "调用Pot来播放，前提是m3u默认是pot播放",
    condition: "link noimage",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABxUlEQVRIib2Wz0obURTGrxRNH6JVyLobIStddKsPMF11Ef8wu0vmnN8HvkLJQyh9gIAvoYtAX6FEslKIItidMW5uyu2QpFk4Xjgwwz3zfXe+8++GsGTFGFvuvgf0gaGke0nTZPfAEOi7+16MsbUMZ9HacPdd4FzSHfAiabbI0t4dcOHuuyGEjZXIZVluSjqRdFMDmwIPksaSxul5WvO5kXRSluXmKvAz4Ck74SMwkHRkZh0zayfrSDoCBsBj5v8k6WwhCXCag0u6NrODVfrGGFtmdiDpOicBTv9xTJqPMvDLXq+3vUa8Qggh9Hq9bUmXGckoxSSEoii2UkDnm1fAzrrgmQI7wFWGc14UxVaoqmofuM00P6zL4O7fzexrURQf/kNyOI8JcFtV1X4A+hnroK65u38GfgMTd/8RY/y0jCDG2EpJMcfrh1REM+DF3Y+X/Pooy/tfkr51u92Pi0jc/XheO8AwAJP08mBmnVUEmf2R9FPSl7q/mXVSncyASQCe00djM2uvSfA3W8zsoEbQTgU5A57fhaBxiRoPcrNp2nihNd4qkgzNNbvsBM216xDeYeBkJM2MzGzNh/6F3nro1/V9i2vLK+n0zYBlj66EAAAAAElFTkSuQmCC",
    onclick: function () {
			var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
			try {
				var path = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getCharPref("browser.cache.disk.parent_directory") + "\\" + new Date().getTime() + ".m3u";
				file.initWithPath(path);
			} catch (e) {
				var path = Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("ProfLD", Components.interfaces.nsILocalFile).path + "\\" + new Date().getTime() + ".m3u";
			}
			file.initWithPath(path);
			
			var x = gContextMenu.mediaURL || gContextMenu.linkURL;
			//alert("x='"+x+"' path='"+path+"'");
			Cc["@mozilla.org/embedding/browser/nsWebBrowserPersist;1"].createInstance(Ci.nsIWebBrowserPersist).saveURI(Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService).newURI(x, null, null), null, null, null, null, null, file, null);
			
			setTimeout(function () {
				file.launch();
			}, 300);
		}
});

// 图像
menu = PageMenu({
    label: "图片操作",
    position: 3,
    condition: "image",
});
menu([{
    label: "复制图像的 Base64",
    text: "%IMAGE_BASE64%",
    condition: "image"
},{
    label: "Base64转图片地址",
    url: "http://www.atool.org/img2base64.php",
    condition: "image"
}, {
    label: "四引擎搜图",
    condition: "image",
    image: "http://www.tineye.com/favicon.ico",
    oncommand: function() {
        var url = encodeURIComponent(gContextMenu.mediaURL || gContextMenu.imageURL || gContextMenu.bgImageURL);
        gBrowser.addTab('https://www.google.com/searchbyimage?safe=off&image_url=' + url);
        gBrowser.addTab('http://www.tineye.com/search/?pluginver=firefox-1.0&sort=size&order=desc&url=' + url);
        gBrowser.addTab('http://stu.baidu.com/i?rt=0&rn=10&ct=1&tn=baiduimage&objurl=' + url);
        gBrowser.addTab('http://pic.sogou.com/ris?query=' + url);
    }
}, {
    label: "打开图像RAR",
    condition: "image",
    image: "moz-icon://file:///C:/Program Files/2345Soft/HaoZip/HaoZip.exe?size=16",
    oncommand: function() {
        var imageUrl = (gContextMenu.mediaURL || gContextMenu.imageURL);
        imageUrl = imageUrl.replace(/\.jpg\.thumb\.jpg$/i, '.jpg');
        var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
			try {
				var path = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getCharPref("browser.cache.disk.parent_directory") + "\\" + new Date().getTime() + ".zip";
				file.initWithPath(path);
			} catch (e) {
				var path = Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("ProfLD", Components.interfaces.nsILocalFile).path + "\\" + new Date().getTime() + ".zip";
			}
			file.initWithPath(path);
			Cc["@mozilla.org/embedding/browser/nsWebBrowserPersist;1"].createInstance(Ci.nsIWebBrowserPersist).saveURI(Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService).newURI(imageUrl, null, null), null, null, null, null, null, file, null);
        setTimeout(function() {
            file.launch();
        }, 100);
    }
}]);


page([{ 
    id: 'context-searchfield',clone :false,
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAoElEQVRIie2UwQnEIBAA80kfEuzAEvJwccNaX1oQwq6FpAwJ9pDHPQ4hn4M8so8cDgiCwogMOwyd1+BWNwKDAQbjVjc+LgAGg5l2zLQDg3lc4BNZFCooVHwi2wV6glaLT2Tbwg0n4GUOEmuQWIGXGTecrndu19VqCZmO9mIUKkFiRYknSjy/+8tZpuN2XeoC9S/6xXsq+l+B+rBTH9cdNT4Aw8G5OFX+2wAAAABJRU5ErkJggg=="
},{ 
    id: 'context-bookmarklink',clone :false,
    insertAfter: "context-copylinktext",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZElEQVQ4ja2SP2sCMRjG4+Li2i6uopuLIFhpb7CF0qFuFkX0knyH0noH1o5i1bvkIziIe/sJHKVFECdHoVXvLsnkmi71/H/a0geyvMnz4w3PA8B/apip+K1sNWhlq8FhpuI/NF+TQM2YwLQtMB0JTEcCkY4DScKBJCEQ6bhzTNsCNWNr5hk0wxyRvsBUrh6ummOWb4y35oj0Z9AMuwAGibb5SGAqedGQ7PpZ8tzL1h2DRFv4fRyZrV0AUTSkkypLlipLnqtvbGG2AAA+AAAAHBHTC+Bc6FsQjojpfoGrRpojMt8LUHTpKEsIR2TOVSPtAiaFWuAnAU+Ao+iSXZYlu6u1J4VaYC0Jq1iPCEx7hwC2ovWs81JkZxdsaMQ5JoP9AG1gJx/jnm20oRHniL5vAmxF/zhoXvaiEeWIdFdS6E7OHqJHmReaqiTE8o1X5+rpbZq8D/3KvNDnbeXk66Z0+ifzsfoGU2p4wMlwp5IAAAAASUVORK5CYII="
}]);

//隐藏相同项。必须，不能删除
function syncHidden(event) {
	Array.slice(event.target.children).forEach(function(elem){
		var command = elem.getAttribute('command');
		if (!command) return;
		var original = document.getElementById(command);
		if (!original) {
				elem.hidden = true;
				return;
		};
		elem.hidden = original.hidden;
		elem.collapsed = original.collapsed;
		elem.disabled = original.disabled;
	});
};