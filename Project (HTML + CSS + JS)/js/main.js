// Fetch and inject sign-in content
fetch('components/sign-in.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('sign-in-content').innerHTML = html;
    })
    .catch(error => console.error('Error fetching sign-in content:', error));