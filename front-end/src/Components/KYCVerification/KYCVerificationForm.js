import { NavigationBar } from "../NavigationBar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const KYCVerificationForm = () => {
    
    const navigate = useNavigate();
    const [ address1, setAddress1 ] = useState('');
    const [ address2, setAddress2 ] = useState('');
    const [ city, setCity ] = useState('');
    const [ state, setState ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ zipCode, setZipCode ] = useState('');
    const [ gender, setGender ] = useState('');
    const [ nationality, setNationality ] = useState('');
    const [ selfie, setSelfie ] = useState();
    
    const userObj = JSON.parse(localStorage.getItem('userObj'));
    const userId = userObj._id;
    
    const convertBase64 = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setSelfie(reader.result);
        };
        reader.onerror = () => {
            console.log("Error: ", error);
        };
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:9000/kyc-verification-form", {
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Allow-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                userId,
                address: address1 + ' ' + address2,
                city,
                state,
                zipCode,
                country,
                gender,
                nationality,
                selfie
            }),
        }).then((res) => res.json())
        .then((data) => {
            if (data.err) console.log("Please fill out all fields");
            else {
                console.log(data, "kyc");
                navigate('/kyc-verification-submitted');
            }
        });
    }
    
    
    return (
        <div>
            <NavigationBar/>
            <Container>
                <Row className="mt-4">
                    <Col md={6}>
                        <Card>
                            <Card.Title className="mt-3 text-center">
                                Please provide your full address
                            </Card.Title>
                            <hr></hr>
                            <Card.Body>
                                <Form>
                                <FormGroup className="mb-3">
                                    <Form.Label>Address Line 1</Form.Label>
                                    <Form.Control   type="text"   placeholder=""
                                    onChange={(e) => setAddress1(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <Form.Label>Address Line 2</Form.Label>
                                    <Form.Control type="text" placeholder="" 
                                    onChange={(e) => setAddress2(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="" 
                                    onChange={(e) => setCity(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <Form.Label>State/Providence</Form.Label>
                                    <Form.Control type="text" placeholder="" 
                                    onChange={(e) => setState(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control type="text" placeholder="" 
                                    onChange={(e) => setZipCode(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="" 
                                    onChange={(e) => setCountry(e.target.value)}
                                    />
                                </FormGroup>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Title className="mt-3 text-center">
                                Please provide us a clear selfie
                            </Card.Title>
                            <hr></hr>
                            <Card.Body>
                            <Form>
                                    <FormGroup>
                                        <Form.Label>Upload image here</Form.Label>
                                        <Form.Control type="file" 
                                        onChange={convertBase64}
                                        />
                                        <Form.Text className="text-muted">
                                            Please ensure your image clearly shows your face
                                        </Form.Text>
                                    </FormGroup>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Card>
                            <Card.Title className="mt-3 text-center">
                                Additional information
                            </Card.Title>
                            <hr></hr>
                            <Card.Body>
                            <Form>
                                <Form.Group className="mb-3"
                                onChange={(e) => setGender(e.target.value)}
                                >
                                <Form.Label>Gender</Form.Label>
                                <Form.Select>
                                    <option>Please select a gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Prefer not to say...">Prefer not to say...</option>
                                </Form.Select>
                                </Form.Group>
                                <FormGroup className="mb-3">
                                    <Form.Label>Nationality</Form.Label>
                                    <Form.Control type="text" placeholder="" 
                                    onChange={(e) => setNationality(e.target.value)}
                                    />
                                </FormGroup>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <hr></hr>
                    <Button href="/kyc-verification-submitted" variant="success"
                    onClick={handleSubmit}
                    >
                        Submit!
                    </Button>
                    <hr className="mt-3"></hr>
                </Row>
            </Container>
        </div>
    )
}