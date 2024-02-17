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

                displayUsers();
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    } else {
        // Store the user data in the 'deleted-users' local storage
        const localUsers = JSON.parse(localStorage.getItem('users')) || [];
        const deletedUser = localUsers.find(user => user.id === userId);
        if (deletedUser) {
            const deletedUsers = JSON.parse(localStorage.getItem('deleted-users')) || [];
            deletedUsers.push(deletedUser);
            localStorage.setItem('deleted-users', JSON.stringify(deletedUsers));

            displayUsers();
            console.log('User data stored in deleted-users local storage:', deletedUser);
        } else {
            console.error('User not found in local storage:', userId);
        }
    }
}

document.getElementById('confirmDelete').addEventListener('click', () => {
    confirmDeleteUser(userIdToDelete);
});