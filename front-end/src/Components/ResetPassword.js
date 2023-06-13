import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavigationBar } from './NavigationBar';
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
    const [valid, setValid] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const location = useLocation();
    const email = location.state.email;
    const OTP = String(location.state.OTP).split('').map((digit) => parseInt(digit));

    const in1 = useRef(null);
    const in2 = useRef(null);
    const in3 = useRef(null);
    const in4 = useRef(null);
    const but = useRef(null);

    const handleInChange = (event, inputRef) => {
        const input = event.target;
        if (input.value.length === 1 && inputRef.current) {
          inputRef.current.focus();
        }
      };

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

    const handleVerify = (e) => {

    }

    const codeChecker = () => {
        return(
            <Card.Body>
                <Card.Title>Enter One Time Password</Card.Title>

                <Card.Text>An email has been sent to {email} containing the one-time-passowrd you must use</Card.Text>


                <Form>
                    <Row>
                        <Column>
                            <Form.Control 
                                type='text' 
                                style={{textAlign: 'center'}} 
                                maxLength={1}
                                onChange={(event) => handleInChange(event, in2)}
                                ref={in1}
                            ></Form.Control>    
                        </Column>
                        <Column>
                            <Form.Control 
                                type='text' 
                                style={{textAlign: 'center'}}
                                maxLength={1}
                                onChange={(event) => handleInChange(event, in3)}
                                ref={in2}
                            ></Form.Control>                     
                        </Column>
                        <Column>
                            <Form.Control 
                                type='text' 
                                style={{textAlign: 'center'}}
                                maxLength={1}
                                onChange={(event) => handleInChange(event, in4)}
                                ref={in3}
                            ></Form.Control> 
                        </Column>
                        <Column>
                            <Form.Control 
                                type='text' 
                                style={{textAlign: 'center'}}
                                onChange={(event) => handleInChange(event, but)}
                                ref={in4}
                            ></Form.Control> 
                        </Column>
                    </Row>
                </Form>
                

                <Button onClick={handleSubmit} type="submit" variant="primary" className='button' ref={but}>
                    Verify
                </Button>
                
            </Card.Body>
        );
    }

    const resetFields = () => {
        return(
            <Card.Body>
                <Card.Title>Reset Your Password</Card.Title>

                <Card.Text>An email has been sent to {email}</Card.Text>

                <FloatingLabel
                    id="password"
                    controlId="floatingPasswordInput"
                    label="Enter New Password"
                    className="password-forms"
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
                    className="password-forms"
                    value={confirmation}
                    onChange={(e) => setConfirmation(e.target.value)}
                >
                    <Form.Control type="password" placeholder="password"/>
                </FloatingLabel>

                <Card.Text className='form-subtext'>Please ensure the same password is entered into both fields</Card.Text>

                <Button onClick={handleSubmit} type="submit" variant="primary" className='button'>
                    Submit
                </Button>
                
            </Card.Body>
        );
    }


    return (
        <div>
            <NavigationBar/>
            <Container>
            <Row>
            <Column md={6}>
                <Image src={BOPLogo} className="img-fluid" height="10000" width="10000"></Image>
            </Column>
            <Card style={{width: '24rem', height: '26rem',marginTop: 70}}>
                {valid ? resetFields() : codeChecker()}
            </Card>
            </Row>
            </Container>
    </div>
    )
}