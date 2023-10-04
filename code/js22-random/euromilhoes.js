// gera 5 numeros e 2 estrelas :D

function randomInt(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
}

function generateNumbers(amount, min, max) {
    const result = [];
    while (result.length < amount) {
        let r = randomInt(min, max);
        if (!result.includes(r)) {
            result.push(r); 
        }
    }
    
    // ordena o array com uma funcao callback, mais sobre este assunto no futuro :D
    result.sort((a, b) => a - b);
    
    return result;
}

const numbers = generateNumbers(5, 1, 50);
const stars = generateNumbers(2, 1, 12);

const euro1 = numbers + " - " + stars;

console.log(euro1);

let counter = 0;
while(true) {
    counter ++;
    if (counter % 100000 == 0) {
        console.log(counter);
    }
    const newNumbers = generateNumbers(5, 1, 50);
    const newStars = generateNumbers(2, 1, 12);

    const euro2 = newNumbers + " - " + newStars;

    if (euro1 == euro2) {
        break;
    }
}  


console.log("GANHEI O EURO MILHOES!!!!");
console.log(counter);