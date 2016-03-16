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
    $('body').css("overflow-y","hidden");
    $(".page-overlay").show();
    $("#menu-close").show();
    $(".menu-right").show().animate({
      width: "300px"
    }, 100);
  });

  var closeMenu = function(){
    $(".page-overlay").hide();
    $('body').css("overflow-y","auto");
    $("#menu-close").css("display","none");
    $(".menu-right").animate({
      width: "0",
      display: "none"
    }, 100);
  }

  $("#menu-close").click(function() {
    closeMenu();
  });

  $(".page-overlay").click(function(){
    closeMenu();
    // $('body').css("overflow-y","hidden");
    // $(".page-overlay").hide();
    // $("#menu-close").css("display","none");
    // $(".menu-right").animate({
    //   width: "0",
    //   display: "none"
    // }, 500);
  });

});
