"use strict";

function activateCalcButton() {
    const button = document.getElementById("calculate");
    const output = document.getElementById("price");
    button.addEventListener("click", event => {
        output.innerHTML = `&nbsp;$${calculateTotal().toFixed(2)}`;
    });
}

function calculateTotal() {
    let sum = 0;
    let inputGroups = document.getElementsByClassName("input-group");
    [...inputGroups].forEach(inputGroup => {
        let checkboxes = inputGroup.getElementsByTagName("input");
        [...checkboxes].forEach(checkbox => {
            if (checkbox.checked) {
                sum += parseFloat(checkbox.value);
            }
        });
    });
    return sum;
}

module.exports = {activateCalcButton};