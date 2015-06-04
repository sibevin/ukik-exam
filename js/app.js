$(function(){
  $("#menu_switch").on("click", function(){
    if ($("#menu").is(":visible")) {
      $("#menu").hide();
    } else {
      $("#menu").show();
    }
  });
});
