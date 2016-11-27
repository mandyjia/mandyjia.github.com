window.addEventListener('DOMContentLoaded',function(){
	var oMyfirst = document.querySelector('#my_first')  //第2页上的我的首页	
	var oLiwork = document.querySelector('#my_work'); //第1页上的我的作品
	var oFirstindex = document.querySelector('.firstIndex'); //第1页上的我的作品外面的大盒子
	var oMyworkindex = document.querySelector('.myworksIndex');//第2页上的我的首页外面的大盒子
	var oWel = document.querySelector('.myworksIndex .wel');//第2页上的的欢迎光临牌子
	var bOk = true;
	oLiwork.addEventListener('click',function(){
		oWel.innerHTML = '我的作品';
		oFirstindex.style.transition = '2s';
		oFirstindex.style.transform = 'scale(0) rotate(360deg)';
		oMyworkindex.style.display = 'block';
		oMyworkindex.style.position='fixed';
		oMyworkindex.style.left='0';
		oMyworkindex.style.top='0';
		oMyworkindex.style.zIndex =-1;
	},false);
//	oLiwork.onclick = function(){
//		oWel.innerHTML = '我的作品';
//		oFirstindex.style.transition = '2s';
//		oFirstindex.style.transform = 'scale(0) rotate(360deg)';
//		oMyworkindex.style.display = 'block';
//		oMyworkindex.style.position='fixed';
//		oMyworkindex.style.left='0';
//		oMyworkindex.style.top='0';
//		oMyworkindex.style.zIndex =-1;
//		oFirstindex.addEventListener('transitionend',function(){
//			if(bOk){
//				oFirstindex.style.display ='none';
//			}
//			bOk = false;
//		},false)
//	};
	oMyfirst.onclick = function(){
		oFirstindex.style.transform = 'scale(1)';
		oFirstindex.style.display = 'block';
		oMyworkindex.style.display = 'none';	
	};
},false)