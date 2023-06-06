import { NavigationBar } from "../NavigationBar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Button from 'react-bootstrap/Button';

export const KYCVerificationForm = () => {
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
                                    <Form.Control type="text" placeholder="" />
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <Form.Label>Address Line 2</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control type="text" placeholder="" />
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
                                        <Form.Control type="file" />
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
                                <Form.Group className="mb-3">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select>
                                    <option>Please select a gender</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Prefer not to say...</option>
                                </Form.Select>
                                </Form.Group>
                                <FormGroup className="mb-3">
                                    <Form.Label>Nationality</Form.Label>
                                    <Form.Control type="text" placeholder="" />
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
                    <Button href="/kyc-verification-submitted" variant="success">
                        Submit!
                    </Button>
                    <hr className="mt-3"></hr>
                </Row>
            </Container>
        </div>
    )
}