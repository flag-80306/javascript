import userService from "./services/userService.js";
import tableService from "./services/tableService.js";

const userForm = document.querySelector("#userForm");
const usersTableBody = document.querySelector("#usersTableBody");

userForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const userFormData = new FormData(userForm);
    const newUser = {
        name: userFormData.get("name"),
        email: userFormData.get("email"),
        address: userFormData.get("address"),
        createdAt: new Date()
    }

    userService.addUser(newUser);
    tableService.updateTableUI();
});

usersTableBody.addEventListener("click", function(event) {
    if (event.target.tagName != "BUTTON") {
        return;
    }
    const deleteButton = event.target;
    
    userService.deleteUser(deleteButton.dataset.index);
    tableService.updateTableUI();
});

tableService.updateTableUI();