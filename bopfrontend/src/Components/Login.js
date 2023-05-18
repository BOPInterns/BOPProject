import React, { useState } from 'react';

export const Login = () => {
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
                <label for="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email@domain.com" id="email" name = "email"/>
                <br></br>
                <label for="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="********" id="password" name = "password"/>
                <br></br>
                <button type="submit">Login</button>
            </form>
            <button>Don't have an account? Register here!</button>
        </>
    )
}