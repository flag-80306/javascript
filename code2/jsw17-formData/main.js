const data = [
    {
        name: "Helder",
        email: "phelder@gmail.com",
        address: "Porto",
        createdAt: "descubram..."
    },
    {
        name: "Joe",
        email: "phelder@gmail.com",
        address: "Porto",
        createdAt: "descubram..."
    },
    {
        name: "Zezito",
        email: "phelder@gmail.com",
        address: "Porto",
        createdAt: "descubram..."
    },
]

function deleteAllRows() {
    usersTableBody.innerHTML = "";
}

function addRows() {
    for (let i = 0; i < data.length; i++) {
        const newTR = usersTableBody.insertRow();
        newTR.innerHTML = `
            <td>${data[i].email}</td>
            <td>${data[i].name}</td>
            <td>${data[i].address}</td>
            <td>${data[i].createdAt}</td>
            <td><button data-index="${i}">❌</button></td>
        `;
    }
}

function deleteItem(index) {
    deleteAllRows();
    data.splice(index, 1);
    addRows();
}

const usersTableBody = document.querySelector("#usersTableBody");
usersTableBody.addEventListener("click", function(event) {
    if (event.target.tagName != "BUTTON") {
        return;
    }
    const deleteButton = event.target;
    deleteItem(deleteButton.dataset.index);
    
});

addRows()
