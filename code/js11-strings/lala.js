const readlineSync = require("readline-sync");

function whatsYourName() {
    console.log("What's your name?");
    let name = readlineSync.question("> ");
    console.log("Hi, " + name + ". Welcome to the fantastic Beachwalk Hotel.");
}

whatsYourName();

const breakfastPrice = 10;
const deluxeRoomPrice = 120;
const deluxeSuitePrice = 150;
const nightPrice = 90;

console.log("How many nights would you like to stay?");
const stay = readlineSync.questionInt("> ");

console.log("Which room would you want? (normal for normal room, deluxe for deluxe room or suite for deluxe suite)");
const typeOfRoom = readlineSync.question("> ");

function howManyNights(typeOfRoom, stay) {
    if (stay >= 15) {
        return ((typeOfRoom * stay) * 0.8);
    } else if (stay >= 10) {
        return ((typeOfRoom * stay) * 0.85);
    } else if (stay >= 5) {
        return ((typeOfRoom * stay) * 0.9);
    } else {
        return typeOfRoom * stay;
    }
}

if (typeOfRoom == "normal") {
    howManyNights(nightPrice, stay);
} else if (typeOfRoom == "deluxe") {
    howManyNights(deluxeRoomPrice, stay);
} else if (typeOfRoom == "suite") {
    howManyNights(deluxeSuitePrice, stay);
}

function includeBreakfast(stay) {
    const x =  howManyNights(typeOfRoom, stay) + (breakfastPrice * stay);
    console.log(howManyNights(typeOfRoom, stay))
    console.log(typeof howManyNights(typeOfRoom, stay))
    return x
}

console.log("Would you like to include breakfast? (y for yes, n for no)");
const wantBreakfast = readlineSync.question("> ");

if (wantBreakfast == "y") {
    console.log("The total cost is " + includeBreakfast(stay) + "€.");
} else {
    console.log("The total cost is " + howManyNights(typeOfRoom, stay) + "€.");
}