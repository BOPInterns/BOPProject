import { NavigationBar } from '../NavigationBar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from'react-bootstrap/Container';
import { buttonStyle, hoverStyle } from '../styles';

export const CreateCampaignS0 = () => {
    // step 1
    if (localStorage.getItem('campaignName') === null) 
    localStorage.setItem('campaignName', '');
    if (localStorage.getItem('campaignTags') === null)
    localStorage.setItem('campaignTags', '[]');
    if (localStorage.getItem('videoLink') === null)
    localStorage.setItem('videoLink', '');
    if (localStorage.getItem('step1') === null)
    localStorage.setItem('step1', false);
    // step 2
    if (localStorage.getItem('description') === null) 
        localStorage.setItem('description', '');
    if (localStorage.getItem('challenge') === null) 
        localStorage.setItem('challenge', ''); 
    if (localStorage.getItem('mission') === null) 
        localStorage.setItem('mission', '');
    if (localStorage.getItem('milestones') === null)
        localStorage.setItem('milestones', '[]');
    if (localStorage.getItem('predictedGoals') === null)
        localStorage.setItem('predictedGoals', '[]');
    if (localStorage.getItem('step2') === null)
        localStorage.setItem('step2', false); 
    // step 3
    if (localStorage.getItem('step3') === null)
        localStorage.setItem('step3', false);
    if (localStorage.getItem('location') === null) 
        localStorage.setItem('location', '');
    if (localStorage.getItem('reach') === null)
        localStorage.setItem('reach', '');
    if (localStorage.getItem('stakeholderLangs') === null)
        localStorage.setItem('stakeholderLangs', '[]');
    if (localStorage.getItem('volunteerLangs') === null)
        localStorage.setItem('volunteerLangs', '[]');
    // step 4
    if (localStorage.getItem('files') === null) 
        localStorage.setItem('files', '');
    if (localStorage.getItem('step4') === null)
        localStorage.setItem('step4', false);

    return (
        <div class="mx-auto">
            <NavigationBar />
            <Container>
            <Row class="mt-5">
                <h2 class="text-center mt-3 mb-3">Create a campaign</h2>
                <Card className="mb-3">
                    <Card.Title className="mt-3">
                        What is the campaign?
                    </Card.Title>
                    <Card.Body>
                    <Card.Text>
                        Execution framework is a type of agreement that needs to filled by the campaign owner and confirmed by all significant project stakeholders so that the campagin status can change from challenge to project. In the next steps you will confirm all crucial campagin artifacts and share it with other stakeholders in order to get an acceptance of the final course of the campaign development.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mb-3">
                    <Card.Title className="mt-3">
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
            <Row class="mx-auto">
                <Button 
                href="/create-campaign-step-1"
                style={buttonStyle}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = hoverStyle.backgroundColor;
                    e.target.style.color = hoverStyle.color;
                    e.target.style.borderColor = hoverStyle.borderColor;
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = buttonStyle.backgroundColor;
                    e.target.style.color = buttonStyle.color;
                    e.target.style.borderColor = buttonStyle.borderColor;
                }}
                >Fill the campaign form</Button>
            </Row>
            </Container>
        </div>
    )
}