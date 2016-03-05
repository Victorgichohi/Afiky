$(function(){
  $(".fa-link").hide();
  $(".card").hover(function() {
      $(this).fadeTo("slow", 0.85).css('z-index',-100000);
      $(this).find(".fa-link").show().css('z-index',10000);
 },
 function() {
    $(this).stop().fadeTo("slow", 1);
    $(this).find(".fa-link").hide();
 });
});
