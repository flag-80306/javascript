const people = [
    {
        name: "Zé",
        age: 20,
        city: "Porto",
    },
    {
        name: "Josefina",
        age: 22,
        city: "Coimbra",
    },
    {
        name: "Marta",
        age: 12,
        city: "Lisboa",
    },
    {
        name: "Xico",
        age: 40,
        city: "Lisboa",
    },
    {
        name: "Rodrigo",
        age: 28,
        city: "Torres Vedras",
    },
    {
        name: "António",
        age: 45,
        city: "Porto",
    },
    {
        name: "Luísa",
        age: 32,
        city: "Braga",
    },
    {
        name: "Ana",
        age: 18,
        city: "Lisboa",
    }
];

// Exercicio 1:
// Media das idades

// Exercicio 2:
// a cidade da pessoas Mais Velha

// Exercicio 3:
// quantas pessoas têm pelo menos um 'o' no nome

// Exercicio 4:
// quantas pessoas sao do Porto

// Exercicio 5:
// quantas pessoas sao do Porto e tem mais de 20 anos

// Exercicio 6:
// Cria um novo array de objectos apenas com as pessoas de Lisboa

// EXERCICIO 1
// let agesSum = 0;
// for (let i = 0; i < people.length; i++) {
//     agesSum += people[i].age;
// }
// console.log("Media: " + agesSum / people.length);

// EXERCICIO 2
// let oldest = 0;
// let cityOfOldest = "";
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age > oldest) {
//         oldest = people[i].age;
//         cityOfOldest = people[i].city;
//     }
// }
// console.log(cityOfOldest);



// let oldestPerson = people[0];
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age > oldestPerson.age) {
//         oldestPerson = people[i];
//     }
// }
// console.log(oldestPerson.city);


let indexOfOldest = 0;
for (let i = 0; i < people.length; i++) {
    if (people[i].age > people[indexOfOldest].age) {
        indexOfOldest = i;
    }
}
console.log(people[indexOfOldest]);
console.log(people[indexOfOldest].city);