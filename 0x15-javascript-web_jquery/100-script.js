// Ensures that the script is exec only after DOM has fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the header element
    let headerElement = document.querySelector('header');

    // Update the text color to red
    headerElement.style.color = '#FF0000';
});