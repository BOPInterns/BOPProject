import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Account.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import { Alert } from 'react-bootstrap';
import BOPLogo from './BOPHub.MainLogo.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [sent, setSent ] = useState(false);
    const [ errorShow, setErrorShow ] = useState(false);
    const [ succShow, setSuccShow ] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:9000/forgot-password", {
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                email,
            }),
        }).then((res) => res.json())
        .then((data) => {
            console.log(data)
            if(data.error){
                setSuccShow(false);
                setErrorShow(true);
                window.scrollTo(0, 0);
            } else {
                console.log("fnjdsinfini9nei")
                setErrorShow(false);
                setSuccShow(true);
                window.scrollTo(0, 0);
            }
        });
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

            <Alert
                show={errorShow}
                variant="danger"
                dismissible
                onClose={() => setErrorShow(false)}
            >
                <Alert.Heading>Error!</Alert.Heading>
                <p>Please enter a valid email!</p>
            </Alert>
            <Alert
                show={succShow}
                variant="success"
                dismissible
                onClose={() => setSuccShow(false)}
            >
                <Alert.Heading>Success!</Alert.Heading>
                <p>Email has been sent to {email}</p>
            </Alert>

            <Container>
            <Row>
            <Column md={6}>
                <Image src={BOPLogo} className="img-fluid" height="10000" width="10000"></Image>
            </Column>
            <Card style={{width: '24rem', height: '20rem',marginTop: 100}}>
                <Card.Body>
                    <Card.Title>Enter Recovery E-mail</Card.Title>
                    <FloatingLabel
                        id="password"
                        controlId="floatingPasswordInput"
                        className="password-forms"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                        <Form.Control type="email" placeholder="email"/>
                    </FloatingLabel>

                    <Card.Text className='form-subtext'>A recovery link will be sent to the email that you provide.</Card.Text>
                    <Row>
                        <Column>
                            <Button onClick={handleSubmit} type="submit" variant="primary" className='button'>
                                Submit
                            </Button>
                        </Column>
                        <Column md={{offset: 6}}>
                            <Button href="/login" variant="link">Back to Login</Button>
                        </Column>
                    </Row>
                </Card.Body>
            </Card>
            </Row>
            </Container>
            </div>
    )
}