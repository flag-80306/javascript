// vamos gerar uma chave aleatoria para o Totoloto
// criando um array com 5 numeros entre 1 e 49

function randomInt(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
}

const chave = [];

// for (let i = 0; i < 5; i++) {
//     let r = randomInt(1, 49);
//     while (chave.includes(r)) {
//         r = randomInt(1, 49);
//     }
//     chave.push(r);
// }

while (chave.length < 5) {
    let r = randomInt(1, 5);
    if (!chave.includes(r)) {
        chave.push(r); 
    }
}

console.log(chave);