import { useState } from 'react';
import { NavigationBar } from '../NavigationBar';
import { CreateCampaignNavbar } from './CreateCampaignNavbar';
import Row from 'react-bootstrap/Row';
import Container from'react-bootstrap/Container';
import Card from'react-bootstrap/Card';
import FormGroup from'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form';
import Image from'react-bootstrap/Image';

export const CreateCampaignS3 = () => {
    const [url, setUrl] = useState('https://www.openstreetmap.org/export/embed.html?bbox=-252.42187500000003%2C-64.16810689799152%2C191.25000000000003%2C85.80595815715571&amp;layer=mapnik;&amp;marker=-81%2c29%2c');

    const handleChange = async () => {
        const field = document.getElementById('location');
        try {
            let response = await fetch('https://geocode.maps.co/search?q=' + field.value);
            let data = await response.json();
            let lat = data[0].lat;
            let lon = data[0].lon;
            setUrl('https://www.openstreetmap.org/export/embed.html?bbox=' + (parseFloat(lon)-0.5) + '%2C' + (parseFloat(lat)-0.5) + '%2C' + (parseFloat(lon)+0.5) + '%2C' + (parseFloat(lat)+0.5) + '&amp;layer=mapnik&amp;marker=' + lon + '%2C' + lat);
        } catch {
            console.log('Error: could not find location.');
        }
    }

    return(
        <div>
            <NavigationBar />
            <CreateCampaignNavbar />
            <Container>
                <Row className="mt-5">
                    <h2>Step 3: Location & Language</h2>
                    
                </Row>
                <Row className="mt-3">
                    <Card>
                        <Card.Title className="mt-3">
                            Mandatory fields
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>The two fields below are essential to make your campaign recognizable at our platform. Prividing detailed information will also result in better matching with future campaign partners.</Card.Text>    
                        <Form>
                            <FormGroup>
                                <Form.Label>Your location</Form.Label>
                                <Form.Control type="text" placeholder="eg.: Poland, Wroclaw" />
                                <Form.Text className="text-muted">Where is this campaign taking place?</Form.Text>
                            </FormGroup>
                            <br></br>
                            <FormGroup>
                                <Form.Label>Reach</Form.Label>
                                <Form.Control id="location" type="text" placeholder="eg.: India" onChange={handleChange}/>
                                <Form.Text>
                                    <Card>
                                        <iframe width="425" height="350" frameBorder="0" scrolling="no" marginHeight="2px" marginWidth="2px" src={url}></iframe><br/>
                                    </Card>
                                </Form.Text>
                                <Form.Text className="text-muted">You can select the country or make the reach of the campaign using the map above</Form.Text>
                            </FormGroup>
                        </Form>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className="mt-5">
                    <Card>
                        <Card.Title className="mt-4">
                            Optional Fields
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>Fields below are not necessary to fill, but they surely improve your campaigns recognition on the platform.</Card.Text>
                            <Form>
                                <FormGroup>
                                    <Form.Label>Preferred languages</Form.Label>
                                    <Form.Control type="text" placeholder="eg.: English" />
                                    <Form.Text>
                                        Added languages: look at figma again
                                    </Form.Text>
                                </FormGroup>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}