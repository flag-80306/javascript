// Criar uma funcao que recebe um array de numeros
// e retorna um novo array com apenas os numeros superiors a 20

function filter20AndUp(numbers) {
    const filteredArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 20) {
            filteredArray.push(numbers[i]);
        }
    }
    return filteredArray;
}

const x = [23, 4, 20, 400, 21, 56, 4, 100];
const y = filter20AndUp(x);

console.log(y);