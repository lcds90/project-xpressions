AOS.init();
jQuery.noConflict();
// Use jQuery via jQuery() instead of via $()
$(document).ready(function () {
  
  var msg = 'XPRESSIONS'
  msg = " ...Just a scrolling title example" + msg;position = 0;

  $("#login").hide();
  $("#navbarCont").hide().delay(10000).slideDown(500);
  $("#main").hide().delay(10000).slideDown(1500);
  $(".content-page").hide().delay(12000).slideDown(2000);
  $("#footer").hide().delay(9000).slideDown(2000);
  loadGreeting();
  $("#greetings").delay(6000).slideUp(1500);
  $("#startMessage").delay(6000).fadeOut(1500).animate({
    height: "0px",
  });

  $("#btn-menu-home").click(function () {
    $("#encolher").delay(1000).slideToggle('slow');
  });

  function loadGreeting(user) {
    var div = $("#greetings");

    var now = new Date().getHours();
    var text;

    if (now >= 6 && now < 12) {
      text = "Bom dia";
    } else if (now >= 12 && now < 18) {
      text = "Boa tarde";
    } else if (now >= 18 && now < 22) {
      text = "Boa noite";
    } else {
      text = "Olá";
    }

    var message = "<br><span class='display-4 text-success'>Bem vindo</span>";

    return div.html("<span class='display-1 text-danger'>" + text + "</span>" + message);
  }

});
