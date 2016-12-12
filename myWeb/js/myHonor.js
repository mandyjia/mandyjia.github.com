window.addEventListener('load',function(){
	
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
	var oNavUl = document.querySelector('.work-ul');
	oNavUl.style.transition = '1s';
	oNavUl.style.transform = 'perspective(800px)  translateX(-820px) rotateX(360deg)';
},false)
