// Ensures script is executed only when DOM has loaded
$(document).ready(function() {
    // Event listener for when the user clicks on the div with ID add_item
    $('div#add_item').click(function() {
        // Create a new <li> element with the text "Item"
        let addedItem = $('<li>Item</li>');
        // Append the new <li> element to the <ul> element with class my_list
        $('ul.my_list').append(addedItem);
    });
});