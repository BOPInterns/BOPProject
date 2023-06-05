import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { useState, } from 'react';

export const Step1OptionalFields = () => {
    if (localStorage.getItem('videoLink') === null)
    localStorage.setItem('videoLink', '');

    const [videoLink, setVideoLink] = useState(localStorage.getItem('videoLink'));
    
    return(
        <Card>
                        <Card.Title className="mt-3">
                            Optional Fields
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>Fields below are not necessary to fill, but they surely improve your campaign's recognition on the platform.</Card.Text>
                            <Card.Text>
                                <Form>
                                    <FormGroup>
                                        <Form.Label>Upload promotional video</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Video link" 
                                            value={videoLink}
                                            onChange={(e) => setVideoLink(e.target.value)}
                                        />
                                        <Form.Text className="text-muted">
                                            You can upload a video to promote your campaign
                                        </Form.Text>
                                    </FormGroup>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
    )
}