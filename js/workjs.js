$(function(){
  $(".card").hover(function() {
      $(this).find(".image-overlay").show("slow");
 },
 function() {
      $(this).find(".image-overlay").hide("slow");
 });
});
