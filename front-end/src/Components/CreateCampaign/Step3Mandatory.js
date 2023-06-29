import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { useEffect, useState } from 'react';
import './createCampaignCards.css';



export const Step3MandatoryFields = () => {
    
    const [location, setLocation] = useState(localStorage.getItem('location'));
    const [reach, setReach] = useState(localStorage.getItem('reach'));
    const [url, setUrl] = useState('https://www.openstreetmap.org/export/embed.html?bbox=-252.42187500000003%2C-64.16810689799152%2C191.25000000000003%2C85.80595815715571&amp;layer=mapnik;&amp;marker=-81%2c29%2c');
    
    // if (localStorage.getItem('step3') === null)
    // localStorage.setItem('step3', false);
    // if (localStorage.getItem('location') === null) 
    // localStorage.setItem('location', '');
    // if (localStorage.getItem('reach') === null)
    // localStorage.setItem('reach', '');
    
    useEffect(() => {
        localStorage.setItem('location', location);
    }, [location]);

    useEffect(() => {
        localStorage.setItem('reach', reach);
    }, [reach]);
    
    // validation
    useEffect(() => {
        if ((location.length == 0) || (reach.length == 0))
            return localStorage.setItem('step3', false);
        localStorage.setItem('step3', true);
    }, [location, reach]);
    
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
    
    return (
        <div>
            <Card
                className="create-campaign-card"
            >
                        <Card.Title className="create-campaign-card-title">
                            Mandatory fields
                        </Card.Title>
                        <Card.Body
                            className="create-campaign-card-body"
                        >
                            <Card.Text>
                                <strong>
                                    The two fields below are essential to make your campaign recognizable at our platform. Providing detailed information will also result in better matching with future campaign partners.
                                </strong>
                                </Card.Text>    
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
                                    <br></br>
                                    <iframe width="897" height="350" frameBorder="0" scrolling="no" marginHeight="2px" marginWidth="2px" src={url}></iframe><br/>
                                </Form.Text>
                                <Form.Text className="text-muted">You can select the country or make the reach of the campaign using the map above</Form.Text>
                            </FormGroup>
                        </Form>
                        </Card.Body>
                    </Card>
        </div>
    )
}