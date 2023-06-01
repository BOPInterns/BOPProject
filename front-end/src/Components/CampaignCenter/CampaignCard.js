import Card from 'react-bootstrap/Card';
import Badge from'react-bootstrap/Badge';
import Image from'react-bootstrap/Image';
import Row from'react-bootstrap/Row';
import Button from'react-bootstrap/Button';
import { useState } from 'react';

export const CampaignCard = () => {
    const [name, setName] = useState('');
    const [tags, setTags] = useState([]);
    const [status, setStatus] = useState('');
    const [orgName, setOrgName] = useState('');

    

    return (
        <div>
            <Card style={{width: '12rem'}}>
                <Card.Body>
                <Card.Title>Name of the Campaign</Card.Title>
                <Card.Text>[no.%] match</Card.Text>
                    <Badge bg="secondary">tags</Badge>
                    <Badge bg="secondary">tags</Badge>
                    <Badge bg="secondary">tags</Badge>
                    <footer><cite>+3 more tags</cite></footer>
                    
                    <Card.Text>Campaign status: <Badge bg="warning">Challenge</Badge></Card.Text>
                    <br></br>
                    <Card.Text>Owner
                        <br></br>
                        <Image src="../BOPHub.MainLogo.png"roundedCircle>
                        </Image>
                        <footer>Organization name</footer>
                    </Card.Text>
                    <Row>
                        <Button variant="secondary" size="sm">Show campaign details</Button>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}