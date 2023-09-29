const names = ["Helder", "Bob", "Joe", "Marta", "Ze", "Andreia", "Diogo"];
const namesWithA = [];

// 1 problema a resolver
// como se ve se um nome contem uma determinada letra

// 2
// aplicar essa solucao ao array
// se for verdadeiro acrescentar ao novo Array

function textHasLetter(text, letter) {
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        const currentLetter = text[i];
        
        if (currentLetter == letter) {
            counter += 1;
        }
    }
    
    if (counter > 0) {
        return true;
    } else {
        return false;
    }
}

function createArrayWithAs(names) {
    const filteredArray = [];
    for (let i = 0; i < names.length; i++) {
        if ( textHasLetter(names[i], "a") ) {
            filteredArray.push(names[i]);
        }
    }
    return filteredArray;
}


console.log(createArrayWithAs(names));

// console.log(textHasLetter("aaaaaaa", "b"));
// console.log(textHasLetter("abcdef", "c"));
// console.log(textHasLetter("qualquer coisa", "z"));
// console.log(textHasLetter("qualquer coisa", " "));
// console.log(textHasLetter("teste teste", "y"));