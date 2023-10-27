import userService from "./userService.js";

function addRows() {
    const data = userService.getUserData();

    for (let i = 0; i < data.length; i++) {
        const newTR = usersTableBody.insertRow();
        newTR.innerHTML = `
            <td>${data[i].email}</td>
            <td>${data[i].name}</td>
            <td>${data[i].address}</td>
            <td>${data[i].createdAt.toLocaleString("pt-PT")}</td>
            <td><button data-index="${i}">❌</button></td>
        `;
    }
}

function deleteAllRows() {
    usersTableBody.innerHTML = "";
}

function updateTableUI() {
    deleteAllRows();
    addRows();
}

export default {
    updateTableUI
}