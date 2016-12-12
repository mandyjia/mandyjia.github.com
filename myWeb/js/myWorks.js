//运动函数疯转
function getStyle(obj,name){
	return (obj.currentStyle || getComputedStyle(obj,false))[name];
}
function move(obj,json,options){
	options=options || {};
	options.time=options.time || 700;
	options.type=options.type || 'ease-out';
	
	clearInterval(obj.timer);
	var count=Math.floor(options.time/30);
	var start={};
	var dis={};
	
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		
		if(isNaN(start[name])){
			switch(name){
				case 'left':
					start[name]=obj.offsetLeft;
					break;
				case 'top':
					start[name]=obj.offsetTop;
					break;
				case 'width':
					start[name]=obj.offsetWidth;
					break;
				case 'height':
					start[name]=obj.offsetHeight;
					break;
				case 'opacity':
					start[name]=1;
					break;
				case 'marginLeft':
					start[name]=0;
					break;
				case 'fontSize':
					start[name]=12;
					break;
			}	
		}
		dis[name]=json[name]-start[name];
	}
	
	
	var n=0;
	obj.timer=setInterval(function(){
		n++;
		
		for(var name in json){
			switch(options.type){
				case 'linear':
					var a=n/count;
					var cur=start[name]+dis[name]*a;
					break;
				case 'ease-in':
					var a=n/count;
					var cur=start[name]+dis[name]*Math.pow(a,3);
					break;
				case 'ease-out':
					
					var a=1-n/count;
					
					var cur=start[name]+dis[name]*(1-Math.pow(a,3));
					break;
			}
			
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';	
			}
		}
		
		if(n==count){
			clearInterval(obj.timer);
			options.end && options.end();	
		}
	},30);
}

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
	//Pclist
	var oPclist = document.querySelector('#pcList');
    var oPcul = document.querySelector('#pcList ul');
    var aPcLi = document.querySelectorAll('#pcList ul li');
    var aPcImg = document.querySelectorAll('#pcList ul li img');
    oPcul.style.width=aPcLi[0].offsetWidth*aPcLi.length+'px';
    oPcul.style.left=oPclist.offsetWidth/2-(3-0.5)*aPcLi[0].offsetWidth+'px';
    var centerline=oPclist.offsetWidth/2;
    oPcul.onmousedown=function(ev){
        var oEvent = ev || event;
        var disX = oEvent.clientX-oPcul.offsetLeft;
        document.onmousemove=function(ev){
            var oEvent = ev || event;
            var l = oEvent.clientX-disX;
            if(l>oPclist.offsetWidth/2-(1-0.5)*aPcLi[0].offsetWidth){
                l=oPclist.offsetWidth/2-(1-0.5)*aPcLi[0].offsetWidth;
            }
            if(l<oPclist.offsetWidth/2-(9-0.5)*aPcLi[0].offsetWidth){
                l=oPclist.offsetWidth/2-(9-0.5)*aPcLi[0].offsetWidth
            }
            oPcul.style.left=l+'px';
            setSize();
        };
        document.onmouseup=function(){
            document.onmousemove=null;
            document.onmouseup=null;
            oPcul.releaseCapture&&oPcul.releaseCapture();
        };
        oPcul.setCapture&&oPcul.setCapture();
        return false;
    };
    function setSize(){
        for(var i=0;i<aPcImg.length;i++){
            var c = Math.abs(centerline-(aPcLi[i].offsetWidth/2+aPcLi[i].offsetLeft+oPcul.offsetLeft));
            var scale = 1-c/500;
            scale<0.5&&(scale=0.5);
            aPcImg[i].style.width=scale*520+'px';
            aPcImg[i].style.height=scale*358+'px';
            aPcImg[i].style.marginLeft=-(scale*520-260)/2+'px';
            aPcImg[i].style.marginTop=-(scale*358-224)/2+'px';
            aPcLi[i].style.zIndex=scale*1000;
        }
    }
    setSize();
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
	//拉钩
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
