const display = document.querySelector("#display-users");
const userCountDisplay = document.getElementById('user-count');
const updateUserButton = document.querySelector('#saveChanges');

function showLoader() {
    document.getElementById('loaderContainer').style.display = 'block';
}

// Function to hide the loader
function hideLoader() {
    document.getElementById('loaderContainer').style.display = 'none';
}

const getData = async () => {
    showLoader();
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    hideLoader();

    // Merged local users with fetched users
    const localUsers = JSON.parse(localStorage.getItem('users')) || [];
    const mergedUsers = [...data.users, ...localUsers];

    return { users: mergedUsers };
}

const displayUsers = async () => {
    const payload = await getData();
    const deletedUsers = JSON.parse(localStorage.getItem('deleted-users')) || [];
    // console.log(deletedUsers);

    const activeUsers = payload.users.filter(user => !deletedUsers.some(deletedUser => deletedUser.id === user.id));
    // console.log(activeUsers);

    userCountDisplay.innerHTML = `Locating ${activeUsers.length} User Accounts`;

    let dataDisplay = activeUsers.map((user) => {
        console.log(user);
        const { image, address, phone, age, firstName, lastName, email, gender, birthDate } = user;

        return `
        <div class="get-users">
            <div class="part1-info">
                <img src="${image}" alt="img" width="50" height="auto">
                <!-- <p class="avatar">${firstName.charAt(0) + lastName.charAt(0)}</p> -->
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
                <button id="edit" class="edit" type="button" onclick="editUser(${user.id})">Edit</button>
                <button id="delete" class="delete" type="button" onclick="deleteUser(${user.id})" style="margin-left: 10px;">Delete</button>
            </div>
        </div>
        `
    }).join("");

    display.innerHTML = dataDisplay;
}

let userIdToUpdate;
const editUser = async (userId) => {
    console.log(userId);
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();

    // Merged local users with fetched users
    const localUsers = JSON.parse(localStorage.getItem('users')) || [];
    const mergedUsers = [...data.users, ...localUsers]

    const user = mergedUsers.find(user => user.id === userId);

    document.getElementById('image').value = user.image;
    document.getElementById('firstName').value = user.firstName;
    document.getElementById('lname').value = user.lastName;
    document.getElementById('phone').value = user.phone;
    document.getElementById('email').value = user.email;
    document.getElementById('address').value = user.address.address;
    document.getElementById('birthDate').value = user.birthDate;
    document.getElementById('age').value = user.age;
    document.getElementById('gender').value = user.gender;

    // Store the user ID in the variable
    userIdToUpdate = userId;
}

const updateUser = async (e) => {
    e.preventDefault();
    console.log("Update User Here");

    fetch(`https://dummyjson.com/users/${userIdToUpdate}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            lastName: 'Owais'
        })
    })
        .then(res => res.json())
        .then(console.log);
}
updateUserButton.addEventListener('click', updateUser);

let userIdToDelete;
const deleteUser = async (userId) => {
    console.log(userId);
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();

    const localUsers = JSON.parse(localStorage.getItem('users')) || [];
    const mergedUsers = [...data.users, ...localUsers]

    const user = mergedUsers.find(user => user.id === userId);
    document.getElementById('user-name').innerHTML = user.firstName + " " + user.lastName;

    // Store the user ID in the variable
    userIdToDelete = userId;
}

// Function to confirm deletion of a user
const confirmDeleteUser = async (userId) => {
    console.log('Deleting user with ID:', userId);
    if (userId >= 1 && userId <= 30) {
        fetch(`https://dummyjson.com/users/${userId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const deletedUsers = JSON.parse(localStorage.getItem('deleted-users')) || [];
                deletedUsers.push(data);
                localStorage.setItem('deleted-users', JSON.stringify(deletedUsers));

                // displayUsers();
            });
    } else {
        // Store the user data in the 'deleted-users' local storage
        const localUsers = JSON.parse(localStorage.getItem('users')) || [];
        const deletedUser = localUsers.find(user => user.id === userId);
        if (deletedUser) {
            const deletedUsers = JSON.parse(localStorage.getItem('deleted-users')) || [];
            deletedUsers.push(deletedUser);
            localStorage.setItem('deleted-users', JSON.stringify(deletedUsers));
            console.log('User data stored in deleted-users local storage:', deletedUser);
        } else {
            console.error('User not found in local storage:', userId);
        }
    }
}

document.getElementById('confirmDelete').addEventListener('click', () => {
    confirmDeleteUser(userIdToDelete);
});

const showEditModal = () => {
    const modal = document.getElementById('editModal');
    modal.style.display = 'block';
};

const hideEditModal = () => {
    const modal = document.getElementById('editModal');
    modal.style.display = 'none';
};

const showDeleteModal = () => {
    const modal = document.getElementById('deleteModal');
    modal.style.display = 'block';
};

const hideDeleteModal = () => {
    const modal = document.getElementById('deleteModal');
    modal.style.display = 'none';
};

document.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('edit')) {
        showEditModal();
    }
    if (target.classList.contains('delete')) {
        showDeleteModal();
    }
    if (target.classList.contains('close') || target.id === 'cancelEdit' || target.id === 'saveChanges') {
        hideEditModal();
    }
    if (target.classList.contains('close') || target.id === 'cancelDelete' || target.id === 'confirmDelete') {
        hideDeleteModal();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    displayUsers();
});