$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);

	// Step 2: Write Rest of JS here

});

/// When the user scrolls in the browser window
  // if distanceScrolled is greater than or equal to 542
    // Add a class to the nav to make it fixed
  // else
    // Remove the class from the nav to make it unfixed
