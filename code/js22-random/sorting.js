const x = [40, 500, 12, 3, 1, 6];

// bubble sort
// for (let i = 0; i < x.length - 1; i++) {
//     for (let j = 0; j < x.length - i; j++) {   
//         if (x[j] > x[j + 1]) {
//             const temp = x[j];
//             x[j] = x[j + 1];
//             x[j + 1] = temp;
//         }
//     }
// }

console.log(x.sort());

const names = [
    "Helder",
    "Diogo",
    "Joao Magalhaes",
    "Tiago",
    "Rui",
    "Daniel",
    "Rodrigo",
    "Joao Pedro",
    "Wander", 
    "Bruno"
];

x.sort(function(valorA, valorB) {
    console.log("estou a ordenar...");
    return valorA - valorB;
    // if (valorA > valorB) {
    //     return 1;
    // }
    // if (valorB > valorA) {
    //     return -1;
    // }
    // if (valorA == valorB) {
    //     return 0;
    // }
});

console.log(x);