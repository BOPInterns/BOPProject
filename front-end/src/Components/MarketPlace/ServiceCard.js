import Card from 'react-bootstrap/Card';
import Badge from'react-bootstrap/Badge';
import Image from'react-bootstrap/Image';
import Row from'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import '../Account.css';
import '../CampaignCenter/CampaignCard.css';

export const ServiceCard = ({servData}) => {
    const [name, setName] = useState('');
    const [tags, setTags] = useState([]);
    const [price, setPrice] = useState('');

    useEffect(() => {
        if(servData){
            setName(servData['name']);
            setTags(servData['tags']);
            setPrice(servData['price']);
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
                <Card.Title style={{fontWeight: "bold"}}>{name}</Card.Title>
                <Card.Text><span style={{color: "green", fontWeight: "bold"}}>[no.%]</span> match</Card.Text>
                    
                    {loadTags()}
                    {tags.length - loadTags().length > 0 ? <footer style={{fontSize:12}}><cite>+{tags.length - loadTags().length} more tags</cite></footer> :<div style={{ height: '19px' }} />}
                    
                    <Image height="5" width="40" src={require("../placeholderProfilePicture.png")} alt="" roundedCircle fluid></Image>
                    <Card.Text> 
                        <Row>
                            <body><strong style={{fontSize: 14}}>Price: </strong><em style={{fontSize: 14}}>{price}</em></body>
                        </Row>
                    </Card.Text>
                    <Row>
                        <Button className="details-button btn-custom-class" variant="secondary" size="sm">Show service details</Button>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}