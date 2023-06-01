
$(document).ready(function(){
    var i = 0;

    function slide(){
        if(i<2){
            i++;
        }else{
            i = 0;
        }
     

    $(".slide a img").fadeOut()
    $(".slide a img").eq(i).fadeIn();
    }
    setInterval(slide, 2000)
    
    $(".tabmenu").click(function(){
        $(".tabmenu li").removeClass('on')
        $(this).addClass('on')

        var t = $(this).index();
        console.log(t)

        $(".tabcon").hide();
        $(".tabcon").eq(t).show()
        return false;
    })
    $(".pp").click(function(){
        $(".popup").show();
        return false;
        })
    $(".popup button").click(function(){
        $(".popup").hide();
    })
    $("nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })
})
