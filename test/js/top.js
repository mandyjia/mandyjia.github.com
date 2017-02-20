function getPos(obj){
    var l = 0;
    var t = 0;
    while(obj){
        l+=obj.offsetLeft;
        t+=obj.offsetTop;
        obj=obj.offsetParent;
    }
    return {left:l,top:t};
}            
window.onload = function () {
var oItem = document.getElementById('top');
var oItem2 = document.getElementById('top2');
var top = getPos(oItem).top;
	window.onscroll=function(){
	    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	    if(scrollTop>= top){
	        //吸住
	        oItem.style.position='fixed';
	        oItem.style.top='0';
	        oItem2.style.display='block';
	    }else{
	        //回去
	        oItem.style.position='static';
	        oItem2.style.display='none';
	    }
	};
}