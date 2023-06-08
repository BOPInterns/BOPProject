import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import TagInput from '../TagInput';
import { useState } from 'react';
import { useEffect } from 'react';

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
                            <TagInput 
                                header="Enter Campaign Milestone:"
                                placeholder="Enter a Milestones"
                                data="Milestone"
                                value={milestones}
                                func={setMilestones}
                            />
                        </FormGroup>
                        <br></br>
                        <FormGroup>
                            <TagInput 
                                header="Enter Predicted Goals:"
                                placeholder="Enter a Goal"
                                data="Predicted Goal"
                                value={predictedGoals}
                                func={setPredictedGoals}
                            />
                        </FormGroup>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}