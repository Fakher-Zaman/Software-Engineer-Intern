const apiEndpoint = 'https://dummyjson.com/users';
const display = document.querySelector("#display-users");
const userCountDisplay = document.getElementById('user-count');
const displayUserProfile = document.querySelector('.user-data');
const toggleData = document.querySelector('.toggle-data');

const getData = async () => {
    const res = await fetch(apiEndpoint);
    const data = await res.json();
    return data;
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
                <!-- <img src="${image}" alt="img" width="50" height="auto"> -->
                <p class="avatar">${firstName.charAt(0) + lastName.charAt(0)}</p>
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
                <button id="edit" type="button">Edit</button>
                <button id="delete" type="button" style="margin-left: 10px;">Delete</button>
            </div>
        </div>
        `
    }).join("");

    display.innerHTML = dataDisplay;
}
displayUsers();

displayUserProfile.innerHTML = `
    <div class="user-profile">
        <p id="user-profile">${localStorage.userFirstName} ${localStorage.userLastName} <i class="fa-solid fa-angle-down"></i></p>
        <img src="${localStorage.userProfile}" alt="profile" width="40" height="auto" />
        <button id="logout-btn" class="logout-btn">Logout<i class="fa-solid fa-arrow-right-from-bracket"></i></button>
    </div>
    <div class="nav-bar-btn">
        <i class="fa-solid fa-bars" id="bars"></i>
    </div>
`;

toggleData.innerHTML = `
    <div class="toggle-profile">
        <p id="user-profile">${localStorage.userFirstName} ${localStorage.userLastName} <i class="fa-solid fa-angle-down"></i></p>
        <img src="${localStorage.userProfile}" alt="profile" width="40" height="auto" />
        <button id="logout-btn" class="logout-btn">Logout<i class="fa-solid fa-arrow-right-from-bracket"></i></button>
    </div>
`;

const userProfile = document.getElementById('user-profile');
const logoutBtn = document.getElementById('logout-btn');

userProfile.addEventListener('click', () => {
    logoutBtn.style.display = logoutBtn.style.display === 'block' ? 'none' : 'block';
});

logoutBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = "../index.html";
});