import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import BOPLogo from './BOPHub.MainLogo.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

export const Login = () => {
    const [ user, setUser ] = useState({});
   
   function handleCallbackResponse(response){
      console.log("Encoded JWT ID token: " + response.credential);
      var userObject = jwt_decode(response.credential);
      console.log(userObject);
      setUser(userObject);
      document.getElementById("loginButton").hidden = true;
      document.getElementById("registerButton").hidden = true;
   }
   
//    useEffect(() => {
//       /* global google */ 
//       google.accounts.id.initialize({
//          client_id: "818541063177-iqosu6guuons2sjudmsrt8hr010102qq.apps.googleusercontent.com",
//          callback: handleCallbackResponse
//       });
      
//       google.accounts.id.renderButton(
//          document.getElementById('signInGoogle'),
//          {theme: "outline", size: "small"}
//       );
//    }, []);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email: ", email);
        fetch("http://localhost:9000/login", {
            method:"POST",
            crossDomain:true,
            headers: {
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                email,
                password
            }),
            })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userLogin");
        });
        console.log("Password: ", password);
        window.localStorage.setItem('variable', true);

    }
    
    const handleSignout = (e) => {
        setUser({});
        document.getElementById("loginButton").hidden = false;
        document.getElementById("registerButton").hidden = false;
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
                            <Nav.Link id="loginButton" href="/login">Login</Nav.Link>
                            <Nav.Link id="registerButton" href="/register">Register</Nav.Link>
                            {   Object.keys(user).length !== 0 &&
                            <Container>
                                <Navbar.Text>Signed in as: {user.name} <img src={user.picture} alt=""></img></Navbar.Text>
                                <Nav.Link id="logoutButton" onClick={(e) => handleSignout(e)}>Logout</Nav.Link>
                            </Container>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Column md={6}>
                    <Image src={BOPLogo} className="img-fluid" height="650" width="650"></Image>
                    </Column>
                    <Column>
                    <Form>
                        <Row className="justify-content-center">
                            Sign in with
                            <ButtonGroup size="sm">
                            <Button 
                            id="signInGoogle"
                            size="sm">
                            Google
                            </Button>
                            <Button size="sm">facebook</Button>
                            <Button size="sm">linkedin</Button>
                            <Button size="sm">other</Button>
                            </ButtonGroup>
                        </Row>
                        <Row className="justify-content-center">
                            or
                        </Row>
                        <FloatingLabel
                            controlId="floatingEmailInput"
                            label="Email Address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingEmailInput"
                            label="Password"
                            className="mb-3"
                        >
                            <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </FloatingLabel>
                        <Column md={{offset: 8}}>
                            <Button href="/forgotpassword" variant="link">Forgot password?</Button>
                        </Column>
                        <Form.Check
                            type="switch"
                            id="rememberMe"
                            label="Remember me"
                        >
                        </Form.Check>
                        <Button onClick={handleSubmit} type="submit" variant="primary">
                            Submit
                        </Button>
                        <Column>
                            Don't have an account?
                            <Button href="/register" variant="link">Register</Button>
                        </Column>
                    </Form>
                    </Column>
                </Row>
            </Container>
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
    )
}