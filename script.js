$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");

        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");   
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });



    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["프로그래밍을 공부하고 있습니다.", "게임 개발을 진행중 입니다."],
        typeSpeed: 25,
        backSpeed: 30,
        loop: true
    });
    
})

