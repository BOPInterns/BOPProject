import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { NavigationBar } from '../NavigationBar';
import Pagination from 'react-bootstrap/Pagination';
import { SolutionOverview } from './SolutionOverview';
import { SolutionWorks } from './SolutionWorks';
import { SolutionNeeds } from './SolutionNeeds';
import { SolutionDiscussion } from './SolutionDiscussion';

export const SolutionPage = () => {
    
    const [ activePage, setActivePage ] = useState(1);
    const totalPages = 4;
    
    const handlePageChange = (page) => {
        setActivePage(page);
    };
    
    const renderActivePage = () => {
        switch (activePage) {
            case 1:
                return <SolutionOverview/>;
            case 2:
                return <SolutionWorks/>;
            case 3:
                return <SolutionNeeds/>;
            case 4:
                return <SolutionDiscussion/>;
            default:
                return <SolutionOverview/>;
        }
    };
    
    return (
        <div>
            <NavigationBar/>
            <Container fluid style={{
                    backgroundColor: '#f9f9f9',
                }}>
                <Row
                    style={{
                        paddingLeft: '20px',
                    }}
                >
                    <Col md={6} 
                    style={{
                        paddingTop: 20,
                    }}>
                        <Row
                            style={{
                                paddingLeft: '0px',
                            }}
                        >
                        <Card style={{
                            height: 75,
                            width: 450,
                            backgroundColor: 'lightgray',
                            borderColor: 'transparent',
                        }}>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <p><i class="fa-regular fa-heart fa-md"></i> <strong>997</strong> endorsements</p>
                                    </Col>
                                    <Col className="text-end">
                                        <Button
                                            style={{
                                                height: 40,
                                                width: 180
                                            }}
                                            variant="dark"
                                        >
                                        Endorse Solution
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Row>
                        <Row
                            style={{
                                paddingTop: '30px',
                            }}
                        >
                        <h3>B2C platform for farmers to enable direct sales in local regions</h3>
                        </Row>
                        <Row
                            style={{
                                paddingTop: '20px',
                                paddingBottom: '20px',
                            }}
                        >
                            <Card
                                style={{
                                    height: 70,
                                    width: 400,
                                    backgroundColor: 'lightgray',
                                    borderColor: 'transparent',
                                    
                                }}
                            >
                                <Card.Body
                                style={{
                                    paddingTop: '0px',
                                }}>
                                    <Row
                                        style={{
                                            paddingTop: '0px',
                                        }}
                                    >
                                        Solution owner:
                                    </Row>
                                    <Row>
                                        <Col sm={2}
                                            style={{
                                                paddingLeft: '0px',
                                                paddingTop: '5px',
                                                paddingRight: '0px',
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    width: 30,
                                                    height: 30,
                                                }}
                                                src={require('../placeholderProfilePicture.png')}
                                                roundedCircle
                                            />
                                        </Col>
                                        <Col
                                            style={{
                                                textAlign: 'left',
                                                paddingTop: '6px',
                                                paddingLeft: '0px',
                                            }}
                                        >
                                            <p>Name of the organization</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Button
                                className="mt-4"
                                variant="dark"
                            >
                                Reach out for adaption to your campaign</Button>
                        </Row>
                    </Col>
                    <Col md={6}
                        style={{
                            paddingTop: '20px',
                            paddingRight: '20px',
                            textAlign: 'end',
                        }}
                    >
                    <Image
                        style={{
                            height: 330,
                            width: 560,
                        }}
                        src={require('../videoPlaceHolder.png')}
                    />
                    </Col>
                </Row>
                <Row
                    style={{
                        paddingLeft: '20px',
                        paddingBottom: '40px',
                    }}
                >
                    <Card
                        style={{
                            height: 130,
                            width: 1400,
                            
                        }}
                    >
                        <Card.Body>
                            <Row>
                                <Col>
                                    <p>Check how this campaign matches your profile goals: </p>
                                    <p><strong>Overall matching:</strong> 96% (98% relevance, 95% complementary, 95% community rating)</p>
                                    <a href="/"><i class="fa-solid fa-arrow-up-right-from-square"></i> detailed matching information</a>
                                </Col>
                                <Col md={3}>
                                    <Button
                                        style={{
                                            width: 319,
                                            marginBottom: '10px',
                                        }}
                                        variant="dark"
                                    >
                                        Ask for solution adaption
                                    </Button>
                                    <br/>
                                    <Button
                                        style={{
                                            width: 319
                                        }}
                                        variant="outline-dark"
                                    >
                                        Follow solution
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Container className="mt-3">
            <Pagination className="custom-pagination justify-content-center">
                <Pagination.Item active={activePage === 1} onClick={() => handlePageChange(1)} className="org-navbar-btn">
                    Solution Overview
                </Pagination.Item>
                <Pagination.Item active={activePage === 2} onClick={() => handlePageChange(2)}>
                    How Solutions Work?
                </Pagination.Item>
                <Pagination.Item active={activePage === 3} onClick={() => handlePageChange(3)}>
                    Needs
                </Pagination.Item>
                <Pagination.Item active={activePage === 4} onClick={() => handlePageChange(4)}>
                    Discussion
                </Pagination.Item>
                </Pagination>
                {renderActivePage()}
            </Container>
        </div>
    )
}