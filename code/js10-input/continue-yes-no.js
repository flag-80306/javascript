const readlineSync = require("readline-sync");

console.log("Numero?");
const number = readlineSync.question("> ");




while (answer.toUpperCase() == "Y") {
    console.log("Mais um?");
    let answer = readlineSync.question("(Y/N) > ");    
}
