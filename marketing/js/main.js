
//navHover
var $navAct = $('.nav-act');
function goback(left){$navAct.css('left',String(left+'px'));$navAct.css('transition','linear 0.5s');$navAct.css('transform','skew(0deg)');}


$(document).ready(function(){

    //browserupgrade
    $('.close').click(function(){
        $('.browserupgrade').css('display','none');
    });

    //navHover
    var $oldML = 0;
    $(".navul li").mouseenter(function(){
        $oldML = $navAct.css('left');

        $navAct.css('left',String(($(this).index())*125)+'px');
        if(parseInt($navAct.css('left')) > parseInt($oldML)){
            $navAct.css('transition','linear 0.5s');
            $navAct.css('transform','skew(-30deg)');
        }else{
            $navAct.css('transition','linear 0.5s');
            $navAct.css('transform','skew(30deg)');
        }
    });

    $(".navul").mouseleave(function(){
        goback();
        $navAct.css('transition','linear 0.5s');
        $navAct.css('transform','skew(0deg)');
    });

    //canvas


    var jWindow = $(window);
    jWindow.scroll(function(){
        //java
        var scrollHeight = jWindow.scrollTop();
        var screenHeight = jWindow.height();
//      var javaHeight = $(".java").offset().top;

//      if(scrollHeight + screenHeight*0.8 >= javaHeight){
//          $(".java-text").css("opacity","1");
//          $(".java-text").css("transform","scale(1)");
//      }

//      if(scrollHeight + screenHeight * 0.6 <  javaHeight || scrollHeight *0.9 >  javaHeight ){
//          $(".java-text").css("opacity","0");
//          $(".java-text").css("transform","scale(0)");
//      }


        //advantage
//      var advHeight = $(".advantage").offset().top;
//      if((scrollHeight + screenHeight *0.8) >= advHeight){
//          $(".advantage .box").slideDown("slow");
//      }
//      if(scrollHeight + screenHeight * 0.8 <  advHeight ){
//          $(".advantage .box").slideUp("slow");
//      }

    });

    //teacher
    $(".teacher .box").hover(function(){
        $(this).addClass('act').siblings().removeClass('act');
    });


    <!--tab-->
    var $tab_li = $('.tab-ul li');
    $tab_li.hover(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        var index = $tab_li.index(this);
        $('.tab-box > div').eq(index).show().siblings().hide();
    });
    var $tab_li2 = $('.tab-ul2 li');
    $tab_li2.hover(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        var index = $tab_li2.index(this);
        $('.tab-box2 > div').eq(index).show().siblings().hide();
    });
    var $tab_li3 = $('.tab-ul3 li');
    $tab_li3.hover(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        var index = $tab_li3.index(this);
        $('.tab-box3 > div').eq(index).show().siblings().hide();
    });
    var $tab_li4 = $('.tab-ul4 li');
    $tab_li4.hover(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        var index = $tab_li4.index(this);
        $('.tab-box4 > div').eq(index).show().siblings().hide();
    });
	
	
	<!--about-tab-->
    var $about_tab_li = $('.about05-ul01 li');
    $about_tab_li.hover(function(){
        $(this).addClass('about05-ul01-selected').siblings().removeClass('about05-ul01-selected');
        var index = $about_tab_li.index(this);
        $('.about05-tab-box > div').eq(index).show().siblings().hide();
    });

    //about07
    var $about07div = $('.about07 > div');
    $about07div.hover(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.tab-box > div').eq(index).show().siblings().hide();
    });
	
	
	
});




