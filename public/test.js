$(function(){
  $('header a').click(function(){
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('html, body').animate({ scrollTop: top }, 500);
  });
});


$(function(){
    $("button").click(function(){
        $("img").attr("src", "./public/2.jpg");
    });
});


