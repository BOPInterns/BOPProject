import { NavigationBar } from '../NavigationBar';
import { CreateCampaignNavbar } from './CreateCampaignNavbar';
import Row from 'react-bootstrap/Row';
import Container from'react-bootstrap/Container';
import Card from'react-bootstrap/Card';
import FormGroup from'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form';
import Image from'react-bootstrap/Image';
import { InputTags } from 'react-bootstrap-tagsinput';
import "react-bootstrap-tagsinput/dist/index.css";
import { useState } from 'react';
import { useEffect } from 'react';

export const CreateCampaignS3 = () => {
    if (localStorage.getItem('location') === 'null') 
        localStorage.setItem('location', '');
    if (localStorage.getItem('reach') === 'null')
        localStorage.setItem('reach', '');
    if (localStorage.getItem('stakeholderLangs') === null)
        localStorage.setItem('stakeholderLangs', '[]');
    if (localStorage.getItem('volunteerLangs') === null)
        localStorage.setItem('volunteerLangs', '[]');
    if (localStorage.getItem('step3') === 'null')
        localStorage.setItem('step3', 'false');

    const [location, setLocation] = useState(localStorage.getItem('location'));
    const [reach, setReach] = useState(localStorage.getItem('reach'));
    const [stakeholderLangs, setStakeholderLangs] = useState(JSON.parse(localStorage.getItem('stakeholderLangs')));
    const [volunteerLangs, setVolunteerLangs] = useState(JSON.parse(localStorage.getItem('volunteerLangs')));
    const [url, setUrl] = useState('https://www.openstreetmap.org/export/embed.html?bbox=-252.42187500000003%2C-64.16810689799152%2C191.25000000000003%2C85.80595815715571&amp;layer=mapnik;&amp;marker=-81%2c29%2c');


    useEffect(() => {
        localStorage.setItem('location', location);
    }, [location]);

    useEffect(() => {
        localStorage.setItem('reach', reach);
    }, [reach]);

    useEffect(() => {
        localStorage.setItem('stakeholderLangs', JSON.stringify(stakeholderLangs));
    }, [stakeholderLangs]);

    useEffect(() => {
        localStorage.setItem('volunteerLangs', JSON.stringify(volunteerLangs));
    }, [volunteerLangs]);

    useEffect(() => {
        if ((location.length == 0) || (reach.length == 0))
            localStorage.setItem('step3', false);
        else 
            localStorage.setItem('step3', true);
    }, [location, reach]);

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

    const handleChange = async (e) => {
        setReach(e.target.value);
        const field = document.getElementById('location');

        try {
            let response = await fetch('https://geocode.maps.co/search?q=' + e.target.value);
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
                            <Card.Text>The two fields below are essential to make your campaign recognizable at our platform. Providing detailed information will also result in better matching with future campaign partners.</Card.Text>    
                        <Form>
                            <FormGroup>
                                <Form.Label>Your location</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="eg.: Poland, Wroclaw" 
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                /><Form.Text className="text-muted">Where is this campaign taking place?</Form.Text>
                            </FormGroup>
                            <br></br>
                            <FormGroup>
                                <Form.Label>Reach</Form.Label>
                                <Form.Control 
                                    type="text"
                                    placeholder="eg.: India"
                                    value={reach}
                                    onChange={handleChange}
                                />
                                <Form.Text>
                                    <iframe width="425" height="350" frameBorder="0" scrolling="no" marginHeight="2px" marginWidth="2px" src={url}></iframe><br/>
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
                                <br></br>
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
                </Row>
            </Container>
        </div>
    )
}