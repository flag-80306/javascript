// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

const max = 8;

let result = "";
// let total = 0;
for (let i = 1; i <= max; i++) {
    // total += i;
    console.log(total)
    result += i;
    
    if (i < max) {
        result += " + ";
    } else {
        result += " = ";
    }
    
}
const total = (max + 1) * (max / 2);
console.log(result + total);