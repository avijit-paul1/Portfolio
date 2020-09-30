$(document).ready(function(){
    $(".fa-bars").click(function(){
        $("nav").toggleClass("nav");
    });
    $(".nav_link").click(function(){
        $("nav").removeClass("nav");
    });

    $(".nav_link").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    
 });
 