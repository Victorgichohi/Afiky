$(function(){
  $(".card").hover(
    function() {
      $(this).find(".image-overlay").show();
      $(this).find(".image-overlay").animate({
        height: "100%",
        top: "0.0em"},300);
      },
      function() {
        $(this).find(".image-overlay").animate({
          display: "none",
          height: "0px",},300).hide();
          $(this).find(".image-overlay").hide();
        });
});
