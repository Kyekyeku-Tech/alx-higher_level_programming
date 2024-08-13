// script that fetches the character name from this URL:
let urlApi = "https://swapi-api.alx-tools.com/api/people/5/?format=json"

// Wait for DOM to fully load before executing
document.addEventListener("DOMContentLoaded", function () {

    // Fetch data from URL
    fetch(urlApi)

        // Parse the response as JSON
        .then((response) => response.json())

        // Handle the parsed JSON data
        .then((data) => {

            // Update the text content of the div by acessing the name of the data
            $('#character').text(data.name);
        });
});