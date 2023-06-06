import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import { Step1MandatoryFields } from './Step1Mandatory';
import { Step1OptionalFields } from './Step1Optional';

export const Step1Suggestions = () => {
    return(
    <div>
        <Container>
        <Row className="mt-3">
                    <hr></hr>
                    <Button variant="link" href="/create-campaign-step-1">Suggestions for Step 1: Provide basic information about the campaign</Button>
                    <hr className="mt-3"></hr>
                    <Col>
                        <Step1MandatoryFields/>
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
                        <Step1OptionalFields/>
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