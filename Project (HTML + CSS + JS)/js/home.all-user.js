const display = document.querySelector("#display-users");
const userCountDisplay = document.getElementById('user-count');

const getData = async () => {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();

    // Merged local users with fetched users
    const localUsers = JSON.parse(localStorage.getItem('users')) || [];
    const mergedUsers = [...data.users, ...localUsers]

    return { users: mergedUsers };
}

const displayUsers = async () => {
    const payload = await getData();

    userCountDisplay.innerHTML = `Locating ${payload.users.length} User Accounts`;

    let dataDisplay = payload.users.map((user) => {
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
                <button id="edit" class="edit" type="button">Edit</button>
                <button id="delete" class="delete" type="button" style="margin-left: 10px;">Delete</button>
            </div>
        </div>
        `
    }).join("");

    display.innerHTML = dataDisplay;
}

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
    if (target.classList.contains('close') || target.id === 'cancelEdit') {
        hideEditModal();
    }
    if (target.classList.contains('close') || target.id === 'cancelDelete') {
        hideDeleteModal();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    displayUsers();
});