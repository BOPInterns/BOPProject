import { NavigationBar } from './NavigationBar';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const AboutUs = () => {
    return (
        <div>
            <NavigationBar/>
            <Container>
                <Row
                    style={{
                        paddingTop: '40px',
                        textAlign: 'center',
                    }}
                >
                    <Col>
                        <Card>
                            <Card.Header>Front end</Card.Header>
                            <Card.Body>
                                <p>Brian Guida and chatGPT</p>
                                <p>
                                    I'm a 3rd year computer science major at the University of Florida. I think the team and I have done such an incredible job at bringing this project to life! It's been an unforgettable 8 weeks in Singapore where I've been able to learn so much about Southeast Asia as well as expand my coding experience and knowledge. I came into this project having no clue how to any sort of front-end development but I can now make entire pages in seconds and I even implemented chatGPT.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Back end</Card.Header>
                            <Card.Body>
                                <p>Jonathan Mesa and Rachel Young</p>
                            </Card.Body>
                            <Card.Body>
                                <p>Jonathan tells us a little about yourself</p>
                            </Card.Body>
                            <Card.Body>
                                <p>Rachel tells us a little about yourself</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}