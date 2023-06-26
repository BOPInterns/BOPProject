import Card from 'react-bootstrap/Card';
import Badge from'react-bootstrap/Badge';
import Image from'react-bootstrap/Image';
import Row from'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import '../Account.css';
import '../CampaignCenter/CampaignCard.css';
import { useNavigate } from 'react-router-dom';

export const SolutionCard = ({solData}) => {
    const [name, setName] = useState('');
    const [tags, setTags] = useState([]);
    const [orgName, setOrgName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if(solData){
            setName(solData['name']);
            setTags(solData['tags']);
            setOrgName(solData['organization']);
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
    
    function handleDetails() {
        navigate(`/solution-page/${solData['_id']}`);
    }


    return (
        <div>
            <Card className="custom-card" style={{width: 320, display: 'flex'}}>
                <Card.Body>
                <Card.Title style={{fontWeight: "bold"}}>{name}</Card.Title>
                <Card.Text><span style={{color: "green", fontWeight: "bold"}}>[no.%]</span> match</Card.Text>
                    
                    {loadTags()}
                    {tags.length - loadTags().length > 0 ? <footer style={{fontSize:12}}><cite>+{tags.length - loadTags().length} more tags</cite></footer> :<div style={{ height: '19px' }} />}
                    
                    <Card.Text> 
                        <Row style={{marginBottom: 10}}>
                        <strong>Owner:</strong>
                        </Row>
                        <Row>
                            <Col>
                            <Image height="55" width="55" src={require("../placeholderProfilePicture.png")}  roundedCircle></Image>
                            </Col>
                            <Col >
                            <body>{orgName}</body>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Card.Text>
                    <Row>
                        <Button 
                        className="details-button btn-custom-class" 
                        variant="secondary" 
                        size="sm"
                        onClick={handleDetails}
                        >
                            Show solution details
                        </Button>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}