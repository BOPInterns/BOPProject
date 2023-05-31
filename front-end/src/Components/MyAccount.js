import { NavigationBar } from './NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';

export const MyAccount = () => {
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
                    <Col xs={3}>
                        <Button variant="link">My Account</Button>
                        <br></br>
                        <Button href='/kyc-verification-about' variant="link">Get Verified!</Button>
                        <br></br>
                        <Button variant="link">Privacy</Button>
                    </Col>
                    <Col md={9}>
                        <h3>General Information</h3>
                        <hr></hr>
                        <Figure>
                            <Figure.Image 
                                width={100}
                                height={100}
                                alt=""
                                src='./placeholderProfilePicture.png'
                            />
                        </Figure>
                        <br></br>
                        <p>First name:</p>
                        <br></br>
                        <p>Last name:</p>
                        <br></br>
                        <p>Email address:</p>
                        <br></br>
                        <p>Phone Number:</p>
                        <br></br>
                        <p>Current KYC Status: </p>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}