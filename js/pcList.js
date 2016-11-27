window.onload = function () {
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
};