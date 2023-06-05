import { NavigationBar } from '../NavigationBar';
import { CreateCampaignNavbar } from './CreateCampaignNavbar';
import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import ListGroup from'react-bootstrap/ListGroup';
import Badge from'react-bootstrap/Badge';
import Button from'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Card from 'react-bootstrap/Card';
// import { useState } from 'react';

export const CreateCampaignS5 = () => {

    const campaignName = localStorage.getItem('campaignName');
    const campaignTags = localStorage.getItem('campaignTags');
    const videoLink = localStorage.getItem('videoLink');
    const description = localStorage.getItem('description');
    const challenge = localStorage.getItem('challenge');
    const mission = localStorage.getItem('mission');
    const milestones = localStorage.getItem('milestones');
    const predictedGoals = localStorage.getItem('predictedGoals');
    const location = localStorage.getItem('location');
    const reach = localStorage.getItem('reach');
    const stakeholderLangs = localStorage.getItem('stakeholderLangs');
    const volunteerLangs = localStorage.getItem('volunteerLangs');
    const files = localStorage.getItem('files');


    const handleSubmit = (e) => {
        e.preventDefault();

        //post request for the campaign
        fetch("http://localhost:9000/create-campaign-step-5", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                name: campaignName,
                tags: campaignTags,
                videoLink,
                description,
                challenge,
                mission,
                milestones,
                goals: predictedGoals,
                location,
                reach,
                stakeholderLangs,
                volunteerLangs
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });

        //post request for the additional files
        fetch("http://localhost:9000/upload-file",{
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                owningCampagin: campaignName, // this is the name of whatever campaign is being added
                fileData: files //change this to whatever files u get from localstorage
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        });


        // clear variables from localstorage
        localStorage.removeItem('campaignName');
        localStorage.removeItem('campaignTags');
        localStorage.removeItem('videoLink');
        localStorage.removeItem('description');
        localStorage.removeItem('challenge');
        localStorage.removeItem('mission');
        localStorage.removeItem('milestones');
        localStorage.removeItem('predictedGoals');
        localStorage.removeItem('location');
        localStorage.removeItem('reach');
        localStorage.removeItem('stakeholderLangs');
        localStorage.removeItem('volunteerLangs');
        localStorage.removeItem('files');
    }

    return(
        <div>
            <NavigationBar />
            <CreateCampaignNavbar />
            <Container>
                <Row className="mt-5">
                    <h2>Step 5: Suggestions to filled form</h2>
                </Row>
                <Row className="mt-3">
                    <ListGroup>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Step 1</div>
                            Provide basic information about the campagin
                        </div>
                        <Badge bg="success">
                        Good!
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Step 2</div>
                            Provide detailed information about the campaign
                        </div>
                        <Badge bg="danger">
                        Suggestions below
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Step 3</div>
                            Location and language
                        </div>
                        <Badge bg="success">
                        Good!
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Step 4</div>
                            Additional materials and attachments
                        </div>
                        <Badge bg="success">
                        Good!
                        </Badge>
                    </ListGroup.Item>
                    </ListGroup>
                </Row>
                <Row className="mt-3">
                    <hr></hr>
                    <Button variant="link" onClick={handleSubmit}>Suggestions for Step 2: Detailed information</Button>
                    <hr></hr>
                    <Col>
                        <Card className="mt-3">
                            <Card.Body>
                                <Form>
                                    <FormGroup>
                                    <Form.Label>Campaign mission</Form.Label>
                                    <Form.Control as="textarea" rows={4} type="text" placeholder="Describe your campaign mission here..." />
                                    <Form.Text className="text-muted">Explainer text about the role of the campaign challenge</Form.Text>
                                    </FormGroup>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mt-3">
                            <Card.Body>
                                <Card.Text>
                                    Hint 1: This is a hint
                                </Card.Text>
                                <Card.Text>
                                    Hint 2: This is a hint
                                </Card.Text>
                                <Card.Text>
                                    Hint 3: This is a hint
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <FormGroup>
                                        <Form.Label>Predicted goals</Form.Label>
                                        <Form.Control type="text" placeholder="Describe your campaign mission here..." />
                                        <Form.Text className="text-muted">Explainer text about the role of the campaign challenge</Form.Text>
                                    </FormGroup>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Text>Hint 1: this is a hint</Card.Text>
                                <Card.Text>Hint 2: this is a hint</Card.Text>
                                <Card.Text>Hint 3: this is a hint</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Container className="mt-4 mb-5">
                    <Row className="justify-content-md-center">
                        <hr></hr>
                        <Button size="lg" variant="success" href="create-campaign-step-6">Submit!</Button>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}