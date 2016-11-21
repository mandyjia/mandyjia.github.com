function rnd(n,m){
	return parseInt(Math.random()*(m-n)+n);	
}
function d2a(n){
	return Math.PI/180*n;
}
window.addEventListener('DOMContentLoaded',function(){
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
	//吸顶条
	var oDraw = document.querySelector('.draw');
	var oHead = document.querySelector('header');
	window.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop>= '100'){
			oHead.style.position='fixed';
			oHead.style.top='0';
			oHead.style.left='0';
			oHead.style.zIndex = '2';
			oDraw.style.display='block';
		}else{
			oHead.style.position='static';
			oDraw.style.display='none';
		}
	};		
	//点击我的作品
	var oApage = document.querySelector('#a-mypage');   //我的首页
	var oAworks = document.querySelector('#a-mywork');  //我的作品
	var oWel = document.querySelector('.wel');
	var timer = null;
    var bOk = false;
    window.addEventListener('scroll',function(){
		if(bOk){
            clearInterval(timer);
        }
        bOk=true;
    },false);
    
    oApage.onclick = function(){
    	//当点击‘我的首页’的a标签时  吊牌中的文字改成'欢迎光临'
    	oWel.innerHTML = '欢迎光临';
    };
    
	oAworks.onclick = function(){
		//当点击‘我的作品’的a标签时  吊牌中的文字改成'我的作品'
		oWel.innerHTML = '我的作品';
		clearInterval(timer);		
        var oScrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        var count =Math.floor(2000/30);
        var dis = 670-oScrollTop;
        var start = oScrollTop;
        var n = 0;
        timer=setInterval(function(){
            n++;
            bOk=false;
            var a = 1-n/count;
            var cur = start+dis*(1-a*a*a);
            document.documentElement.scrollTop=document.body.scrollTop=cur;
            if(n==count){
                clearInterval(timer);
            }
        },30) 
	};
	//banner图
		var oBox=document.querySelector('#box');
		var R=4;
		var C=7;
		for(var i=0; i<R;i++){
			for(var j=0;j<C;j++){
				var oSpan=document.createElement('span');
				var w=oBox.offsetWidth/C;
				var h=oBox.offsetHeight/R;
				oSpan.style.width=w+'px';
				oSpan.style.height=h+'px';
				oSpan.style.left=j*w+'px';
				oSpan.style.top=i*h+'px';
				oSpan.style.backgroundImage='url(img/banner/0.jpg)';
				oSpan.style.backgroundPosition=-j*w+'px '+-i*h+'px';
				oBox.appendChild(oSpan);
			}
		}
		var aSpan=oBox.children;
		var iNow=0;
		var bReady=true;
		oBox.onclick=function(){
			if(!bReady)return;
			bReady=false;
			iNow++;
			for(var i=0; i<aSpan.length;i++){
				aSpan[i].style.transition='1.8s cubic-bezier(0, 0.92, 0.14, -0.93)';
				var x2=oBox.offsetWidth/2;
				var y2=oBox.offsetHeight/2;
				var x1=aSpan[i].offsetWidth/2+aSpan[i].offsetLeft;
				var y1=aSpan[i].offsetHeight/2+aSpan[i].offsetTop;
				var a=y2-y1;
				var b=x2-x1;
				aSpan[i].style.opacity=0;
				aSpan[i].style.transform='perspective(800px) scale('+rnd(15,20)/10+') translate3d('+-b+'px,'+-a+'px,100px) rotateZ('+rnd(-360,360)+'deg) rotateX('+rnd(-360,360)+'deg) rotateY('+rnd(-360,360)+'deg)';
			}	
		};
		aSpan[0].addEventListener('transitionend',function(){
			for(var i=0; i<aSpan.length;i++){
				aSpan[i].style.transition='none';
				aSpan[i].style.opacity=1;
				aSpan[i].style.transform='perspective(800px) scale(1) translate3d(0,0,0) rotateZ(0) rotateX(0) rotateY(0)';
				aSpan[i].style.backgroundImage='url(img/banner/'+iNow%3+'.jpg)';
				oBox.style.backgroundImage='url(img/banner/'+(iNow+1)%3+'.jpg)';
				aSpan[i].style.backgroundSize = '100%';
			}
			bReady=true;
		},false);	
	//蝴蝶飞
		var oI=document.querySelector('#butterfly');
		var oP=document.querySelector('#butterfly p');
			var r=45;
			function move(obj,end){
				var dis=end-0;
				var count=Math.floor(3000/30);
				var n=0;
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){
					n++;
					var cur=90-n/count*dis;
					var b=Math.sin(d2a(cur))*r;
					var a=Math.cos(d2a(cur))*r;
					var x=a+r;
					var y=r-b;
					obj.style.transform='translate('+x+'px,'+y+'px)';		
				},30);
			}
			move(oP,360);
	//我的作品展示
	
},false)