var mySwiper4 = new Swiper('.swiper-container4',{
                                loop: true,
                                slidesPerView :3,
                                autoplay :3000,
                                speed:1000,
                            })

var mySwiper = new Swiper('.swiper-container',{
                    pagination : '.pagination',
                    paginationHover: true,
                    simulateTouch : false,
                    loop:true,
                    autoplay: 5000,
                    speed:1000,
                });

var wid=$(".banner-box").css('width');
wid=parseInt(wid);            
var hei=$(".banner-box").height(300*wid/640+"px");


$(function(){

    function getH(){
        var h=$("#mobile_minchat_div").height();
        $(".end").css("bottom",h+"px");       
}
    setTimeout(getH,500) 
        
})


