function greeting(name) {
    return "Hello " + name
}

function greetAllNames(names) {
    let message = "";
    for(let i = 0; i < names.length; i++) {
        message += greeting(names[i] + "\n");
    }
    return message;
}

const names = ["Bob", "Martha", "Joe", "I dunno..."];
console.log(greetAllNames(names));