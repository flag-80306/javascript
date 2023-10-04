
// function randomInt(min, max) {
//     let r = Math.random();
//     r = r * (max - min + 1);
//     r = parseInt(r);
//     r = r + min;
//     return r;
// }

function randomInt(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
}



let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;

for (let i = 0; i < 20000; i++) {
    
    const number = randomInt(1, 6);
    if (number == 1) {
        counter1 ++;
    } else if (number == 2) {
        counter2 ++;
    } else if (number == 3) {
        counter3 ++;
    } else if (number == 4) {
        counter4 ++;
    } else if (number == 5) {
        counter5 ++;
    } else if (number == 6) {
        counter6 ++;
    }
}

console.log(counter1);
console.log(counter2);
console.log(counter3);
console.log(counter4);
console.log(counter5);
console.log(counter6);
