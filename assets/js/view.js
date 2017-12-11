"use strict";

function populateDropdowns() {
    populateCondiments();
    // let breads = document.getElementById("breads");
    // let meats = document.getElementById("meats");
    populateCheeses();
    // let veggies = document.getElementById("veggies");
}

function populateCondiments() {
    let module = require("./condiments");
    let dropdown = document.getElementById("condiments");
    let condiments = module.getCondiments();
    for (let key in condiments) {
        let option = document.createElement("option");
        option.innerText = key.replace("_"," ");
        option.value = condiments[key];
        dropdown.appendChild(option);
    }
}
function populateCheeses() {
    let module = require("./cheese");
    let dropdown = document.getElementById("cheeses");
    let cheeses = module.getCheeses();
    for (let key in cheeses) {
        let option = document.createElement("option");
        option.innerText = key.replace("_"," ");
        option.value = cheeses[key];
        dropdown.appendChild(option);
    }
}

module.exports = {populateDropdowns};