//window.addEventListener('DOMContentLoaded',function(){
	
//},false)
window.onlaod = function(){
	var oTdul=document.querySelector('.style-ul');
	var N=11;
	for(var i=0;i<N;i++){
		var oULi=document.createElement('li');
		oULi.style.transition='1s '+(N-i)*200+'ms';
		oULi.style.backgroundImage='url(img4/'+(i+1)+'.jpg)';
		oULi.innerHTML='<span></span>';
		var oSpan=oULi.children[0];
		oSpan.style.backgroundImage='url(img4/'+(i+1)+'.jpg)';
		(function(i,oULi){
			setTimeout(function(){
				oULi.style.transform='rotateY('+(360/N*i)+'deg) translateZ(350px)';
				
			},0);	
		})(i,oULi);
		oTdul.appendChild(oULi);
	}
	var aULi=oTdul.children;
	var y=0;
	var x=20*3;
	document.onmousedown=function(ev){
		var disY=ev.clientX-y;
		var disX=ev.clientY-x;
		document.onmousemove=function(ev){
			y=ev.clientX-disY;	
			x=ev.clientY-disX;
			change(y/3,x/3);
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		};
		return false;
	};
	aULi[0].addEventListener('transitionend',function(){
		change();	
	},false);
	function change(y,x){
		oTdul.style.transform='perspective(800px) rotateX('+-x+'deg)';
		for(var i=0; i<aULi.length;i++){
			aULi[i].style.transition='none';
			aULi[i].style.transform='rotateY('+(i*360/N+y)+'deg) translateZ(350px)';
			var n=Math.abs(Math.abs(i*360/N+y)%360-180)/180;
			if(n<0.4){n=0.4}
			aULi[i].style.opacity=n;
		}	
	}
};
