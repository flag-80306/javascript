const readlineSync = require("readline-sync");

console.log("Introduz uma password?");

let password = readlineSync.question("> ");

let counter = 3;
while ((password.length < 8 || password.length > 16) && counter > 1) {
    counter --;
    console.log("Password invalida (tem de ter entre 8 e 16 chars)");
    console.log("Tens mais " + counter + " tentativa(s)");
    password = readlineSync.question("> ");

}

if (counter > 1) {
    console.log("JA FOSTE...");
} else {
    console.log("Obrigado! a applicacao ia continuar por aqui...");
}


// EXERCICIO
// continuar a pedir a password, enquanto ela nao for valida
// entre 8 e 16 caracteres














const x = 18;
const y = 16;

// x tem de ser entre 5 e 20
// y tem de ser entre 10 e 20
// x tem de ser sempre menor que y

// if ( isValidX() || isValidY() || xIsSmaller() ) {
    
// }

// if ( (x >= 5 && x <= 20) || (y >= 10 && y <= 20) || (x < y) ) {

// }

// function isValidX() {
//     return x >= 5 && x <= 20;
// }

// function isValidY() {
//     return x >= 10 && x <= 20;
// }

// function xIsSmaller() {
//     return x < y;
// }