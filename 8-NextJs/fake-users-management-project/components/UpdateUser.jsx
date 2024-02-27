'use client'

import { Button, Input } from '@material-tailwind/react'
import { useState } from 'react'

const UpdateUser = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!id) {
            alert('Please provide user ID');
            return;
        }

        const requestedData = { id };

        if (name) {
            requestedData.name = name;
        }
        if (email) {
            requestedData.email = email;
        }
        if (password) {
            requestedData.password = password;
        }

        try {
            const response = await fetch('/api/users/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestedData)
            });
            if (response.ok) {
                alert('User successfully updated');
                clearForm();
            } else {
                const data = await response.json();
                alert(data.result || 'Something went wrong while updating user information :(');
            }
        } catch (error) {
            alert('Error updating user', error);
            return;
        }
    }

    const clearForm = () => {
        setId('');
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input
                    label="ID"
                    type="text"
                    placeholder='ID'
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <Input
                    label="Name"
                    type="text"
                    placeholder='Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    label="Email"
                    type="text"
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    label="Password"
                    type="text"
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button
                    color='blue'
                    buttonType='hover:bg-blue-700'
                    className='mt-4'
                    type='submit'
                >
                    Update User
                </Button>
            </form>
        </div>
    )
}

export default UpdateUser;