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
            <Container fluid className="">
                <Row>
                    <Col md={6}>
                        <Row>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <p><i class="fa-regular fa-heart fa-md"></i> <strong>997</strong> endorsements</p>
                                    </Col>
                                    <Col>
                                        <Button
                                            variant="dark"
                                        >
                                        Endorse Solution
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Row>
                        <Row>
                        <h3>B2C platform for farmers to enable direct sales in local regions</h3>
                        </Row>
                        <Row>
                            <p>Solution owner:</p>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Image
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                }}
                                                src={require('../placeholderProfilePicture.png')}
                                                roundedCircle
                                            />
                                        </Col>
                                        <Col>
                                            <p>Name of the organization</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Button
                                variant="dark"
                            >
                                Reach out for adaption to your campaign</Button>
                        </Row>
                    </Col>
                    <Col md={6}>
                    <Image
                        style={{
                            height: 350,
                            width: 560,
                        }}
                        src={require('../videoPlaceHolder.png')}
                    />
                    </Col>
                </Row>
                <Row>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <p>Check how this campaign matches your profile goals: </p>
                                    <p>Overall matching: 96% (98% relevance, 95% complementary, 95% community rating)</p>
                                    <a href="/"><i class="fa-solid fa-arrow-up-right-from-square"></i> detailed matching information</a>
                                </Col>
                                <Col>
                                    <Button
                                        variant="dark"
                                    >
                                        Ask for solution adaption
                                    </Button>
                                    <Button
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