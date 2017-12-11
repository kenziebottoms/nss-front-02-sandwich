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
    let inputGroup = document.getElementById("condiments");
    let condiments = module.getCondiments();
    createInputGroup(inputGroup, "condiments", condiments);
}
function populateCheeses() {
    let module = require("./cheese");
    let inputGroup = document.getElementById("cheeses");
    let cheeses = module.getCheeses();
    createInputGroup(inputGroup, "cheeses", cheeses);
}

function populateMeats() {
    let module = require("./meat");
    let inputGroup = document.getElementById("meats");
    let meats = module.getMeats();
    createInputGroup(inputGroup, "meats", meats);
}

function populateVeggies() {
    let module = require("./veggies");
    let inputGroup = document.getElementById("veggies");
    let veggies = module.getVeggies();
    createInputGroup(inputGroup, "veggies", veggies);
}
function populateBreads() {
    let module = require("./bread");
    let inputGroup = document.getElementById("breads");
    let breads = module.getBreads();
    createInputGroup(inputGroup, "breads", breads);
}

function createInputGroup(inputGroup, name, menu) {
    for (let key in menu) {
        let span = document.createElement("span");
        span.classList = "input-group-addon";
        let input = document.createElement("input");
        input.type = "checkbox";
        input.name = name;
        input.value = menu[key];
        span.appendChild(input);
        span.innerHTML += `&nbsp;${key.replace("_"," ")}`;
        inputGroup.appendChild(span);
    }
}

module.exports = {populateDropdowns};