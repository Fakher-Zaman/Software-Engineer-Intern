// Fetch and inject sign-in content
fetch('components/sign-in.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('sign-in-content').innerHTML = html;
    })
    .catch(error => console.error('Error fetching sign-in content:', error));

function setData(event) {
    event.preventDefault();

    var username = document.getElementById("uname").value;
    var password = document.getElementById("pwd").value;

    const apiURL = "https://dummyjson.com/auth/login";

    localStorage.setItem('userName', username);
    localStorage.setItem('userPass', password);

    fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password,
            // expiresInMins: 60, // optional
        })
    })
        .then(res => res.json())
        .then(console.log);
};