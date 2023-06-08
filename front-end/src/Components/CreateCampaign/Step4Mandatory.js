import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { useState, useEffect } from 'react';


export const Step4MandatoryFields = () => {
    
    // if (localStorage.getItem('files') === null) 
    //     localStorage.setItem('files', '');
    // if (localStorage.getItem('step4') === null)
    //     localStorage.setItem('step4', false);

    const [files, setFiles] = useState(); 
    
    useEffect(() => {
        localStorage.setItem('files', files);
        localStorage.setItem('step4', true);
    }, [files]);

    const convertBase64 = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setFiles(reader.result);
        };
        reader.onerror = () => {
            console.log("Error: ", error);
        };
    }
    
    return (
        <div>
            <Card className="">
                        <Card.Title className="mx-3 mt-3">
                            Add attachments
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>
                                <strong>
                                Share with future stakeholders materials and attachments you find important or useful to broaden the knowledge about the create campaign. You can decide whether particular elements should be visible for all or after joining the campaign's team
                                </strong>
                            </Card.Text>
                            <br></br>
                            <Form>
                                <Form.Group controlId="campaignAttachments">
                                    <Form.Label>
                                        Upload files
                                    </Form.Label>
                                    <Form.Control type="file" multiple onChange={convertBase64}/>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
        </div>
    )
}