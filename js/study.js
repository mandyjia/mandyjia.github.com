

window.onload=function(){
	 var aBtn=document.querySelectorAll('input');
	 var aSLi=document.querySelectorAll('.study-list li');
	 var bReady=true;
	 var arrClass=['','pre2','pre','now','next','next2'];
	 aBtn[0].onclick=function(){
		if(!bReady)return;
		bReady=false;
		arrClass.push(arrClass.shift());
		for(var i=0; i<aSLi.length;i++){
			aSLi[i].className=arrClass[i];
		}	 
	 };
	 aBtn[1].onclick=function(){
		if(!bReady)return;
		bReady=false;
		arrClass.unshift(arrClass.pop());
		for(var i=0; i<aSLi.length;i++){
			aSLi[i].className=arrClass[i];
		}	 
	 };	
	 
	 //运动完毕时
	 aSLi[0].addEventListener('transitionend',function(){
		bReady=true;
			 
	},false);

};