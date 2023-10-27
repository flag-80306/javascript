const userData = [
    {
        name: "Helder",
        email: "phelder@gmail.com",
        address: "Porto",
        createdAt: new Date()
    },
    {
        name: "Joe",
        email: "phelder@gmail.com",
        address: "Porto",
        createdAt: new Date()
    },
    {
        name: "Zezito",
        email: "phelder@gmail.com",
        address: "Porto",
        createdAt: new Date()
    },
];

function addUser(user) {
    userData.push(user);
}

function deleteUser(index) {
    userData.splice(index, 1);
}

function getUserData() {
    return userData;
}

export default {
    addUser,
    deleteUser,
    getUserData
}