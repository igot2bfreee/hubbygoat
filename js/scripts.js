$(function() {
    $("#loginButton").click(function() {
    $("#loginModal").modal();
    });
});

$(function() {
  $('.arrow').click(function() {
    $('html').animate({ scrollTop: $('html').prop('scrollHeight')}, 1200);
  });
});

