import { List, ListItem, Card } from '@material-tailwind/react'
import { useState, useEffect } from 'react'

const AllUsers = () => {
    // Corrected useState usage
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const response = await fetch('/api/users');
                const usersInfo = await response.json();
                console.log(usersInfo);
                setUsers(usersInfo.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
        fetchAllUsers();
    }, []);

    return (
        <div>
            {users && users.map((user) => (
                <Card key={user.id} className='mb-4'>
                    <List>
                        <ListItem>{user.name}</ListItem>
                    </List>
                </Card>
            ))}
        </div>
    )
}

export default AllUsers