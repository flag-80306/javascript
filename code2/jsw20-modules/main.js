import myExampleService from "./myExampleService.js";
import geometryService from "./geometryService.js";

const divCounter = document.querySelector("#divCounter");
const buttonUp = document.querySelector("#buttonUp");

let counter = 0;

buttonUp.addEventListener("click", function() {
    counter += 1;
    divCounter.textContent = counter;
})

const x = geometryService.circleArea(4);
console.log(x);