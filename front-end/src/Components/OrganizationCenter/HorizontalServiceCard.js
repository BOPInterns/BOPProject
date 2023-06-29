import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';


export const HorizontalServiceCard = ({name, price, tags, description}) => {
    return (
        <div>
            <Container style={{marginTop:10, marginBottom:10}}>
                <Card
                    style={{
                        borderRadius: 5,
                        borderLeft: '0px',
                        border: '1.5px solid black',
                        height: '253px',
                    }}
                >
                    <Row>
                        <Col sm={3}
                            style={{
                                paddingRight: '0px',
                                width: '265px'
                            }}
                        >
                            <Image
                                src={require('../placeholderProfilePicture.png')}
                                style={{
                                    height: '250px',
                                    borderTopLeftRadius: '3px',
                                    borderBottomLeftRadius: '3px',
                                }}
                            />
                        </Col>
                        <Col>
                            <Row>
                                <Col
                                    style={{
                                        marginTop: '30px'
                                    }}
                                >
                                    <Card.Title
                                        style={{
                                            paddingBottom: '0px',
                                            width: 210
                                        }}
                                    >
                                        <p><strong style={{fontSize:30}}>{name}</strong></p>
                                    </Card.Title>
                                </Col>
                                <Col>
                                    <Card.Body
                                        style={{
                                            paddingTop: '0px',
                                            width: '240px',
                                            marginTop: '30px'
                                        }}
                                    >
                                        <Row>
                                            <Col>
                                            {tags.map((tag, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="mr-2 mb-2 bg-secondary"
                                                    style={{marginRight: 2}}
                                                >{tag}</Badge>
                                            ))}
                                            </Col>
                                        </Row>
                                        
                                    </Card.Body>
                                </Col>  
                                <Col
                                    style={{
                                        textAlign: 'end',
                                        paddingRight: '40px',
                                        marginTop: '30px',
                                    }}
                                >
                                <h6 width={40}>
                                    Phase:
                                    <Badge
                                        pill
                                        bg="warning"
                                    >
                                        {phase}
                                    </Badge>
                                </h6>
                            </Col>
                            </Row>
                            <Row>
                                <p style={{fontSize: 20}}>{description}</p>
                            </Row> 
                        </Col>                             
                    </Row>
                </Card>  
            </Container>
        </div>
    )
}