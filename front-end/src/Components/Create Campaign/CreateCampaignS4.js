import { NavigationBar } from '../NavigationBar';
import { CreateCampaignNavbar } from './CreateCampaignNavbar';
import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import Card from'react-bootstrap/Card';
import Form from'react-bootstrap/Form';

export const CreateCampaignS4 = () => {
    return(
        <div>
            <NavigationBar />
            <CreateCampaignNavbar />
            <Container>
                <Row className="mt-5">
                    <h2>Step 4: Additional materials and attachments</h2>
                </Row>
                <Row>
                    <Card className="mt-3">
                        <Card.Title className="mt-3">
                            Add attachments
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>
                                Share withfuture stakeholders materials and attachments you find important or useful to broaden the knowledge about the create campaign. You can decide whether particular elements should be visible for all or after joining the campaign's team
                            </Card.Text>
                            <br></br>
                            <Form>
                                <Form.Group controlId="campaignAttachments">
                                    <Form.Label>
                                        Upload files
                                    </Form.Label>
                                    <Form.Control type="file" multiple />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}