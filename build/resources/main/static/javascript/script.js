
$(document).ready(function(){

$(".carousel-control-next").click(function(){
    $("#slideshow").carousel(1);
});

// Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
        $("#slideshow").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
        $("#slideshow").carousel("next");
    });


});

