import { NavigationBar } from '../NavigationBar';
import Container from  'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import '../videoPlaceHolder.png';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const CampaignPage = () => {
    return (
        <div>
            <NavigationBar/>
            <Container 
                fluid 
                style={{
                    backgroundColor: '',
                }}
            >
                <Row
                    style={{
                        justifyContent: 'center',
                        paddingTop: '80px',
                    }}
                >
                    <Col
                        style={{
                            paddingRight: '0px',
                            paddingLeft: '200px'
                        }}
                    >
                <Card
                    style={{
                        height: '400px',
                        width: '',
                        borderTopRightRadius: '0px',
                        borderBottomRightRadius: '0px',
                        
                    }}
                >
                    <Card.Title>Migrant Construction Labour in Bangladesh</Card.Title>
                    <Card.Body>
                        <Row
                            style={{
                            }}
                        >
                            <p>Campaign contributes to these SDG challenges:</p>
                        </Row>
                        <Row
                            style={{
                            }}
                        >
                            <Col>
                                <Badge
                                    bg='secondary'
                                >
                                    tagname
                                </Badge>
                            </Col>
                            <Col>
                                <Badge
                                    bg='secondary'
                                >
                                    tagname
                                </Badge>
                            </Col>
                            <Col>
                                <Badge
                                    bg='secondary'
                                >
                                    tagname
                                </Badge>
                            </Col>
                            <Col>
                                <Badge
                                    bg='secondary'
                                >
                                    tagname
                                </Badge>
                            </Col>
                        </Row>
                        <Row>
                            <p><strong>Campaign Status:</strong></p>
                        </Row>
                        <Row>
                            <Col>
                                <Badge
                                    bg='warning'
                                >
                                    Challenge
                                </Badge>
                            </Col>
                            <Col>
                                <Button
                                    variant="link"
                                >
                                    <i class="fa-solid fa-up-right-from-square"></i>
                                    learn more about campaign status
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                </Col>
                <Col
                    sm={4}
                    style={{
                        paddingLeft: '0px',
                        paddingRight: '200px',
                    }}
                >
                    <Card
                        style={{
                            height: '400px',
                            paddingLeft: '0px',
                            backgroundColor: 'lightgray',
                            borderTopLeftRadius: '0px',
                            borderBottomLeftRadius: '0px',
                            borderLeft: '0px'
                        }}
                    >
                        <Card.Body>
                            Check how this campagin matches your profile goals:
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
        </div>
    )
}