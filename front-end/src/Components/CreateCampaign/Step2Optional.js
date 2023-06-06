import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { useState } from 'react';
import { useEffect } from 'react';
import { InputTags } from 'react-bootstrap-tagsinput';

export const Step2OptionalFields = () => {
    
    if (localStorage.getItem('mission') === null) 
    localStorage.setItem('mission', '');
if (localStorage.getItem('milestones') === null)
    localStorage.setItem('milestones', '[]');
if (localStorage.getItem('predictedGoals') === null)
    localStorage.setItem('predictedGoals', '[]');
if (localStorage.getItem('step2') === null)
    localStorage.setItem('step2', false);    


const [mission, setMission] = useState(localStorage.getItem('mission'));
const [milestones, setMilestones] = useState(JSON.parse(localStorage.getItem('milestones')));
const [predictedGoals, setPredictedGoals] = useState(JSON.parse(localStorage.getItem('predictedGoals')));


useEffect(() => {
    localStorage.setItem('mission', mission);
}, [mission]);

useEffect(() => {
    localStorage.setItem('milestones', JSON.stringify(milestones));
}, [milestones]);

useEffect(() => {
    localStorage.setItem('predictedGoals', JSON.stringify(predictedGoals));
}, [predictedGoals]);
    
    return (
        <div>
            <Card>
                        <Card.Title className="mt-3 mx-3">
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
        </div>
    )
}