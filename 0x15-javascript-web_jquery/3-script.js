// Uses jQuery API to change color of tag to red on click

// Ensures that script is exec only after DOM has loaded
$(document).ready(function() {
    // Event listener for when user clicks on the Tag
    $('div#red_header').click(function () {
        // Add the class 'red' to update text color of the <header>
        $('header').addClass('red');
    });
});
