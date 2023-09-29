function test1(number) {
    number += 1;
    return number;
}

let a = 10;
let b = 2;

a = test1( a * b ) * b;

console.log(a);


// function test2(array) {
//     array[1] = "100";
// }

// const x = [0, 0, 0];
// test2(x);
// console.log(x);



