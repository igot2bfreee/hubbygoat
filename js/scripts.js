$(function() {
    $("#loginButton").click(function() {
    $("#loginModal").modal();
    });
});

$(function() {
  $(".arrow").click(function() {
    $('html, body').animate( {
      scrollTop: $("#hero2").offset().top
    }, 1200);
  });
});

