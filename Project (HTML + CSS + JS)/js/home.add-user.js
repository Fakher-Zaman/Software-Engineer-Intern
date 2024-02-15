const addUserButton = document.querySelector('#add-user-btn');
const userImgInput = document.getElementById('image');
const userFNameInput = document.getElementById('firstName');
const userLNameInput = document.getElementById('lastName');
const userPhoneInput = document.getElementById('phone');
const userEmailInput = document.getElementById('email');
const userAddressInput = document.getElementById('address');
const userBirthDateInput = document.getElementById('birthDate');
const userAgeInput = document.getElementById('age');
const userGenderInput = document.getElementById('gender');

// addUserButton.addEventListener('click', addUser);

function addUser(e) {
    e.preventDefault();
    console.log("Add User Here");

    // Retrieve existing data from local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Create an address object
    const address = {
        address: userAddressInput.value
    };

    fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            image: userImgInput.value,
            firstName: userFNameInput.value,
            lastName: userLNameInput.value,
            phone: userPhoneInput.value,
            email: userEmailInput.value,
            address: address,
            birthDate: userBirthDateInput.value,
            age: userAgeInput.value,
            gender: userGenderInput.value,
        })
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Error While Adding a User');
            }
        })
        .then(data => {
            users.push(data);
            localStorage.setItem('users', JSON.stringify(users));
        });

    // Clear input fields
    userFNameInput.value = "";
    userLNameInput.value = "";
    userPhoneInput.value = "";
    userEmailInput.value = "";
    userAddressInput.value = "";
    userBirthDateInput.value = "";
    userAgeInput.value = "";
    userGenderInput.value = "";
}