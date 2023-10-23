const addTodoForm = document.querySelector("#addTodoForm");
const todoList = document.querySelector("#todoList");
const delButtons = document.querySelectorAll(".delButtons");

const todos = [
    "ir as compras",
    "Jogar Spider-Man 2 PS5",
    "fazer TPC"
];

addTodoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const todoFormData = new FormData(addTodoForm);
    todos.push(todoFormData.get("item"));

    udpateListUI();

    addTodoForm.reset();
});

todoList.addEventListener("click", function(event) {
    if (event.target.tagName != "BUTTON") {
        return;
    }
    
    // descobrir o indice do array
    // relativo ao delete button que foi clickado
    // o delete button especifico e o `event.target`
    const indexToDelete = 3;
    todos.splice(indexToDelete, 1);

    udpateListUI();
});

function udpateListUI() {
    todoList.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        todoList.innerHTML += `<li>${ todos[i] } <button class="delButton">❌</button></li>`;
    }
}

udpateListUI();