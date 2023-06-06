import { NavigationBar } from './NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import React from 'react';

export const MyAccount = () => {
    const [firstName, setFirstName] = useState(JSON.parse(localStorage.getItem('user')).firstName);
    const [lastName, setLastName] = useState(JSON.parse(localStorage.getItem('user')).lastName);
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem('user')).email);
    const [phoneNumber, setPhoneNumber] = useState(JSON.parse(localStorage.getItem('user')).phoneNumber);
    // const [password, setPassword] = useState(JSON.parse(localStorage.getItem('user')).password);
    const [verificationStatus, setVerificationStatus] = useState(JSON.parse(localStorage.getItem('user')).KYC.verified);
    const [userEdit, setUserEdit] = useState(false);

    // TODO: connect verification status stuff to backend
    const handleSubmit = (e) => {
        console.log("Verification status:", verificationStatus);
        e.preventDefault();
        fetch("http://localhost:9000/my-account", {
            method:"POST",
            crossDomain:true,
            headers: {
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phoneNumber,
                verificationStatus
            })
        })
        .then((res) => res.json())
        .then(data => {
            console.log(data, "userUpdate");
            localStorage.setItem('tempFirstName', data.firstName);
            localStorage.setItem('tempLastName', data.lastName);
            localStorage.setItem('user', JSON.stringify(data.updatedUser));
            // navigate('/');
        });
        setUserEdit(!userEdit);
    }
    
    return (
        <div>
            <NavigationBar/>
            <Container fluid>
                <hr></hr>
                <Row>
                    <h2>My Account</h2>
                </Row>
                <hr></hr>
                <Row>
                    <Col xs={2}>
                        <Button variant="link">My Account</Button>
                        <br></br>
                        <Button href='/kyc-verification-about' variant="link">Get Verified!</Button>
                        <br></br>
                        <Button variant="link">Privacy</Button>
                        <br></br>
                        <Button href='/forgot-password' variant="link">Forgot Password</Button>
                    </Col>
                    <Col md={6}>
                        <h3>General Information</h3>
                        <hr></hr>
                        <Card style={{width: '28rem'}}>
                            { userEdit ? <>
                            <Card.Body>
                                First Name: {firstName}
                                <br></br>
                                Last Name: {lastName}
                                <br></br>
                                Email address: {email}
                                <br></br>
                                Phone Number: {phoneNumber}
                                <br></br>
                                Verification Status: {verificationStatus}
                                <br></br>
                                <Button onClick={() => setUserEdit(!userEdit)} variant="outline-secondary">Edit</Button>
                            </Card.Body>
                            </> :
                             <Card.Body>
                             <InputGroup>
                                 <InputGroup.Text>First name:</InputGroup.Text>
                                 <Form.Control
                                     placeholder={firstName}
                                     onChange={(e) => { if (!userEdit) setFirstName(e.target.value) }}
                                 ></Form.Control>
                                 <InputGroup.Text>Last name:</InputGroup.Text>
                                 <Form.Control
                                     placeholder={lastName}
                                     onChange={(e) => { if (!userEdit) setLastName(e.target.value) }}
                                 ></Form.Control>
                             </InputGroup>
                             <InputGroup>
                                 <InputGroup.Text>Email:</InputGroup.Text>
                                 <Form.Control
                                    disabled
                                     placeholder={email}
                                 ></Form.Control>
                             </InputGroup>
                             {/* <InputGroup>
                                 <InputGroup.Text>Password:</InputGroup.Text>
                                 <Form.Control
                                     placeholder={password}
                                 ></Form.Control>
                             </InputGroup> */}
                             <InputGroup>
                                 <InputGroup.Text>Phone number:</InputGroup.Text>
                                 <Form.Control
                                     placeholder={phoneNumber}
                                     onChange={(e) => { if (!userEdit) setPhoneNumber(e.target.value) }}
                                 ></Form.Control>
                             </InputGroup>
                             <InputGroup>
                                 <InputGroup.Text>Verification Status:</InputGroup.Text>
                                 <Form.Control
                                     placeholder={verificationStatus}
                                     disabled
                                 ></Form.Control>
                             </InputGroup>
                             <Button onClick={handleSubmit} variant="outline-secondary">Submit</Button>
                         </Card.Body>
                            }
                        </Card>
                        </Col>
                    <Col md={4}>
                    <Figure>
                            <Figure.Image 
                                width={300}
                                height={100}
                                alt=""
                                src={require('./placeholderProfilePicture.png')}
                            />
                        </Figure>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}