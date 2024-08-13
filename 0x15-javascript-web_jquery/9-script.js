// script is executed only after the DOM has fully loaded.
$(document).ready(function() {
    // Fetch data from the provided URL
    $.ajax({
        url: 'https://hellosalut.stefanbohacek.dev/?lang=fr',
        method: 'GET',
        success: function(data) {
            // Update the text content of <div>
            $('div#hello').text(data.hello);

        }
    });
});