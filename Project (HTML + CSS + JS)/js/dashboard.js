const apiEndpoint = 'https://dummyjson.com/users';
const display = document.querySelector("#display-users");

const activePage = window.location.pathname;
const navlinks = document.querySelectorAll('nav a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
});

const getData = async () => {
    const res = await fetch(apiEndpoint);
    const data = await res.json();
    return data;
}

const displayUsers = async () => {
    const payload = await getData();

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