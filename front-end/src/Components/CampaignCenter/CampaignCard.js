import Card from 'react-bootstrap/Card';
import Badge from'react-bootstrap/Badge';
import Image from'react-bootstrap/Image';
import Row from'react-bootstrap/Row';
import Button from'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import '../Account.css';
import './CampaignCard.css';
import { useNavigate } from 'react-router-dom';

export const CampaignCard = ({campData}) => {
    const [name, setName] = useState('');
    const [tags, setTags] = useState([]);
    const [challenge, setChallenge] = useState('');
    const [phase, setPhase] = useState('');
    const [orgName, setOrgName] = useState('');
    const navigate = useNavigate();

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
    
    const loadChallenge = () => {
        const MAXCHARS = 47;
        let currChars = 0;
        let i = 0;

        let list = '';
        while(currChars < MAXCHARS && list.length != challenge.length){
            currChars += 1;
            list += challenge[i];
            i++;
        }
        return list;
    }
    
    function handleDetails() {
        navigate(`/campaign-page/${campData['_id']}`);
    }


    return (
        <div>
            <Card 
            className='custom-card'
            style={{width: 320, display: 'flex'}}
            >
                <Card.Body>
                <Card.Title style={{fontWeight: 'bold'}}>{name}</Card.Title>
                <Card.Text style={{color: "green", fontWeight: 'bold'}}>[no.%] match</Card.Text>
                    
                    {loadTags()}
                    {tags.length - loadTags().length > 0 ? <footer style={{fontSize:12}}><cite>+{tags.length - loadTags().length} more tags</cite></footer> :<div style={{ height: '19px' }} />}
                    
                    <Card.Text>Campaign phase: <Badge style={{color: "black"}} bg="warning">{phase}</Badge></Card.Text>
                    <Card.Text className='text-muted' style={{height: 70}}>Campaign Challenge: { loadChallenge() }{(challenge.length > 47) ? '...' : ''}</Card.Text>
                    <Card.Text><span style={{fontWeight: "bold"}}>Owner</span>
                        <footer>                        
                            <Image height="5" width="40" src={require("../placeholderProfilePicture.png")} alt="" roundedCircle fluid>
                        </Image> {orgName}</footer>
                    </Card.Text>
                    <Row>
                        <Button 
                        className="details-button btn-custom-class" variant="secondary" 
                        size="sm"
                        onClick={handleDetails}
                        >
                            Show campaign details
                        </Button>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}