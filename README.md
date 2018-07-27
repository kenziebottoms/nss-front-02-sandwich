# Sandwich Maker

![](https://img.shields.io/badge/data-static-lightgrey.svg)
![](https://img.shields.io/badge/template-none-lightgrey.svg)
![](https://img.shields.io/badge/js-jquery-blue.svg)
![](https://img.shields.io/badge/modularity-browserify-yellow.svg)
![](https://img.shields.io/badge/css_preprocessor-scss-ff69b4.svg)
![](https://img.shields.io/badge/css_framework-bootstrap-5F2C7C.svg)
![](https://img.shields.io/badge/mvp-working-brightgreen.svg)

## Run locally

```
git clone git@github.com:kenziebottoms/nss-front-02-sandwich.git
cd nss-front-02-sandwich
npm install
grunt
hs -o
```

## Requirements

Your project should have one HTML file that has:

- [x] A section of options for each sandwich part
- [x] The ability to select multiple, or zero, choices for each section (such as turkey _and_ bacon, or "no meat")
- [x] An empty DOM element into which the final sandwich order and its cost will be inserted

- [x] Create a sandwich order form that allows the user to select all the ingredients for a custom deli sandwich. Create a `Sandwich` module, then create the following as individual modules.

    * [x] bread
    * [x] meat
    * [x] cheese
    * [x] condiments
    * [x] veggies

- [x] The ingredient choices in each module should be stored as JS objects that contain the ingredients as keys and their cost as the value.

```Javascript
{"turkey": 0.90,
"bacon": 1.50}
```

- [x] Make sure the ingredient objects cannot be accessed by the other modules except through an accessor (getter) method.
- [x] Each module should expose, via `module.exports`, a method named `add{ingredient}` (e.g. `addMeat` or `addVeggies`) that accepts a single argument. That argument's value should be the ingredient selected by the user. You will need to implement Browserify as a task in a Gruntfile, in order to compile your modules into a single JS file.
- [x] You should also create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.

> Don't worry about exposing the prices to the user until you display the final cost. This is just an exercise, not a business model.

Here's some simple boilerplate code to get you started.

##### [meat.js](assets/js/sample/meat.js)

##### [DOMHandler.js](assets/js/sample/DOMHandler.js)

### Bonus

Once you have this working, refactor it by adding an additional module that acts as a control center of sorts for all of the toppings modules. Then import that single module into `DOMHandler.js`. What would be the advantage of doing this? Isn't it just more code to achieve the same result? Look into the concept of abstraction in software design and decide if this fits that definition.