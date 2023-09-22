let text1 = "";
for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    text1 += i + ", ";
  } else {
    text1 += i;
  }
}
console.log(text1);
//
let text2 = "";
let num = 10
text2 = (num * (num + 1)) / 2;

console.log(text2);
//
let text3 = "";
for (let i = 1; i <= 10; i++) {
  
  if (i < 10) {
    text3 += i + " + ";
  } else {
    const total = ( (i + 1)) * i / 2;
    text3 += i + " = " + total;
  }
}
console.log(text3);