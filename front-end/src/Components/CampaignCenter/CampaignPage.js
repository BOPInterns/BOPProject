import { NavigationBar } from '../NavigationBar';
import Container from  'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import '../videoPlaceHolder.png';

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
                <Card
                    style={{
                        height: '400px',
                        width: '900px',
                    }}
                >
                    <Card.Title>Migrant Construction Labour in Bangladesh</Card.Title>
                    <Card.Body>
                        <Card
                            style={{
                                
                            }}
                        >
                            <Card.Title>testing</Card.Title>
                        </Card>
                    </Card.Body>
                </Card>
                </Row>
            </Container>
        </div>
    )
}