// Fetch and inject sign-in content
fetch('components/main.sign-in.html')
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

    fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Invalid username or password');
            }
        })
        .then(data => {
            localStorage.setItem('userId', data.id);
            localStorage.setItem('userName', username);
            localStorage.setItem('userPass', password);
            localStorage.setItem('userProfile', data.image);
            localStorage.setItem('userFirstName', data.firstName);
            localStorage.setItem('userLastName', data.lastName);
            console.log(data);

            // Redirect to home page
            window.location.href = '../components/home.all-user.html'
        })
        .catch(error => {
            alert(error.message);
        });
};