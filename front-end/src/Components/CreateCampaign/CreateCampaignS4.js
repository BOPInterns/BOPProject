import { NavigationBar } from '../NavigationBar';
import { CreateCampaignNavbar } from './CreateCampaignNavbar';
import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import Card from'react-bootstrap/Card';
import Form from'react-bootstrap/Form';
import { useEffect, useState } from 'react';

export const CreateCampaignS4 = () => {
    const [files, setFiles] = useState(); 

    useEffect(() => {
        if(files != ''){
            //uplaodFile(); uncomment this line for it to work
        }

    }, [files]);

    const convertBase64 = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setFiles(reader.result);
            //uplaodFile(reader.result);
        };
        reader.onerror = () => {
            console.log("Error: ", error);
        };
    }

    //temporary function to test if file upload works right
    const uplaodFile = () => {
        fetch("http://localhost:9000/upload-file",{
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                fileData: files
            })
        }).then((res) => res.json()).then((data) => console.log(data))
    }

    return(
        <div>
            <NavigationBar />
            <CreateCampaignNavbar />
            <Container>
                <Row className="mt-5">
                    <h2>Step 4: Additional materials and attachments</h2>
                </Row>
                <Row>
                    <Card className="mt-3">
                        <Card.Title className="mt-3">
                            Add attachments
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>
                                Share withfuture stakeholders materials and attachments you find important or useful to broaden the knowledge about the create campaign. You can decide whether particular elements should be visible for all or after joining the campaign's team
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
                </Row>
            </Container>
        </div>
    );
};