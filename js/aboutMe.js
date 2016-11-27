window.addEventListener('DOMContentLoaded',function(){
	var aInfoLi = document.querySelectorAll('.info-ul li');
	var oLayer = document.querySelector('.layer');
	var aInfoDiv = document.querySelectorAll('.div1');
	var aInfoSpan = document.querySelectorAll('.div1 span');
	var oImgBox1 = document.querySelector('.imgBox1');
	var oImgBox2 = document.querySelector('#imgBox2');
	var oImgBox3 = document.querySelector('.imgBox3');
	aInfoLi[0].onclick = oImgBox3.onclick = function(){
		oLayer.style.display='block';
		aInfoDiv[0].style.transition = '1s';
		aInfoDiv[0].style.transform = 'scale(1)';
	};
	aInfoSpan[0].onclick = function(){
		oLayer.style.display='none';
		aInfoDiv[0].style.transition = '1s';
		aInfoDiv[0].style.transform = 'scale(0)';
		
	};
	aInfoLi[1].onclick =function(){
		oLayer.style.display='block';
		aInfoDiv[1].style.transition = '1s';
		aInfoDiv[1].style.transform = 'scale(1)';
		console.log(oImgBox2.className);
	};
	oImgBox2.onclick = function(){
		oLayer.style.display='block';
		aInfoDiv[1].style.transition = '1s';
		aInfoDiv[1].style.transform = 'scale(1)';
		console.log(oImgBox2.className);
	};
	aInfoSpan[1].onclick =function(){
		oLayer.style.display='none';
		aInfoDiv[1].style.transition = '1s';
		aInfoDiv[1].style.transform = 'scale(0)';
	};
	aInfoLi[2].onclick = function(){
		oLayer.style.display='block';
		aInfoDiv[2].style.transition = '1s';
		aInfoDiv[2].style.transform = 'scale(1)';
	};
	aInfoSpan[2].onclick = function(){
		oLayer.style.display='none';
		aInfoDiv[2].style.transition = '1s';
		aInfoDiv[2].style.transform = 'scale(0)'
	};
	oImgBox1.onclick =function(){
		oLayer.style.display='block';
		aInfoDiv[2].style.transition = '1s';
		aInfoDiv[2].style.transform = 'scale(1)';
	}
},false)
