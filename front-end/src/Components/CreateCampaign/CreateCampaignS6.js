import { NavigationBar } from '../NavigationBar';
import { CreateCampaignNavbar } from './CreateCampaignNavbar';
import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import Image from'react-bootstrap/Image';
import Button from'react-bootstrap/Button';

export const CreateCampaignS6 = () => {

    // TODO: reset the state variables
    // step 1:
    localStorage.setItem('campaignName', '');
    localStorage.setItem('campaignTags', '[]');
    localStorage.setItem('videoLink', '');
    // step 2:
    localStorage.setItem('description', '');
    localStorage.setItem('challenge', '');
    localStorage.setItem('mission', '');
    localStorage.setItem('milestones', '[]');
    localStorage.setItem('predictedGoals', '[]');
    // step 3:
    localStorage.setItem('location', '');
    localStorage.setItem('reach', '');
    localStorage.setItem('stakeholderLangs', '[]');
    localStorage.setItem('volunteerLangs', '[]');
    // step 4:
    // FILES
    // step 5:
    

    return(
        <div>
            <NavigationBar />
            <CreateCampaignNavbar />
            <Container>
                <Row className="mt-5">
                    <h1>Congratulations!</h1>
                </Row>
                <Row>
                    <h4>You have successfully submitted your campaign application</h4>
                </Row>
                <Row>
                    <h5>Now our staff will take a look and validate your form. Expect a reply pretty soon!</h5>
                </Row>
                <Row>
                    <Image src="./campaignSuccessTemp.png"></Image>
                </Row>
                    <Button variant="secondary">Go back to your organization page</Button>
                <Row>
                    <h5>or</h5>
                </Row>
                <Button variant="link">Open campaign listing</Button>
            </Container>
        </div>
    )
}