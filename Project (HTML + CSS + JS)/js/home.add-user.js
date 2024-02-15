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

addUserButton.addEventListener('click', addUser);

function addUser(e) {
    e.preventDefault();
    console.log("Add User Here");

    console.log(userImgInput.value);
    console.log(userFNameInput.value);
    console.log(userLNameInput.value);
    console.log(userPhoneInput.value);
    console.log(userEmailInput.value);
    console.log(userAddressInput.value);
    console.log(userBirthDateInput.value);
    console.log(userAgeInput.value);
    console.log(userGenderInput.value);
}