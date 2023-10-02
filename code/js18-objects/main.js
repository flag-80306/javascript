// Tipos de valores
// String
// Number
// Boolean
// Array
// Object
// undefined

const person1 = {
    name: "Bob",
    age: 20,
    city: "NY"
};

const person2 = {
    name: "Joe",
    ages: 22,
    city: "London",
};

// imprime o nome e a cidade do Mais Velho :)

if (person1.age > person2.age) {
    console.log("O 1 é o mais velho")
    console.log(person1.name + ": " + person1.city);
} else if(person1.age < person2.age) {
    console.log("O 2 é o mais velho")
    console.log(person2.name + ": " + person2.city);
} else {
    console.log("São da mesma idade");
    console.log(person1.name + ": " + person1.city);
    console.log(person2.name + ": " + person2.city);
}
