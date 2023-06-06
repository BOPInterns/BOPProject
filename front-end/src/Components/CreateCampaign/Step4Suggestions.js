import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Step4MandatoryFields } from './Step4Mandatory';

export const Step4Suggestions = () => {
    return (
        <div>
            <Container>
        <Row className="mt-3">
                    <hr></hr>
                    <Button variant="link" href="/create-campaign-step-4">Suggestions for Step 4: Additonal materials and attachments</Button>
                    <hr className="mt-3"></hr>
                    <Col>
                        <Step4MandatoryFields/>
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
        </Container>
        </div>
    )
}