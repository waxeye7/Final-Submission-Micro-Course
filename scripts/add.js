// calls this function on button press with id="add-button"
document.getElementById("add-button").onclick = function() {
    // make a variable of the ul element to append children li elements to later
    let listOfDonations = document.getElementById("listofDonations");

    // make another variable for a created li element
    let itemInListOfDonations = document.createElement("li");

    // make yet another variable for the value inside the input box
    let number = document.getElementById("item").value;

    // set the li element's inner html to the value in the input box
    itemInListOfDonations.innerHTML = number;

    // append the li element with it's inner html (number) from the input box included to the ul element!
    listOfDonations.appendChild(itemInListOfDonations);

    // now all that's left to do is to clear the input box's value to "" so another item can be inputted!
    document.getElementById("item").value = "";
}