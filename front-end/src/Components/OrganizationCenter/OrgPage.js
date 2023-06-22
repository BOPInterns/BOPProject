import { NavigationBar } from '../NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { OrgGenInfo } from './OrgGenInfo';
import { OrgName } from './OrgName';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { OrgOverviewPage } from './OrgOverviewPage';
import { OrgCampaignPage } from './OrgCampaignsPage';
import { OrgOwnedSolutionsPage } from './OrgOwnedSolutionsPage';
import { OrgOfferedServicesPage } from './OrgOfferedServicesPage';
import { OrgTeamPage } from './OrgTeamPage';
import { OrgCaseStudiesPage } from './OrgCaseStudiesPage';

export const OrgPage = () => {
    
    const [ activePage, setActivePage ] = useState(1);
    const totalPages = 6;
    
    const handlePageChange = (page) => {
        setActivePage(page);
    };
    
    const renderActivePage = () => {
        switch (activePage) {
            case 1:
                return <OrgOverviewPage/>;
            case 2:
                return <OrgCampaignPage/>;
            case 3:
                return <OrgOwnedSolutionsPage/>;
            case 4:
                return <OrgOfferedServicesPage/>;
            case 5:
                return <OrgTeamPage/>;
            case 6:
                return <OrgCaseStudiesPage/>;
            default:
                return <OrgOverviewPage/>;
        }
    };
    
    return (
        <div>
            <NavigationBar/>
            <Container fluid className="org-details-container"
                style={{
                    padding: '60px',
                }}
            >
                <Row className="">
                    <Col sm={3} className="mt-3">
                        <Image
                            src={require('../placeholderProfilePicture.png')}
                            roundedCircle
                            style={{
                                height:290,
                                width:290
                            }}
                        />
                    </Col>
                    <Col lg={6} className="text-left">
                        <OrgName></OrgName>
                    </Col>
                    <Col md={3}>
                        <OrgGenInfo/>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-3">
            <Pagination className="custom-pagination justify-content-center">
                <Pagination.Item active={activePage === 1} onClick={() => handlePageChange(1)} className="org-navbar-btn">
                    Overview
                </Pagination.Item>
                <Pagination.Item active={activePage === 2} onClick={() => handlePageChange(2)}>
                    Campaigns
                </Pagination.Item>
                <Pagination.Item active={activePage === 3} onClick={() => handlePageChange(3)}>
                    Owned Solutions
                </Pagination.Item>
                <Pagination.Item active={activePage === 4} onClick={() => handlePageChange(4)}>
                    Offered Services
                </Pagination.Item>
                <Pagination.Item active={activePage === 5} onClick={() => handlePageChange(5)}>
                    Team
                </Pagination.Item>
                <Pagination.Item active={activePage === 6} onClick={() => handlePageChange(6)}>
                    Case Studies
                </Pagination.Item>
                </Pagination>
                {renderActivePage()}
            </Container>
        </div>
    )
}