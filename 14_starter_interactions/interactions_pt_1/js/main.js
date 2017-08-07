
// WHEN the user clicks the button (#dropdownButton)
  // Slide toggle the dropdown menu (#dropdownMenu)

// When the user clicks the faq list item (#question2)
  // Slide down #answer2
  // Change the background color of #question2 to yellow (add the active class)
  // Slide up #answer1
  // Change the bg color of #question1 to grey (by removing the active class)

// When the user clicks the "Show yellow circles" button (#showYellowCircles)
  // Hide the blue circles (.blue)
  // Fade in the yellow circles (.yellow)




$('#dropdownButton').on('click', function() {
  $('#dropdownMenu').slideToggle(300);
});

$('#question2').on('click', function () {
  $('#answer2').slideDown(600);
  $('#question2').addClass('yellow');
  $('#answer1').slideUp(300);
  $('#question1').removeClass('active');
});

$('#question2').on('dblclick', function (){
  $('question2').slideDown(300);
});

$('#showYellowCircles').on('click', function () {
  $('.blue').hide();
  $('.yellow').fadeIn('slow');
});

$('#showBlueCircles').on('click', function (){
  $('.yellow').hide();
  $('.blue').fadeIn('slow');
});




  //When a user clicks on the dropdownbutton,
  //  Slidetoggle the dropdownmenu.

  //If the user clicks on the first dropdown button with the menu open,
  //  the menu will slidetoggle.

  //When the user clicks on fazq list item (question2)
  //  Slide down #answer2
  //  Change the background color of question2 to yellow (add active class)
  //  Slide up #answer1
  //  Change the bg color of of questions 1 to graey (by removing the active class)

  //When the user clicks the "show yellow circles" button (#showYellowCircles)
  //  Hide the blue circles (.blue)
  //  Show the yellow circles (.yellow)
