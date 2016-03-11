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
    $(".menu-right").toggle().animate({
      width: "350px"
    }, 500);
  });
  $(".menu-right #menu-close").click(function() {
    $(".menu-right").animate({
      width: "0",
      display: "none"
    }, 500);
  });
});
