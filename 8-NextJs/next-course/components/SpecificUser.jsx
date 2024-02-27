'use client'
import { Button, Card, Input, List, ListItem } from '@material-tailwind/react'
import { useState } from 'react'

const SpecificUser = () => {
    const [userId, setUserId] = useState('')
    const [userData, setUserData] = useState(null)

    const fetchUserData = async () => {
        const response = await fetch(`/api/users/${userId}`)

        if (response.ok) {
            const res = await response.json();
            console.log(res.user); // Log the user data
            setUserData(res.user);
        } else {
            console.log('Error fetching user data');
            setUserData(null);
        }
    }

    return (
        <div>
            <div className='flex'>
                <div className='w-72'>
                    <Input
                        label='Enter User ID'
                        type='text'
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>
                <Button
                    className='ml-5'
                    color='blue'
                    buttonType='hover:bg-blue-700'
                    onClick={fetchUserData}
                >
                    Fetch User
                </Button>
            </div>
            {userData ? (
                <Card className='w-96 mt-5'>
                    <List>
                        <ListItem>ID: {userData[0].id}</ListItem>
                        <ListItem>Name: {userData[0].name}</ListItem>
                        <ListItem>Age: {userData[0].age}</ListItem>
                        <ListItem>Email: {userData[0].email}</ListItem>
                        <ListItem>Password: {userData[0].password}</ListItem>
                    </List>
                </Card>
            ) : (
                <p className='mt-2'>Search for a specific user</p>
            )}
        </div>
    )
}

export default SpecificUser