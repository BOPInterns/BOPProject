import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Reset.css'
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

    const formStyle = {
        marginBottom: '20px'
    }

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
                            <Nav.Link href="/" disabled>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
            <Row>
            <Column md={6}>
                <Image src={BOPLogo} className="img-fluid" height="10000" width="10000"></Image>
            </Column>
            <Card style={{width: '24rem'}}>
                <Card.Body>
                    <Card.Title>Reset your Password</Card.Title>
                    <FloatingLabel
                        id="password"
                        controlId="floatingPasswordInput"
                        label="Enter New Password"
                        className="reset-card"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                        <Form.Control type="password" placeholder="password"/>
                    </FloatingLabel>

                    <Card.Text className='form-subtext'>Please ensure your new password meets the following requirements:</Card.Text>
                    <Card.Text className='form-subtext'>* Minimum 8 characters</Card.Text>
                    <Card.Text className='form-subtext'>* At least 1 uppercase and 1 lowercase letter</Card.Text>
                    <Card.Text className='form-subtext'>* At least 1 number</Card.Text>
                    <Card.Text className='form-subtext'>* At least 1 special character</Card.Text>
                    
                    <FloatingLabel
                        id="confirmation"
                        controlId="floatingConfirmationInput"
                        label="Confirm New Password"
                        className="reset-card"
                        value={confirmation}
                        onChange={(e) => setConfirmation(e.target.value)}
                    >
                        <Form.Control type="password" placeholder="password"/>
                    </FloatingLabel>

                    <Card.Text className='form-subtext'>Please ensure the same password is entered into both fields</Card.Text>

                    <Button onClick={handleSubmit} type="submit" variant="primary">
                        Submit
                    </Button>
                    
                </Card.Body>
            </Card>
            </Row>
            </Container>
    </div>
    )
}