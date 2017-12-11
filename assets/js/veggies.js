"use strict";

let vegPrices = {
    "lettuce": 0.25,
    "onions": 0.35,
    "bell_peppers": 0.30,
    "tomatoes": 0.40,
    "pickles" : 0.25
};

module.exports.getVeggies = () => {
    return vegPrices;
}

module.exports.addVeggie = veggie => {
}