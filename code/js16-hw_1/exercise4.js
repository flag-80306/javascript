// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n.


let number = 5;


let output = "";

for (let i = 1; i <= number; i++) {
    

    if (i < number) {
      output += i + " + ";
    } else {
      output += i + " = ";
    }
}
const total = (number * (number + 1)) / 2;
console.log(output + total);
