window.onload = function () {
    var oSul = document.querySelector('.boxes');  
    var aSli = document.querySelectorAll('.boxes li');
    var w = 50;
    for(var i=1;i<aSli.length;i++){
        aSli[i].style.left=oSul.offsetWidth-(aSli.length-i)*w+'px';
    }
    for(var i=0;i<aSli.length;i++){
        aSli[i].index=i;
        aSli[i].onmouseover=function(){
            for(var i=0;i<aSli.length;i++){
                if(i<=this.index){
                    move(aSli[i],{left:i*w});
                }else{
                    move(aSli[i],{left:oSul.offsetWidth-(aSli.length-i)*w})
                }
            }
        };
    }
};