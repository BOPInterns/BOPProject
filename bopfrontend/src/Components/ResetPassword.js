import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Register.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import BOPLogo from './BOPHub.MainLogo.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Card from 'react-bootstrap/Card'

export const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');


    const handleSubmit = (e) => {
        // e.preventDefault();
        // fetch("http://localhost:9000/forgot-password", {
        //     method:"POST",
        //     crossDomain:true,
        //     headers:{
        //         "Content-Type":"application/json",
        //         Accept:"application/json",
        //         "Access-Control-Allow-Origin":"*",
        //     },
        //     body:JSON.stringify({
        //         email,
        //     }),
        // }).then((res) => res.json())
        // .then((data) => {
        //     console.log(data, "userRegister");
        //     alert(data.status);
        // });
    }

    return (
        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/" >
                            <img height="65" width="115" src="https://images.squarespace-cdn.com/content/v1/60e57a13579c8f0509ce7237/03227bce-9951-411b-9f7d-42875ddb8933/New+header+logo.png?format=1500w" alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Campaign Center</Nav.Link>
                        <Nav.Link href="/">Explore</Nav.Link>
                        <Nav.Link href="/">Learn</Nav.Link>
                        <Nav.Link href="/">Become</Nav.Link>
                        <Nav.Link href="/">About us</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-contents-end">
                        <Nav className='me-auto'>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                This is the Reset password page
                <Column>
                <FloatingLabel
                    id="new-password"
                    controlId="new-password-input"
                    label="Please enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></FloatingLabel>
                <FloatingLabel
                    id="confirmation"
                    controlId="confirm-password-input"
                    label="Please confirm your password"
                    value={confirmation}
                    onChange={(e) => setConfirmation(e.target.value)}
                ></FloatingLabel>
                <Button onClick={handleSubmit} type="submit" variant="primary">
                    Submit
                </Button>
                </Column>
            </Container>
            </div>
    )
}