import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Account.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import { Alert } from 'react-bootstrap';
import BOPLogo from './BOPHub.MainLogo.png'
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Card from 'react-bootstrap/Card';
import { NavigationBar } from './NavigationBar';
import { useNavigate } from 'react-router-dom';
import './Account.css'
import Col from 'react-bootstrap/Col';

export const ForgotPassword = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [sent, setSent ] = useState(false);
    const [ errorShow, setErrorShow ] = useState(false);
    const [ succShow, setSuccShow ] = useState(false);
    const [ temp, setTemp ] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();

        const OTP = String(Math.floor(Math.random() * 9000 + 1000)).split('').map((digit) => parseInt(digit));

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
                OTP, //add this to backend request still
            }),
        }).then((res) => res.json())
        .then((data) => {
            console.log(data)
            if(data.error){
                setSuccShow(false);
                setErrorShow(true);
                window.scrollTo(0, 0);
            } else {
                setTemp(email);
                setErrorShow(false);
                setSuccShow(true);
                window.scrollTo(0, 0);
                //navigate to reset password page
                navigate(`/resetpassword/${data.token}`, {state: {email, OTP}})
            }
        });
    }

    return (
        <div>
            <NavigationBar/>
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
                <p>Email has been sent to {temp}</p>
            </Alert>

            <Container>
            <Row>
            <Column md={6}>
                <Image src={BOPLogo} className="img-fluid" height="10000" width="10000"></Image>
            </Column>
            <Col className="text-center">
            <Card style={{width: '24rem', height: '18rem',marginTop: 100}}>
                <Card.Body>
                    <Card.Title>Enter Recovery E-mail</Card.Title>
                    <hr></hr>
                    <Form>
                    <FloatingLabel
                        id="email"
                        label="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                        <Form.Control type="email" placeholder="email"
                        />
                    </FloatingLabel>
                    </Form>

                    <Card.Text className='form-subtext'>A recovery link will be sent to the email that you provide.</Card.Text>
                    <Row className="text-end mt-3">
                        <Column>
                            <Button onClick={handleSubmit} type="submit" variant="outline-secondary" className='btn-custom-class'
                            >
                                Submit
                            </Button>
                        </Column>
                    </Row>
                    <Row className="text-end mt-3">
                    <Col>
                    <Button 
                    href="/login" variant="link">Back to Login</Button>
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>
            </div>
    )
}