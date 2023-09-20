const numbers = [23, 43, 5, 13, 9, 36, 17, 50];
const doubledNumbers = [];
const smallNumbers = [];

// EXERCICIO 1
// PREENCHE O NOVO ARRAY COM OS VALORES DO ARRAY ORIGINAL DOBRADOS

// EXERCICIO 2
// PREENCHE O NOVO ARRAY APENAS COM OS VALORES INFERIORES A 20

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    doubledNumbers.push( numbers[i] * 2);

    if (numbers[i] < 20) {
        smallNumbers.push(numbers[i]);
    }
}

console.log(numbers);
console.log(doubledNumbers);
console.log(smallNumbers);