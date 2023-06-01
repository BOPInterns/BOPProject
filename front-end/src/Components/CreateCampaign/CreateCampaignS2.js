import { NavigationBar } from '../NavigationBar';
import { CreateCampaignNavbar } from './CreateCampaignNavbar';
import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { InputTags } from 'react-bootstrap-tagsinput';
import "react-bootstrap-tagsinput/dist/index.css";


export const CreateCampaignS2 = () => {
    const [description, setDescription] = useState('');
    const [challenge, setChallenge] = useState('');
    const [mission, setMission] = useState('');
    const [milestones, setMilestones] = useState([]);   //figure out how to do this one
    const [predictedGoals, setPredictedGoals] = useState([]);   //and this one

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if (id === "description") { setDescription(value); }
        if (id === "challenge") { setChallenge(value); }
        if (id === "mission") { setMission(value); }
        if (id === "milestones") { setMilestones(value); }
        if (id === "predictedGoals") { setPredictedGoals(value); }
    }

    return(
        <div>
            <NavigationBar />
            <CreateCampaignNavbar />
            <Container>
                <Row className="mt-5">
                    <h2>Step 2: Provide detailed information about the campagin</h2>
                </Row>
                <Row>
                    <Card className="mt-3">
                        <Card.Title className="mt-3">
                            Mandatory fields
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>
                                These two fields below are essential to make your campaign recognizable at our platform. Providing detailed information will also result in better matching with future campaign partners.
                            </Card.Text>
                            <br></br>
                            <Form>
                                <FormGroup>
                                <Form.Label>Campaign description</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={10} 
                                    type="text" 
                                    placeholder="Describe your campaign here..." 
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                /><Form.Text className="text-muted">Explainer text about the role of the campaign description</Form.Text>
                                </FormGroup>
                                <br></br>
                                <FormGroup className="mt-4">
                                    <Form.Label>Campaign challenge</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={2} 
                                        type="text" 
                                        placeholder="Describe the challenges your campaign faces here..." 
                                        value={challenge}
                                        onChange={(e) => setChallenge(e.target.value)}
                                    /><Form.Text className="text-muted">Explainer text about the role of the campaign challenge</Form.Text>
                                </FormGroup>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card>
                        <Card.Title className="mt-3">
                            Optional fields
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>
                                Fields below are not necessary to fill, but they surely improve your campaigns recognition on the platform
                            </Card.Text>
                            <br></br>
                            <Form>
                                <FormGroup>
                                    <Form.Label>Campaign mission</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={4} 
                                        type="text" 
                                        placeholder="Describe your campaign mission here..." 
                                        value={mission}
                                        onChange={(e) => setMission(e.target.value)}
                                    /><Form.Text className="text-muted">Explainer text about the role of the campaign challenge</Form.Text>
                                </FormGroup>
                                <br></br>
                                <FormGroup>
                                    <Form.Label>Campaign milestones</Form.Label>
                                    <div className="input-group">
                                    <InputTags values={milestones} placeholder='New Tag' onTags={(value) => {setMilestones(value.values)}} />
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        data-testid="button-clearAll"
                                        onClick={(e) => {e.preventDefault();setMilestones([]);}}
                                    >Delete all</button>
                                    </div>
                                    <hr />
                                    <ol>
                                        {milestones.map((item, index) => (
                                            <li key={item + index}>{item}</li>
                                        ))}
                                    </ol>
                                </FormGroup>
                                <br></br>
                                <FormGroup>
                                    <Form.Label>Predicted goals</Form.Label>
                                    <div className="input-group">
                                    <InputTags values={predictedGoals} placeholder='New Tag' onTags={(value) => {setPredictedGoals(value.values)}} />
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        data-testid="button-clearAll"
                                        onClick={(e) => {e.preventDefault();setPredictedGoals([]);}}
                                    >Delete all</button>
                                    </div>
                                    <hr />
                                    <ol>
                                        {predictedGoals.map((item, index) => (
                                            <li key={item + index}>{item}</li>
                                        ))}
                                    </ol>
                                </FormGroup>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}