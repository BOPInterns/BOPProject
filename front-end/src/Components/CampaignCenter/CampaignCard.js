import Card from 'react-bootstrap/Card';
import Badge from'react-bootstrap/Badge';
import Image from'react-bootstrap/Image';
import Row from'react-bootstrap/Row';
import Button from'react-bootstrap/Button';
import { useEffect, useState } from 'react';

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
        var MAXCHARS = 15;
        var currChars = 0;
        var i = 0;

        var list = [];
        while(currChars < MAXCHARS && list.length != tags.length){
            currChars += tags[i].length;
            list.push(<Badge bg="secondary">{tags[i]}</Badge>);
            i++;
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
                    {tags.length - loadTags().length > 0 ? <footer><cite>+{tags.length - loadTags().length} more tags</cite></footer> : <></>}
                    
                    <Card.Text>Campaign status: <Badge bg="warning">{status}</Badge></Card.Text>
                    <br></br>
                    <Card.Text className='text-muted'>Campaign Challenge: {challenge}</Card.Text>
                    <Card.Text>Owner
                        <br></br>
                        <Image height="5" width="40" src={require("../placeholderProfilePicture.png")} alt="" roundedCircle fluid>
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