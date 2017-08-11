
$(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();
  console.log(distanceScrolled);

  if ($(document).scrollTop() >= 768) {
    $('.projects').addClass('faded-in');
  }
  if ($(document).scrollTop() >= 1430) {
    $('fave-things').addClass('faded-in');
  }
});



// When a user scrolls to the contact section (.contact)
//  Slowly fadeIn the section .contact
