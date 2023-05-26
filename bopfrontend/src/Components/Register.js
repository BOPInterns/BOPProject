import React, { useState } from 'react';
<<<<<<< HEAD
import Container from 'react-bootstrap/Container';
import BOPLogo from './BOPHub.MainLogo.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';

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
        <div>
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email@domain.com" id="email" name = "email"/>
                <br></br>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="********" id="password" name = "password"/>
                <br></br>
            </form> */}
            <Navbar bg="dark" variant="dark" expand="lg">
=======
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


export const Register = () => {
    
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [password, setPassword] = useState('');
const [emailNotif, setEmailNotif] = useState(Boolean);
const [textNotif, setTextNotif] = useState(Boolean);

const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:9000/register", {
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
            firstName,
            lastName,
            email, 
            phoneNumber,
            password,
            emailNotif, 
            textNotif
        }),
    }).then((res) => res.json())
    .then((data) => {
        console.log(data, "userRegister");
    });
}

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
>>>>>>> origin/main
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
<<<<<<< HEAD
                            <Nav.Link href="/">Login</Nav.Link>
                            <Nav.Link href="/">Register</Nav.Link>
=======
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/" disabled>Register</Nav.Link>
>>>>>>> origin/main
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
<<<<<<< HEAD
            <div class="container h-custom">
                <div class="row d-flex jusify-content-center align-items-center h-100">
                    <div class="class-md-9 col-lg-6 col-xl-5">
                        <img src={BOPLogo} class="img-fluid" alt="BOP Logo"/>
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p class="lead fw-normal mb-0 me-3">Sign up with</p>
                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-facebook-f"></i>
                                </button>
                                
                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-twitter-f"></i>
                                </button>
                                
                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-linkedin-f"></i>
                                </button>
                                
                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-google-f"></i>
                                </button>
                            </div>
                            <div class="divider d-flex align-items-center my4 mb-3 mt-3">
                                <p class="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="name" id="nameInput" class="form-control form-control-lg" placeholder="Enter your full name"/>
                                <label class="form-label" for="nameInput">Name</label>
                            </div>
                            
                            <div class="form-outline mb-4">
                                <input type="email" id="emailInput" class="form-control form-control-lg" placeholder="Enter a valid email address"/>
                                <label class="form-label" for="emailInput">Email Address</label>
                            </div>
                            
                            <div class="form-outline mb-4">
                                <input type="email" id="passwordInput" class="form-control form-control-lg" placeholder="Enter password"/>
                                <label class="form-label" for="passwordInput">Password</label>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="email" id="passwordInput" class="form-control form-control-lg" placeholder="Re-enter password"/>
                                <label class="form-label" for="passwordInput">Confirm Password</label>
                            </div>
                            
                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" class="btn btn-primary btn-lg"
                                >Register</button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="#!"
                                    class="link-danger">Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-facebook-f"></i>
                </a>
            </div>
            <Navbar bg="dark" expand="lg" variant="light">
                <Container>
                <Navbar.Brand href="/" >
                            <img height="65" width="115" src="https://images.squarespace-cdn.com/content/v1/60e57a13579c8f0509ce7237/03227bce-9951-411b-9f7d-42875ddb8933/New+header+logo.png?format=1500w" alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Text>
                        Copyright &copy 2021 BOP Hub Limited - All Rights Reserved
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
=======
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
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        >
                            <Form.Control type="firstName" placeholder="firstName"/>
                        </FloatingLabel>
                        </Column>
                        <Column>
                        <FloatingLabel
                            id="lastName"
                            controlId="floatingLastName"
                            label="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        >
                            <Form.Control type="lastName" placeholder="lastName"/>
                        </FloatingLabel>
                        </Column>
                    </Row>
                    <FloatingLabel
                        id="email"
                        controlId="floatingEmailInput"
                        label="Please enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    >
                        <Form.Control type="phoneNumber" placeholder="phoneNumber"/>
                    </FloatingLabel>
                    <FloatingLabel
                        id="password"
                        controlId="floatingPasswordInput"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                        <Form.Control type="password" placeholder="password"/>
                    </FloatingLabel>
                    <Form.Check
                        id="emailNotif"
                        type="checkbox"
                        label="I would like to receive email notifications from BOPHub."
                        value={emailNotif}
                        onChange={(e) => setEmailNotif(e.target.value)}
                    >
                    </Form.Check>
                    <Form.Check
                        id="textNotif"
                        type="checkbox"
                        label="I would like to receive text notifications from BOPHub.
                        (Standard sms data rates may apply)"
                        value={textNotif}
                        onChange={(e) => setTextNotif(e.target.value)}
                    >
                    </Form.Check>
                        <Button onClick={handleSubmit} type="submit" variant="primary">
                            Submit
                        </Button>
                </Card.Body>
            </Card>
            </Row>
            </Container>
    </div>
>>>>>>> origin/main
    )
}