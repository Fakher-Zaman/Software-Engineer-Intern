/* getting todos of user with id 5 */
fetch(`https://dummyjson.com/users/${localStorage.userId}/todos`)
    .then(res => res.json())
    .then(console.log);