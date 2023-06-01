import Card from 'react-bootstrap/Card';
import Badge from'react-bootstrap/Badge';
import Image from'react-bootstrap/Image';
import Row from'react-bootstrap/Row';
import Button from'react-bootstrap/Button';
import { useDebugValue, useEffect, useState } from 'react';

export const CampaignCard = ({campData}) => {
    const [name, setName] = useState('');
    const [tags, setTags] = useState([]);
    const [challenge, setChallenge] = useState('');
    const [status, setStatus] = useState('');
    const [orgName, setOrgName] = useState('');

    useEffect(() => {
        if(campData){
            setName(campData['name']);
            setTags(campData['tags']);
            setChallenge(campData['challenge']);
            setStatus(campData['status']);
            setOrgName(campData['organization']);
        }
    });

    const loadTags = () => {
        var list = [];
        for(let i = 0; i < tags.length; i++){
            list.push(<Badge bg="secondary">{tags[i]}</Badge>);
        }
        return list;
    }


    return (
        <div>
            <Card style={{width: '12rem'}}>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>[no.%] match</Card.Text>
                    
                    {loadTags()}
                    <footer><cite>+3 more tags</cite></footer>
                    
                    <Card.Text>Campaign status: <Badge bg="warning">{challenge}</Badge></Card.Text>
                    <br></br>
                    <Card.Text>Owner
                        <br></br>
                        <Image src="../BOPHub.MainLogo.png"roundedCircle>
                        </Image>
                        <footer>{orgName}</footer>
                    </Card.Text>
                    <Row>
                        <Button variant="secondary" size="sm">Show campaign details</Button>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}