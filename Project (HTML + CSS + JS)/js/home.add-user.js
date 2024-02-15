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

const display = document.querySelector("#display-users");
const userCountDisplay = document.getElementById('user-count');

document.addEventListener('DOMContentLoaded', function () {
    displayUsers();
});

function displayUsers() {
    const localUsers = JSON.parse(localStorage.getItem('users')) || [];
    userCountDisplay.innerHTML = `Locating ${localUsers.length} User Accounts`;

    let dataDisplay = localUsers.map((user) => {
        const { image, address, phone, age, firstName, lastName, email, gender, birthDate } = user;

        return `
        <div class="get-users">
            <div class="part1-info">
                <img src="${image}" alt="img" width="50" height="auto">
                <div class="contact-info">
                    <p><span>${phone}</span><i class="fa-solid fa-square-phone-flip"></i></p>
                    <p><span>${email}</span><i class="fa-solid fa-square-envelope"></i></p>
                </div>
            </div>
            <div class="part2-info">
                <p><i class="fa-solid fa-user"></i><span>${firstName} ${lastName}</span></p>
                <p><i class="fa-solid fa-cake-candles"></i><span>${birthDate}</span></p>
                <p><i class="fa-solid fa-location-dot"></i><span>${address.address}</span></p>
            </div>
            <div class="part3-info">
                <p><span>Gender:</span>${gender}</p>
                <p><span>Age:</span>${age}</p>
            </div>
            <div class="part4-btns">
                <button id="edit" class="edit" type="button">Edit</button>
                <button id="delete" class="delete" type="button" style="margin-left: 10px;">Delete</button>
            </div>
        </div>
        `;
    }).join("");

    display.innerHTML = dataDisplay;
}

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