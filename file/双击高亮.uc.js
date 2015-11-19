function funcs(event){
    window.gWHT.destroyToolbar();
    window.gWHT.highlightWord();
};
function doopen(){
    gBrowser.mPanelContainer.addEventListener("dblclick", function(event){setTimeout(funcs,100,event);}, false);
    return false;
};
doopen();
