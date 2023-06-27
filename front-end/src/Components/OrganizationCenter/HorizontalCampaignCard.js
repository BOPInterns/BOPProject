import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';


export const HorizontalCampaignCard = ({name, phase, tags, description}) => {
    return (
        <div>
            <Container style={{marginTop:10, marginBottom:10}}>
                <Row>
                    <Col sm={3}
                        style={{
                            paddingRight: '0px',
                        }}
                    >
                        <Card
                            style={{
                                borderTopRightRadius: '0',
                                borderBottomRightRadius: '0',
                                border: '1.5px solid black',
                                borderRight: '0px',
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
                        </Card>
                    </Col>
                    <Col
                        style={{
                            paddingLeft: '0px',
                        }}
                    >
                        <Card
                            style={{
                                borderTopLeftRadius: '0',
                                borderBottomLeftRadius: '0',
                                borderLeft: '0px',
                                border: '1.5px solid black',
                                height: '253px',
                            }}
                        >
                            <Card.Title
                                style={{
                                    paddingBottom: '0px',
                                }}
                            >
                                <Row
                                    style={{
                                        paddingTop: '30px',
                                    }}
                                >
                                    <Col
                                        style={{
                                            paddingLeft: '45px',
                                        }}
                                    >
                                        <p><strong>{name}</strong></p>
                                    </Col>
                                    <Col
                                        style={{
                                            textAlign: 'end',
                                            paddingRight: '40px',
                                        }}
                                    >
                                        <h6>
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
                            </Card.Title>
                            <Card.Body
                                style={{
                                    paddingTop: '0px',
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
                                <Row
                                    style={{
                                        paddingTop: '30px',
                                    }}
                                >
                                    <p>{description}</p>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}