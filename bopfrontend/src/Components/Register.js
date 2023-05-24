<<<<<<< HEAD
import React, { useState } from 'react';

export const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label for="firstName">First Name</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)}type="firstName" placeholder="John" id="firstName" name="firstName"/>
                <label for="lastname">Last Name</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)}type="lastName" placeholder="Smith" id="lastName" name="lastName"/>
                <label for="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email@domain.com" id="email" name = "email"/>
                <br></br>
                <label for="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="********" id="password" name = "password"/>
                <br></br>
                <button type="submit">Register</button>
            </form>
            <button>Already have an account? Sign in here!</button>
        </>
=======
export const Register = () => {
    return (
        <>Register</>
>>>>>>> brianguida
    )
}