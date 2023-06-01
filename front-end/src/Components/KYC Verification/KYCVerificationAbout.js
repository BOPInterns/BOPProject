import { NavigationBar } from '../NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export const KYCVerificationAbout = () => {
    return(
        <div>
        <NavigationBar/>
        <Container fluid>
            <Row className="mt-3">
                <h3>What is our verification process?</h3>
            </Row>
            <Row>
                <p class="text-left">Current verification process is very simple, user needs to provide their address, picture, gender, and nationality.</p>
            </Row>
            <Row>
                <Button href="/kyc-verification-form"variant="outline-secondary">Get Verified Today!</Button>
            </Row>
        </Container>
        </div>
    )
}