import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Step3MandatoryFields } from './Step3Mandatory';
import { Step3OptionalFields } from './Step3Optional';

export const Step3Suggestions = () => {
    return (
        <div>
            <Container>
                    <Row
                style={{
                    justifyContent: 'center',
                    padding: '40px',
                }}
            >
                    <Button 
                        className="suggestions-btn"
                        variant="link" 
                        href="/create-campaign-step-1"
                    >
                        Suggestions for Step 3: Location & Language</Button>
            </Row>
                <Row className="">
                    <Col>
                        <Step3MandatoryFields/>
                    </Col>
                    <Col>
                        <Card className="">
                            <Card.Body>
                                <Card.Text>
                                    You will not be able to continue until ALL mandatory fields are completed.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Step3OptionalFields/>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Text>These are optional but have the potential to greatly impact your campaigns success. We strongly suggest adding a promotional video to catch viewers attention. These can be uploaded as a YouTube video link too!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </Container>
        </div>
    )
}