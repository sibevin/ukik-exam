$(function(){
  var display_menu = function(){
    if ($("#menu").is(":visible")) {
      $("#menu").hide();
      $("#menu_background").hide();
    } else {
      $("#menu").show();
      $("#menu_background").show();
    }
  };
  $("#menu_switch").on("click", display_menu);
  $("#menu_background").on("click", display_menu);
});
