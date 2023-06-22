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
    const [phase, setPhase] = useState('');
    const [orgName, setOrgName] = useState('');

    useEffect(() => {
        if(campData){
            setName(campData['name']);
            setTags(campData['tags']);
            setChallenge(campData['challenge']);
            setPhase(campData['phase']);
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
            list.push(<Badge style={{marginRight: 2}}bg="secondary">{tags[i]}</Badge>);
            i++;
        }
        return list;
    }


    return (
        <div>
            <Card style={{width: 320, display: 'flex'}}>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <hr></hr>
                <Card.Text style={{color: "green"}}>[no.%] match</Card.Text>
                    
                    {loadTags()}
                    {tags.length - loadTags().length > 0 ? <footer style={{fontSize:12}}><cite>+{tags.length - loadTags().length} more tags</cite></footer> :<div style={{ height: '19px' }} />}
                    
                    <Card.Text>Campaign phase: <Badge bg="warning">{phase}</Badge></Card.Text>
                    <hr></hr>
                    <Card.Text className='text-muted' style={{height: 70}}>Campaign Challenge: {challenge}</Card.Text>
                    <Card.Text>Owner
                        <hr></hr>
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