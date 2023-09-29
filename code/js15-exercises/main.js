// 1 - Criar uma funcao que recebe 2 numeros como argumentos
//     e retorna o mais alto desses numeros

// 2 - Criar uma funcao que recebe um array de numeros como argumento
//     e retorna o somatorio desse array

// 3 - Criar uma funcao que recebe 1 numero como argumento
//     e retorna o factorial desse numero

// 4 - Criar uma funcao que recebe um array de numeros como argumento
//     e altera todos os numeros para o dobro

// 5 - Criar uma funcao que recebe um array de numeros como argumento
//    e retorna um array com os numeros todos triplicados


// SOLUCAO 1
// const number1 = 4;
// const number2 = 7;

// function biggerOf2(n1, n2) {
//     if (n1 > n2) {
//         return n1;
//     } else {
//         return n2;
//     }
// }
// console.log(biggerOf2(number1, number2));
// console.log(biggerOf2(4, 5));

// SOLUCAO 2
// function sumOfArray(numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total;
// }

// console.log(sumOfArray([3, 5, 3]));
// console.log(sumOfArray([1, 1, 1]));

// SOLUCAO 3
// function factorial(number) {
//     let resultado = 1;
//     for (let i = 2; i <= number; i++) {
//         resultado *= i;
//     }
//     return resultado;
// }
// console.log(factorial(1));
// console.log(factorial(5));

// SOLUCAO 4
// function doubleArray(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         numbers[i] = numbers[i] * 2;
//     }
    
//     return undefined; // implicito, nao e necessario
// }

// const x = [3, 4, 5, 6, 7];
// doubleArray(x);
// console.log(x);

// SOLUCAO 5
function tripledArray(numbers) {
    const tripledNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        tripledNumbers.push(numbers[i] * 3);
    }
    return tripledNumbers;
}
const x = [2, 5, 9];
const y = tripledArray(x);
console.log(x);
console.log(y);