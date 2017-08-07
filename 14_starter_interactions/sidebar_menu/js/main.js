// Write your pseudo code here! HAPPY CODING! :)

// When the user clicks on .hamburger
  // Add the active class to the .sidebar (uses translateX to slide in)

  // When the user clicks on .close
    // Remove the active class to the .sidebar (uses translateX to slide in)

  $('.hamburger').on('click', function (){
    $('.sidebar').addClass('active');
  });
