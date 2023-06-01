import { NavigationBar } from '../NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export const KYCVerificationSubmit = () => {
    return (
        <div>
            <NavigationBar />
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title className="text-center mt-3">
                                Success!    
                            </Card.Title>
                            <hr></hr>
                            <Card.Body>
                                <p>Congratulations! You'll hear back from us when we've fully verified your identity. In the mean time be sure to browse the sight for organizations to join!</p>
                                <Button href="/campaign-center" variant="outline-secondary">Back to Campagin Center</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}