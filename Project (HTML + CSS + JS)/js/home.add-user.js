const addUserButton = document.querySelector('#add-user-btn');

addUserButton.addEventListener('click', addUser);

function addUser(e) {
    e.preventDefault();

    const items = e.target;
    console.log("Add User Here");
}