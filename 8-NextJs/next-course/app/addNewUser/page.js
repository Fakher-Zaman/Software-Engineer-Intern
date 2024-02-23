'use client'
import { useState } from "react";

const AddNewUser = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const addNewUserHandler = async () => {
        // console.log(name, age, email);
        let response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, age, email })
        });
        response = await response.json();

        if (response.ok) {
            alert('User Successfully Created!');
        } else {
            alert('An Error Occured while creating the new user.')
        }
    }

    return (
        <div>
            <input
                type="text"
                onChange={e => setName(e.target.value)}
                value={name}
                placeholder="Please Enter Your Name"
            />
            <br />
            <input
                type="number"
                onChange={e => setAge(e.target.value)}
                value={age}
                placeholder="Please Enter Your Age"
            />
            <br />
            <input
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                placeholder="Please Enter Your Email"
            />
            <br />

            <button onClick={addNewUserHandler}>Add New User</button>
        </div>
    )
}

export default AddNewUser;