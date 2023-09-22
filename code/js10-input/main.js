// NO TERMINAL FAZER
// npm i readline-sync

const readlineSync = require("readline-sync");

console.log("Olá, como te chamas?");
const name = readlineSync.question("> ");

console.log("Olá " + name + ", queres saber a tabuada de que número?");
let number = readlineSync.question("> ");
number = parseInt(number);

for (let i = 1; i<= 10; i++) {
    const result = number * i;
    console.log(number + " x " + i + " = " + result);
}

console.log("Vamos somar agora:");
console.log("Qual o Primeiro número?");
let n1 = readlineSync.question("> ");
n1 = parseInt(n1);

console.log("Qual o Segundo número?");
let n2 = readlineSync.question("> ");
n2 = parseInt(n2);

console.log(n1 + n2);