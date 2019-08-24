$(document).ready( function() { 
    $("#headers").load("header.html"); //헤더 

    $("#slideshow > div:gt(0)").hide(); //슬라이드
    
    var speed = 500; // top버튼
    $(".top").css("cursor", "pointer").click(function()
    {
        $('body, html').animate({scrollTop:0}, speed);
    });
\
});
/*슬라이드*/
setInterval(function() { 
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  },  3000);

  jQuery(document).ready(function($) {
    $(".scroll").click(function(event){            
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
    
});
