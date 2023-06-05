import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import { Step2MandatoryFields } from './Step2Mandatory';
import { Step2OptionalFields } from './Step2Optional';

export const Step2Suggestions = () => {
    return (
        <div>
            <Container>
        <Row className="mt-3">
                    <hr></hr>
                    <Button variant="link" href="/create-campaign-step-1">Suggestions for Step 2: Provide basic information about the campaign</Button>
                    <hr className="mt-3"></hr>
                    <Col>
                        <Step2MandatoryFields/>
                    </Col>
                    <Col>
                        <Card className="mt-3">
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
                        <Step2OptionalFields/>
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