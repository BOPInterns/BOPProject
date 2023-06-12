import { NavigationBar } from '../NavigationBar';
import { CreateCampaignNavbar } from './CreateCampaignNavbar';
import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import Image from'react-bootstrap/Image';
import Button from'react-bootstrap/Button';
import './campaignSuccessTemp.png';

export const CreateCampaignS6 = () => {

    // TODO: reset the state variables
    localStorage.setItem('step1', false);
    localStorage.setItem('campaignName', '');
    localStorage.setItem('campaignTags', '[]');
    localStorage.setItem('videoLink', '');
    localStorage.setItem('step2', false);
    localStorage.setItem('description', '');
    localStorage.setItem('challenge', '');
    localStorage.setItem('mission', '');
    localStorage.setItem('milestones', '[]');
    localStorage.setItem('predictedGoals', '[]');
    localStorage.setItem('step3', false);
    localStorage.setItem('location', '');
    localStorage.setItem('reach', '');
    localStorage.setItem('stakeholderLangs', '[]');
    localStorage.setItem('volunteerLangs', '[]');
    localStorage.setItem('step4', false);
    localStorage.setItem('files', '');
    

    return(
        <div>
            <NavigationBar />
            <Container className="text-center">
                <Row className="mt-3">
                    <h2>Congratulations!</h2>
                </Row>
                <Row>
                    <h3>You have successfully submitted your campaign application</h3>
                </Row>
                <Row>
                    <h4>Now our staff will take a look and validate your form. Expect a reply pretty soon!</h4>
                </Row>
                <Row>
                    <Image width="50" height="400" src={require("./campaignSuccessTemp.png")} alt=""></Image>
                </Row>
                    <Button variant="secondary">Go back to your organization page</Button>
                <Row>
                    <h4>or</h4>
                </Row>
                <Button variant="link">Open campaign listing</Button>
            </Container>
        </div>
    )
}