window.addEventListener('DOMContentLoaded',function(){
	//study列表
//	 var aBtn=document.querySelectorAll('input');
//	 var aSLi=document.querySelectorAll('.study-list li');
//	 var bReady=true;
//	 var arrClass=['','pre2','pre','now','next','next2'];
//	 aBtn[0].onclick=function(){
//		if(!bReady)return;
//		bReady=false;
//		arrClass.push(arrClass.shift());
//		for(var i=0; i<aSLi.length;i++){
//			aSLi[i].className=arrClass[i];
//		}	 
//	 };
//	 aBtn[1].onclick=function(){
//		if(!bReady)return;
//		bReady=false;
//		arrClass.unshift(arrClass.pop());
//		for(var i=0; i<aSLi.length;i++){
//			aSLi[i].className=arrClass[i];
//		}	 
//	 };	
//	 
//	 //运动完毕时
//	 aSLi[0].addEventListener('transitionend',function(){
//		bReady=true;
//			 
//	},false);
	//移入导航中的li 使其变色
	var aLi = document.querySelectorAll('.nav-ul li');
	var aA = document.querySelectorAll('.nav-ul li a');	
	for(var i = 0; i < aLi.length; i++){		
		(function(index){
			aLi[index].addEventListener('mouseover',function(){
				aA[index].style.color = '#11e82b';
				aLi[index].style.transform = 'rotateX(360deg)';
				aLi[index].style.transition='1s';
			},false)
			aLi[index].addEventListener('mouseout',function(){
				aA[index].style.color = '#eee9c3';
			},false)
		})(i);
	}
	//点击返回键  nav出现
	var oBack = document.querySelector('.back');
	var oNavUl = document.querySelector('.nav-ul');
	oBack.addEventListener('mouseover',function(){
		oNavUl.style.transition = '1s';
		oNavUl.style.transform = 'perspective(800px) rotateX(360deg) translateX(-820px)';
	},false);
	oNavUl.addEventListener('mouseout',function(){
		oNavUl.style.transition = '1s';
		oNavUl.style.transform = 'rotateX(-360deg)';
	},false)
	
	//
},false)
