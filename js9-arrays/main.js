const ages = [38, 32, 29, 28, 28, 31, 35, 33, 29, 42];

// exercicio:
// eu quero saber a media das nossas idades :D
// o resultado e 32.5

// qual a idade do mais velho
// qual a idade do mais novo

let total = 0;
let oldest = ages[0];
let youngest = ages[0]; 

for (let i = 0; i < ages.length; i++) {
    console.log(ages[i]);

    total += ages[i];

    if (ages[i] > oldest) {
        oldest = ages[i];
    }

    if (ages[i] < youngest) {
        youngest = ages[i];
    }
}
const average = total / ages.length;

console.log("A soma das idades é " + total);
console.log("A média das idades é " + average);
console.log("A idade do mais velho é " + oldest);
console.log("A idade do mais novo é " + youngest);
