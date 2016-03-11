$(function() {
  $(".card").hover(
    function() {
      $(this).find(".image-overlay").show();
      $(this).find(".image-overlay").animate({
        height: "100%",
        top: "0.0em"
      }, 300);
    },
    function() {
      $(this).find(".image-overlay").animate({
        display: "none",
        height: "0px",
      }, 300).hide();
      $(this).find(".image-overlay").hide();
    });

  $(".menu #menu-open").click(function() {
    $("#menu-close").show();
    $(".menu-right").show().animate({
      width: "350px"
    }, 500);
    $('body').css("opacity","0.4");
    $(".page-overlay").show();
  });
  var closeMenu = function(){
    $("#menu-close").css("display","none");
    $(".menu-right").animate({
      width: "0",
      display: "none"
    }, 500);
    $('body').css("opacity","1");
    $(".page-overlay").hide();
  }

  $("#menu-close").click(function() {
    closeMenu();
  });
  // $('html').on('click', function(){
  //   closeMenu();
  // });
});
