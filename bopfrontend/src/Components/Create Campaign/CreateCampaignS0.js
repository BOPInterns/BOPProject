import { NavigationBar } from '../NavigationBar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export const CreateCampaignS0 = () => {
    return (
        <div>
            <NavigationBar />
            <Row className="justify-content-center">
                <Card>
                    <Card.Title>
                        Create a Campaign
                    </Card.Title>
                </Card>
                <Card>
                    <Card.Title>
                        What is a campaign?
                    </Card.Title>
                    <Card.Body>
                    <Card.Text>
                        Execution framework is a type of agreement that needs to filled by the campaign owner and confirmed by all significant project stakeholders so that the campagin status can change from challenge to project. In the next steps you will confirm all crucial campagin artifacts and share it with other stakeholders in order to get an acceptance of the final course of the campaign development.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title>
                        What information do I need in order to run the campagin?
                    </Card.Title>
                    <Card.Body>
                        <Card.Text>
                            In order to run the campaign, you have to confirm:
                            <br></br>
                            * Shape of the execution team related to the project
                            <br></br>
                            * Select and ask form acceptence team members of campagin artifacts
                            <br></br>
                            * Finally confirm all information related to the campaign shape
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
                <Button href="/create-campaign-step-1">Fill the campagin form</Button>
        </div>
    )
}