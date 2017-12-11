
// pull in the module(s) you'll need to fetch the toppings' prices
const meat = require("./toppings/meat"); //If this is the path to your mat.js file, how do you need to structure your files to make this work?

// Variable to hold the price of the sandwich. Default to 0.
var sandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen

  // Add the price to the total price and update the DOM to display the sandwich cost
});