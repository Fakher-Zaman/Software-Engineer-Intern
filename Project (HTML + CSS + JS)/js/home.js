const apiEndpoint = 'https://dummyjson.com/users';
const display = document.querySelector("#display-users");
const userCountDisplay = document.getElementById('user-count');
const displayUserProfile = document.querySelector('.user-data');

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
    <i class="fa-solid fa-bars" id="bars"></i>
`;

const userProfile = document.getElementById('user-profile');
const userProfileClass = document.querySelector('.user-profile');
const logoutBtn = document.getElementById('logout-btn');

// for navbar toggle functionality
const toggleBar = document.getElementById('bars');
const toggleSection = document.getElementById('toggle-section');
const topNavbar = document.querySelector('.top-nav');

toggleSection.innerHTML = `
    <div class="toggle-img-links">
        <i class="fa-solid fa-xmark" id="cross-mark"></i>
        <p id="toggle-user-profile">${localStorage.userFirstName} ${localStorage.userLastName}</p>
        <img src="${localStorage.userProfile}" alt="profile" width="100" height="auto" />
        <nav class="toggle-topnav">
            <a href="./home.html">All User</a>
            <a href="./add-user.html">Add User</a>
            <a href="./my-tasks.html">My Tasks</a>
        </nav>
        <button id="toggle-logout-btn" class="toggle-logout-btn">Logout<i class="fa-solid fa-arrow-right-from-bracket"></i></button>
    </div>
`;

const toggleLogoutBtn = document.getElementById('toggle-logout-btn');
const crossBar = document.getElementById('cross-mark');
const toggleTopnav = document.querySelector('.toggle-topnav');

userProfile.addEventListener('click', () => {
    logoutBtn.style.display = logoutBtn.style.display === 'block' ? 'none' : 'block';
});

logoutBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = "../index.html";
});

toggleLogoutBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = "../index.html";
});

toggleBar.addEventListener('click', () => {
    toggleSection.style.left = '0';
});

crossBar.addEventListener('click', () => {
    toggleSection.style.left = '-100%';
});

toggleTopnav.addEventListener('click', () => {
    toggleSection.style.left = '-100%';
});

// Get the modal
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('editModal');
    const editButtons = document.querySelectorAll('.part4-btns button#edit');
    const closeSpan = document.querySelector('.modal-content .close');

    editButtons.forEach(button => {
        button.onclick = function () {
            modal.style.display = 'block';
        }
    });

    closeSpan.onclick = function () {
        modal.style.display = 'none';
    }

    document.getElementById('cancelEdit').onclick = function () {
        modal.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll(".topnav a");

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
    });
});

var lastScrollTop = 0;
var headerHeight = document.querySelector('.dashboard-header').offsetHeight;

window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > headerHeight) {
        document.querySelector('.dashboard-header').classList.add("scroll-down");
        document.querySelector('.dashboard-header').classList.remove("scroll-up");
    } else {
        document.querySelector('.dashboard-header').classList.remove("scroll-down");
        document.querySelector('.dashboard-header').classList.add("scroll-up");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);