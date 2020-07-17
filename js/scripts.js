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

$(function() {
  $(window).on('scroll', function() {

    if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()) {
      $('.arrow').hide();
    } else {
      $('.arrow').show();
    }
  });
});

