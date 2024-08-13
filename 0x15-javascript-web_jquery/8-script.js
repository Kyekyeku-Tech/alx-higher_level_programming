// script is executed only after the DOM has fully loaded.
$(document).ready(function() {
    // Fetch data from the provided URL
    $.ajax({
        url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
        method: 'GET',
        success: function(data) {
            // Iterate over each movie in the response
            $.each(data.results, function(index, movie) {
                // Create a new list item for each movie title and append it to the UL#list_movies
                $('<li>').text(movie.title).appendTo('ul#list_movies');
            });
        }
        // error: function(xhr, status, error) {
        //     // Handle errors
        //     console.error(error);
        // }
    });
});