const someNumber = 45.471234;

const roundedNumber = Math.round(someNumber);

console.log(roundedNumber);

function test1(x) {
    const z = []
    for (let i = 0; i < x; i++) {
        z.push(x * i * 2);
    }

    return z;
}

const result = test1(23);
console.log(result);