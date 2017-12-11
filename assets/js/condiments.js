"use strict";

let condimentPrices = {
    "mustard": 0.25,
    "chipotle_ranch": 0.30,
    "ranch": 0.20,
    "honey_mustard": 0.25
};

module.exports.getCondiments = () => {
    return condimentPrices;
};

module.exports.addCondiment = condiment => {
};