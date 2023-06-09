import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Account.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import BOPLogo from './BOPHub.MainLogo.png'
import { Alert } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { NavigationBar } from './NavigationBar';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const Register = () => {
    const navigate = useNavigate();

    // for the input fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [emailNotif, setEmailNotif] = useState(false);
    const [textNotif, setTextNotif] = useState(false);

    // for the error messages
    const [ errorShow, setErrorShow ] = useState(false);
    const [ errorMsg, setErrorMsg ] = useState('');
    
    useEffect(() => {
        const auth = localStorage.getItem('loginState');
        if(auth)
        {
            navigate('/')
        }
    },[])

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
            if(data.error){
                console.log(data.error);
                setErrorShow(true);
                setErrorMsg(data.error);
                window.scrollTo(0, 0);
            } else {
                navigate('/register-success');
            }
            
        });
    }

   

// const handleInputChange = (e) => {
//     const {id, value} = e.target;
//     if(id === "firstName") {
//         setFirstName(value);
//     }
//     if(id === "lastName") {
//         setLastName(value);
//     }
//     if(id === "email") {
//         setEmail(value);
//     }
//     if(id === "phoneNumber") {
//         setPhoneNumber(value);
//     }
//     if(id === "password") {
//         setPassword(value);
//     }
//     if(id === "emailNotif") {
//         setEmailNotif(value);
//     }
//     if(id === "textNotif") {
//         setTextNotif(value);
//     }
// }

    return (
        <div>
        <NavigationBar />

        <Alert
            show={errorShow}
            variant="danger"
            dismissible
            onClose={() => setErrorShow(false)}
        >
            <Alert.Heading>Error!</Alert.Heading>
            <p>{errorMsg}</p>
        </Alert>

        <Container>
            <Row>
                <Col md={6}>
                <Image src={BOPLogo} className="img-fluid" height="650" width="650"></Image>
                </Col>
                <Col className="mt-4">
                <Form>
                    <Row className="text-center">
                        <h4>Register with</h4>
                        <hr></hr>
                        <ButtonGroup size="sm">
                        <Button 
                        variant="outline-secondary"
                        id="signInGoogle"
                        size="sm">
                        Google
                        </Button>
                        <Button variant="outline-secondary" size="sm">Facebook</Button>
                        <Button variant="outline-secondary" size="sm">LinkedIn</Button>
                        <Button variant="outline-secondary" size="sm">Other</Button>
                        </ButtonGroup>
                        <hr className="mt-3"></hr>
                    </Row>
                    <Row className="text-center">
                        <h4>or</h4>
                        <hr className="mt-3"></hr>
                    </Row>
                    <Row>
                        <Column>
                        <FloatingLabel
                            id="firstName"
                            controlId="floatingFirstName"
                            label="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        >
                            <Form.Control className="name-field" type="firstName" placeholder="firstName"/>
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
                            <Form.Control className="name-field" nametype="lastName" placeholder="lastName"/>
                        </FloatingLabel>
                        </Column>
                    </Row>
                    
                    <FloatingLabel
                        controlId="floatingEmailInput"
                        label="Email Address"
                        className="mb-3 mt-3"
                    >
                        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel
                        id="phoneNumber"
                        controlId="phoneNumber"
                        label="Phone Number (Recommended)"
                        className="mb-3 mt-3"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    >
                        <Form.Control className="field" type="phoneNumber" placeholder="phoneNumber"/>
                    </FloatingLabel>
                    
                    <FloatingLabel
                        controlId="floatingEmailInput"
                        label="Password"
                        className="mb-3 mt-3"
                    >
                        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FloatingLabel>

                    <Card.Text className='form-subtext'>Please ensure your new password meets the following requirements:</Card.Text>
                    <Card.Text className='form-subtext'>* Minimum 8 characters</Card.Text>
                    <Card.Text className='form-subtext'>* At least 1 uppercase and 1 lowercase letter</Card.Text>
                    <Card.Text className='form-subtext'>* At least 1 number</Card.Text>
                    <Card.Text className='form-subtext'>* At least 1 special character</Card.Text>

                    <Form.Check
                        id="emailNotif"
                        type="checkbox"
                        label="I would like to receive email notifications from BOPHub."
                        style={{marginTop: 10}}
                        value={emailNotif}
                        onChange={() => setEmailNotif(!emailNotif)}
                    >
                    </Form.Check>
                    <Form.Check
                        id="textNotif"
                        type="checkbox"
                        label="I would like to receive text notifications from BOPHub.
                        (Standard sms data rates may apply)"
                        value={textNotif}
                        onChange={() => setTextNotif(!textNotif)}
                    >
                    </Form.Check>
                    <Row>
                    <Button className="mt-2 mb-2 btn-custom-class" variant="outline-secondary" onClick={handleSubmit} type="submit">
                        Register
                    </Button>
                    <h6>Already have an account?
                        <Button href="/login" variant="link">Login</Button>
                    </h6>
                    </Row>
                </Form>
                </Col>
            </Row>
        </Container>
    </div>
    )
}