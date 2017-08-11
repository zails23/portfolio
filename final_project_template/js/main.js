

// When a user scrolls to the section My work (.work)
// Slowly fadeIn the class "row" (.row)
// Else Hide .work

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

// When a user clicks on My Work in the nav,
//  Jump to My Work section (.work)
//  Slowly fadeIn the class "row" (.row)
//  Else hide .work

// When a user scrolls to the section favorite things (.favethings)
//  Slowly fadeIn the section (.favethings)
//  Else hide .favethings

// When a user scrolls to the contact section (.contact)
//  Slowly fadeIn the section .contact
