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




const handleSubmit = (e) => {
    e.preventDefault();
}

export const Register = () => {
    
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [password, setPassword] = useState('');
const [emailNotif, setEmailNotif] = useState(Boolean);
const [textNotif, setTextNotif] = useState(Boolean);

const handleInputChange = (e) => {
    const {id, value} = e.target;
    if(id === "firstName") {
        setFirstName(value);
    }
    if(id === "lastName") {
        setLastName(value);
    }
    if(id === "email") {
        setEmail(value);
    }
    if(id === "phoneNumber") {
        setPhoneNumber(value);
    }
    if(id === "password") {
        setPassword(value);
    }
    if(id === "emailNotif") {
        setEmailNotif(value);
    }
    if(id === "textNotif") {
        setTextNotif(value);
    }
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
            <Container className="registrationCard">
            <Row>
            <Column md={6}>
                <Image src={BOPLogo} className="img-fluid" height="10000" width="10000"></Image>
            </Column>
            <Card style={{width: '24rem'}}>
                <Card.Body>
                    <Card.Title>Create an account</Card.Title>
                    <Row>
                        <Column>
                        <FloatingLabel
                            id="firstName"
                            controlId="floatingFirstName"
                            label="First Name"
                        >
                            <Form.Control type="firstName" placeholder="firstName"/>
                        </FloatingLabel>
                        </Column>
                        <Column>
                        <FloatingLabel
                            id="lastName"
                            controlId="floatingLastName"
                            label="Last Name"
                        >
                            <Form.Control type="lastName" placeholder="lastName"/>
                        </FloatingLabel>
                        </Column>
                    </Row>
                    <FloatingLabel
                        id="email"
                        controlId="floatingEmailInput"
                        label="Please enter your email"
                    >
                        <Form.Control type="email" placeholder="Please enter a valid email"/>
                    </FloatingLabel>
                    {/* <FloatingLabel
                        controlId="floatingEmailInputCheck"
                        label="Please re-enter your email"
                    >
                        <Form.Control type="email" placeholder="Please enter a valid email"/>
                    </FloatingLabel> */}
                    <FloatingLabel
                        id="phoneNumber"
                        controlId="phoneNumber"
                        label="Phone Number (Recommended)"
                    >
                        <Form.Control type="phoneNumber" placeholder="phoneNumber"/>
                    </FloatingLabel>
                    <FloatingLabel
                        id="password"
                        controlId="floatingPasswordInput"
                        label="Password"
                    >
                        <Form.Control type="password" placeholder="password"/>
                    </FloatingLabel>
                    <Form.Check
                        id="emailNotif"
                        type="checkbox"
                        label="I would like to receive email notifications from BOPHub."
                    >
                    </Form.Check>
                    <Form.Check
                        id="textNotif"
                        type="checkbox"
                        label="I would like to receive text notifications from BOPHub.
                        (Standard sms data rates may apply)"
                    >
                    </Form.Check>
                    <Button onClick={() => handleSubmit()} type="submit" variant="primary">
                        Submit
                    </Button>
                </Card.Body>
            </Card>
            </Row>
            </Container>
    </div>
    )
}