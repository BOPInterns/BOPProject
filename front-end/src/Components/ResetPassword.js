import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavigationBar } from './NavigationBar';
import './Reset.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import BOPLogo from './BOPHub.MainLogo.png'
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Card from 'react-bootstrap/Card'
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ResetPassword = () => {
    const [valid, setValid] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [OTP, setOTP] = useState([]);
    const [email, setEmail] = useState('');
    const [errorShow, setErrorShow] = useState(false);
    const [passErrorShow, setPassErrorShow] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [input3, setInput3] = useState(0);
    const [input4, setInput4] = useState(0);

    const location = useLocation();
    const navigate = useNavigate();

    if(email == ''){
        setEmail(location.state.email);
    }
    

    useEffect(() => {
        if (OTP.length == 0){
            var toInsert = String(location.state.OTP).split('').map((digit) => parseInt(digit))
            toInsert = toInsert.filter((item) => typeof item === "number" && !isNaN(item));
            setOTP(toInsert);
        }
    }, []);

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

    const handleVerify = (e) => {
        e.preventDefault();

        if(OTP[0] != input1 || OTP[1] != input2 || OTP[2] != input3 || OTP[3] != input4){
            setErrorShow(true);
            window.scrollTo(0, 0);
        }else{
            console.log("Success!!!")
            setErrorShow(false);
            setValid(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:9000/reset-password", {
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                email: email,
                password: password,
                confirmation: confirmation, 
            }),
        }).then((res) => res.json())
        .then((data) => {
            console.log(data)
            if(data.error){
                setErrorMsg(data.error);
                setPassErrorShow(true);
                window.scrollTo(0, 0);
            } else {
                console.log("successful reset");
                alert("Password reset successful, routing back to login page.")
                navigate('/login');
            }
        });
    }

    const resend = () => {
        const newOTP = String(Math.floor(Math.random() * 9000 + 1000)).split('').map((digit) => parseInt(digit));
        console.log("new OTP: ", newOTP);
        setOTP(newOTP);

        const updatedState = { ...location.state, email: email, OTP: newOTP };
        navigate(location.pathname, { state: updatedState });


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
                OTP: newOTP, 
            }),
        })
        .then((res) => res.json())
        .then((data) => {console.log("OTP SENT: ", data.code)});
    }

    const codeChecker = () => {
        return(
            <Card.Body>
                <Card.Title>Enter One Time Password</Card.Title>

                <Card.Text>An email has been sent to <strong>{email}</strong> containing the one-time-passowrd you must use</Card.Text>

                <Form>
                    <Row>
                        <Column>
                            <Form.Control 
                                type='text' 
                                style={{textAlign: 'center'}} 
                                maxLength={1}
                                onChange={(event) => {handleInChange(event, in2); setInput1(Number(event.target.value))}}
                                ref={in1}
                            ></Form.Control>    
                        </Column>
                        <Column>
                            <Form.Control 
                                type='text' 
                                style={{textAlign: 'center'}}
                                maxLength={1}
                                onChange={(event) => {handleInChange(event, in3); setInput2(Number(event.target.value))}}
                                ref={in2}
                            ></Form.Control>                     
                        </Column>
                        <Column>
                            <Form.Control 
                                type='text' 
                                style={{textAlign: 'center'}}
                                maxLength={1}
                                onChange={(event) => {handleInChange(event, in4); setInput3(Number(event.target.value))}}
                                ref={in3}
                            ></Form.Control> 
                        </Column>
                        <Column>
                            <Form.Control 
                                type='text' 
                                style={{textAlign: 'center'}}
                                onChange={(event) => {handleInChange(event, but); setInput4(Number(event.target.value))}}
                                ref={in4}
                            ></Form.Control> 
                        </Column>
                    </Row>
                </Form>
                

                <Button onClick={handleVerify} type="submit" variant="primary" className='button' ref={but}>
                    Verify
                </Button>

                <Card.Text>Didn't receive email? Click <Link to="#" onClick={resend}> 
                        <span className="highlighted">here</span>
                    </Link> to resend email.</Card.Text>
                
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
            <Alert
                show={errorShow}
                variant="danger"
                dismissible
                onClose={() => setErrorShow(false)}
            >
                <Alert.Heading>Error!</Alert.Heading>
                <p>Invalid OTP!</p>
            </Alert>
            <Alert
                show={passErrorShow}
                variant="danger"
                dismissible
                onClose={() => setPassErrorShow(false)}
            >
                <Alert.Heading>Error!</Alert.Heading>
                <p>{errorMsg}</p>
            </Alert>
            <Container>
            <Row>
            <Column md={6}>
                <Image src={BOPLogo} className="img-fluid" height="10000" width="10000"></Image>
            </Column>
            <Card style={{width: '24rem', display:'flex', marginTop: 70}}>
                {valid ? resetFields() : codeChecker()}
            </Card>
            </Row>
            </Container>
    </div>
    )
}