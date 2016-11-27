window.addEventListener('DOMContentLoaded',function(){
		var aBtn=document.querySelectorAll('.show input');
		var aLi2=document.querySelectorAll('#list-ul li');
		var bReady=true;
		var arrClass=['','pre2','pre','now','next','next2'];
		 aBtn[0].onclick=function(){
			if(!bReady)return;
			bReady=false;
			arrClass.push(arrClass.shift());
			for(var i=0; i<aLi2.length;i++){
				aLi2[i].className=arrClass[i];
			}	 
		 };
		 aBtn[1].onclick=function(){
			if(!bReady)return;
			bReady=false;
			arrClass.unshift(arrClass.pop());
			for(var i=0; i<aLi2.length;i++){
				aLi2[i].className=arrClass[i];
			}	 
		 };	
		 
		 //运动完毕时
		 aLi2[0].addEventListener('transitionend',function(){
			bReady=true;
				 
		},false);
},false)