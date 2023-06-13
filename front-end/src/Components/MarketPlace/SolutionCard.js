import Card from 'react-bootstrap/Card';
import Badge from'react-bootstrap/Badge';
import Image from'react-bootstrap/Image';
import Row from'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from'react-bootstrap/Button';
import { useEffect, useState } from 'react';

export const SolutionCard = ({solData}) => {
    const [name, setName] = useState('');
    const [tags, setTags] = useState([]);
    const [orgName, setOrgName] = useState('');

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


    return (
        <div>
            <Card style={{width: 320, display: 'flex'}}>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <hr></hr>
                <Card.Text style={{color: "green"}}>[no.%] match</Card.Text>
                    
                    {loadTags()}
                    {tags.length - loadTags().length > 0 ? <footer style={{fontSize:12}}><cite>+{tags.length - loadTags().length} more tags</cite></footer> :<div style={{ height: '19px' }} />}
                    
                    <hr></hr>
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
                        <Button variant="secondary" size="sm">Show solution details</Button>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}