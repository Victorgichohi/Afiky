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
    $(".page-overlay").show();
    $("#menu-close").show();
    $(".menu-right").show().animate({
      width: "350px"
    }, 500);
  });
  var closeMenu = function(){
    $(".page-overlay").hide();
    $("#menu-close").css("display","none");
    $(".menu-right").animate({
      width: "0",
      display: "none"
    }, 500);
  }

  $("#menu-close").click(function() {
    closeMenu();
  });

  $(".page-overlay").click(function(){
    $(".page-overlay").hide();
    $("#menu-close").css("display","none");
    $(".menu-right").animate({
      width: "0",
      display: "none"
    }, 500);
  });

});
