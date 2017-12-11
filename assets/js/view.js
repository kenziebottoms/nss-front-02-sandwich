"use strict";

function populateDropdowns() {
    populateCondiments();
    populateMeats();
    populateCheeses();
    populateVeggies();
    populateBreads();
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
function populateMeats() {
    let module = require("./meat");
    let dropdown = document.getElementById("meats");
    let meats = module.getMeats();
    for (let key in meats) {
        let option = document.createElement("option");
        option.innerText = key.replace("_"," ");
        option.value = meats[key];
        dropdown.appendChild(option);
    }
}
function populateVeggies() {
    let module = require("./veggies");
    let dropdown = document.getElementById("veggies");
    let veggies = module.getVeggies();
    for (let key in veggies) {
        let option = document.createElement("option");
        option.innerText = key.replace("_"," ");
        option.value = veggies[key];
        dropdown.appendChild(option);
    }
}
function populateBreads() {
    let module = require("./bread");
    let dropdown = document.getElementById("breads");
    let breads = module.getBreads();
    for (let key in breads) {
        let option = document.createElement("option");
        option.innerText = key.replace("_"," ");
        option.value = breads[key];
        dropdown.appendChild(option);
    }
}

module.exports = {populateDropdowns};