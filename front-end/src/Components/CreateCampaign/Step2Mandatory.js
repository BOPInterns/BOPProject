import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';



export const Step2MandatoryFields = () => {
    if (localStorage.getItem('description') === null) 
    localStorage.setItem('description', '');
    if (localStorage.getItem('challenge') === null) 
    localStorage.setItem('challenge', '');  
    
    const [description, setDescription] = useState(localStorage.getItem('description'));
    const [challenge, setChallenge] = useState(localStorage.getItem('challenge'));
    
    useEffect(() => {
        localStorage.setItem('description', description);
    }, [description]);

    useEffect(() => {
        localStorage.setItem('challenge', challenge);
    }, [challenge]);
    
    // validation
    useEffect(() => {
        if ((description.length < 20) || (description.length > 500) || (challenge.length < 10) || (challenge.length > 500))
            return localStorage.setItem('step2', false);
        localStorage.setItem('step2', true);
    }, [description, challenge]);

    
    return (
        <Container>
        <Card className="">
        <Card.Title className="mx-3 mt-3">
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
    </Container>
    )
}