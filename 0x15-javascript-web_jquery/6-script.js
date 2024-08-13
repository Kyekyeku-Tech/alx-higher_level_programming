// Ensures script is executed only when DOM has loaded
$(document).ready(function() {
    // Event listener for when the user clicks on the div with ID update_header
    $('div#update_header').click(function() {
        // Update the text of the <header> element
        $('header').text('New Header!!!');
    });
});