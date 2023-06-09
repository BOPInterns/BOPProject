import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import TagInput from '../TagInput';
import FormGroup from 'react-bootstrap/FormGroup';
import { useState, useEffect } from 'react';
import './createCampaignCards.css';


export const Step3OptionalFields = () => {
    
    // if (localStorage.getItem('stakeholderLangs') === null)
    //     localStorage.setItem('stakeholderLangs', '[]');
    // if (localStorage.getItem('volunteerLangs') === null)
    //     localStorage.setItem('volunteerLangs', '[]');



const [stakeholderLangs, setStakeholderLangs] = useState(JSON.parse(localStorage.getItem('stakeholderLangs')));
const [volunteerLangs, setVolunteerLangs] = useState(JSON.parse(localStorage.getItem('volunteerLangs')));

useEffect(() => {
    localStorage.setItem('stakeholderLangs', JSON.stringify(stakeholderLangs));
}, [stakeholderLangs]);

useEffect(() => {
    localStorage.setItem('volunteerLangs', JSON.stringify(volunteerLangs));
}, [volunteerLangs]);


    return (
        <Card className="create-campaign-card">
            <Card.Title className="create-campaign-card-title">
                Optional Fields
            </Card.Title>
            <Card.Body className="create-campaign-card-body">
                <Card.Text>
                    <strong>
                    Fields below are not necessary to fill, but they surely improve your campaigns recognition on the platform.
                    </strong>
                    </Card.Text>
                <hr></hr>
                <Form>
                    <FormGroup>
                        <TagInput 
                            header="Enter Stakeholder Languages:"
                            placeholder="Enter a Language"
                            data="Language"
                            value={stakeholderLangs}
                            func={setStakeholderLangs}
                        />
                    </FormGroup>
                    <hr></hr>
                    <FormGroup>
                        <TagInput 
                            header="Enter Volunteer Languages:"
                            placeholder="Enter a Language"
                            data="Language"
                            value={volunteerLangs}
                            func={setVolunteerLangs}
                        />
                    </FormGroup>
                </Form>
            </Card.Body>
        </Card>
    );
}