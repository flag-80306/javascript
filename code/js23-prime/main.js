// function isPrimeBetaVersion(number) {
//     let counter = 0;
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         // console.log(i + " : " + number % i);
//         if (number % i == 0) {
//             counter++;
//             break;
//         }
//     }
    
//     // console.log(counter);
//     if (counter == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

// for (let i = 0; i < 100; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }


let number = 1;
const primes = [];
while (primes.length < 100) {    
    if (isPrime(number)) {
        primes.push(number);
    }
    number++;
}

for (let i = 0; i < primes.length; i++) {
    console.log( (i + 1) + ": " + primes[i]);
}