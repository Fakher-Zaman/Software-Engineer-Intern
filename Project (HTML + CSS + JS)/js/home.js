document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll(".topnav a");
    const toggleNavLinks = document.querySelectorAll(".toggle-topnav a");

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
    });

    toggleNavLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
    });
});

const displayUserProfile = document.querySelector('.user-data');

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