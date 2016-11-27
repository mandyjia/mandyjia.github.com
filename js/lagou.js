function a2d(n){
	return 180/Math.PI*n;
}
function getPos(obj){
    var l = 0;
    var t = 0;
    while(obj){
        //100
        l+=obj.offsetLeft;
        t+=obj.offsetTop;
        obj = obj.offsetParent;
    }
    return {left:l,top:t};
}
window.addEventListener('DOMContentLoaded',function(){
	var aMobLi = document.querySelectorAll('.bot-list .bot-li');
	var aMobP = document.querySelectorAll('.bot-list .bot-li p');
	for(var i=0;i<aMobLi.length;i++){
		PosTrans(aMobLi[i],aMobP[i]);
	};
	function PosTrans(obj,son){
		var cx=obj.offsetLeft+obj.offsetWidth/2;
		var cy=getPos(obj).top+obj.offsetHeight/2;
		function getDir(ev,scro){
			var x=ev.clientX;
			var y=ev.clientY;
			var a=(cy-scro)-y;
			var b=x-cx;
			var deg=a2d(Math.atan2(a,b));
			return Math.round((deg+180)/90)%4;	
		}
		obj.onmouseenter=function(ev){
			var oScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			switch(getDir(ev,oScrollTop)){
				case 0:
					son.style.left=-170+'px';	
					son.style.top=0+'px';
				break;
				case 1:
					son.style.left=0+'px';	
					son.style.top=170+'px';
					
				break;	
				case 2:
					son.style.left=170+'px';	
					son.style.top=0+'px';	
				break;	
				case 3:
					son.style.left=0+'px';	
					son.style.top=-170+'px';	
				break;	
			}
			move(son,{top:0,left:0});	
		};	
		obj.onmouseleave=function(ev){
			var oScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			switch(getDir(ev,oScrollTop)){
				case 0:
					move(son,{left:-200,top:0});
				break;
				case 1:
					move(son,{left:0,top:200});
				break;
				case 2:
					move(son,{left:200,top:0});
				break;
				case 3:
					move(son,{left:0,top:-200});
				break;	
			}	
		};
	}
},false)