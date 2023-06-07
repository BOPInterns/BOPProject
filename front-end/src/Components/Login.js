import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BOPLogo from './BOPHub.MainLogo.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
//import axios from 'axios';
import { NavigationBar } from './NavigationBar';
import { LoginAlertSuccess } from './LoginAlertSuccess';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import './Account.css';



export const Login = () => {
    const [ user, setUser ] = useState({});
    const navigate = useNavigate();
   
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
//    },[]);
    
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
            setUser(data, "userId");
            localStorage.setItem('tempFirstName', JSON.stringify(data.firstName));
            localStorage.setItem('tempLastName', data.lastName);
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('loginState', true);
            navigate('/');
        });
        console.log("Password: ", password);
        //window.location.href="/my-account";
    }
    
    const handleSignout = (e) => {
        setUser({});
        document.getElementById("loginButton").hidden = false;
        document.getElementById("registerButton").hidden = false;
    }
    
    return (
        <div>
            <NavigationBar />
            <Container>
                <Row>
                    <Col md={6}>
                    <Image src={BOPLogo} className="img-fluid" height="650" width="650"></Image>
                    </Col>
                    <Col className="mt-4">
                    <Form>
                        <Row className="text-center">
                            <h4>Login with</h4>
                            <hr></hr>
                            <ButtonGroup size="sm">
                            <Button 
                            variant="outline-secondary"
                            id="signInGoogle"
                            size="sm">
                            Google
                            </Button>
                            <Button variant="outline-secondary" size="sm">Facebook</Button>
                            <Button variant="outline-secondary" size="sm">Linkedin</Button>
                            <Button variant="outline-secondary" size="sm">Other</Button>
                            </ButtonGroup>
                            <hr className="mt-3"></hr>
                        </Row>
                        <Row className="text-center">
                            <h4>or</h4>
                            <hr className="mt-3"></hr>
                        </Row>
                        <FloatingLabel
                            controlId="floatingEmailInput"
                            label="Email Address"
                            className="mb-3 mt-3"
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
                        <Col className="text-end">
                            <Button href="/forgotpassword" variant="link">Forgot password?</Button>
                        </Col>
                        <div>
                        <Form.Check
                            type="switch"
                            id="rememberMe"
                            label="Remember me"
                        >
                        </Form.Check>
                        </div>
                        <Row>
                            <Button className="mt-2 mb-2 btn-custom-class" variant="outline-secondary" onClick={handleSubmit} type="submit">
                                Login
                            </Button>
                            <h6>Don't have an account?
                                <Button href="/register" variant="link">Register</Button>
                            </h6>
                        </Row>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}