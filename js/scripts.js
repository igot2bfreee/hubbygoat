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

/* how can i write this function differently so don't have the backwards navigation issue??? */
$(function() {
  $(window).on('scroll', function() {

    if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()) {
      $('.arrow').hide();
    } else {
      $('.arrow').show();
    }
  });
});