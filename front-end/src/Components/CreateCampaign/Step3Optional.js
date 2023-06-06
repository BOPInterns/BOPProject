import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { useState, useEffect } from 'react';
import { InputTags } from 'react-bootstrap-tagsinput';

export const Step3OptionalFields = () => {
    
    if (localStorage.getItem('stakeholderLangs') === null)
    localStorage.setItem('stakeholderLangs', '[]');
if (localStorage.getItem('volunteerLangs') === null)
    localStorage.setItem('volunteerLangs', '[]');



const [stakeholderLangs, setStakeholderLangs] = useState(JSON.parse(localStorage.getItem('stakeholderLangs')));
const [volunteerLangs, setVolunteerLangs] = useState(JSON.parse(localStorage.getItem('volunteerLangs')));





useEffect(() => {
    localStorage.setItem('stakeholderLangs', JSON.stringify(stakeholderLangs));
}, [stakeholderLangs]);

useEffect(() => {
    localStorage.setItem('volunteerLangs', JSON.stringify(volunteerLangs));
}, [volunteerLangs]);



const displayStakeholderLangs = () => {
    var list = "Preferred Stakeholder Languages: ";
    for (let i = 0; i < stakeholderLangs.length; i++) {
        list += stakeholderLangs[i] ;
        if(i != stakeholderLangs.length - 1) {
            list += ", ";
        }
    }
    return list;
}

const displayVolunteerLangs = () => {
    var list = `Preferred Volunteer Languages: `;
    for (let i = 0; i < volunteerLangs.length; i++) {
        list += volunteerLangs[i];
        if(i != volunteerLangs.length - 1) {
            list += ", ";
        }
    }
    return list;
}

    return (
        <Card>
                        <Card.Title className="mx-3 mt-3">
                            Optional Fields
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>Fields below are not necessary to fill, but they surely improve your campaigns recognition on the platform.</Card.Text>
                            <hr></hr>
                            <Form>
                                <FormGroup>
                                    <Form.Label>Preferred stakeholder languages</Form.Label>
                                    <div className="input-group">
                                    <InputTags values={stakeholderLangs} placeholder='New Tag' onTags={(value) => {setStakeholderLangs(value.values)}} />
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        data-testid="button-clearAll"
                                        onClick={(e) => {e.preventDefault();setStakeholderLangs([]);}}
                                    >Delete all</button>
                                    </div>
                                    <hr />
                                    {displayStakeholderLangs()}
                                </FormGroup>
                                <hr></hr>
                                <FormGroup>
                                    <Form.Label>Preferred volunteer languages</Form.Label>
                                    <div className="input-group">
                                    <InputTags values={volunteerLangs} placeholder='New Tag' onTags={(value) => {setVolunteerLangs(value.values)}} />
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        data-testid="button-clearAll"
                                        onClick={(e) => {e.preventDefault();setVolunteerLangs([]);}}
                                    >Delete all</button>
                                    </div>
                                    <hr />
                                    {displayVolunteerLangs()}
                                </FormGroup>
                            </Form>
                        </Card.Body>
                    </Card>
    )
}