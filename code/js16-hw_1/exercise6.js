const readlineSync = require('readline-sync');
console.log('Hello, please choose a number between 1 and 10.');
let max = Number(readlineSync.question('> '));
console.log('sum or factorial?');

let choice = readlineSync.question('> ');

if (choice == 'sum') {
    let somar = 0;
    for (let i = 1; i <= max; i++) {
        somar = (1 + max) * (max / 2);
    }
    console.log(somar);
} else if (choice == 'factorial') {
    let total = 1;
    for (let i = 2; i <= max; i++) {
        total *= i;
    }
    console.log(total);
} else {
    ('wrong choice');
}