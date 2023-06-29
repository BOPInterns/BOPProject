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
import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { OrgOverviewPage } from './OrgOverviewPage';
import { OrgCampaignPage } from './OrgCampaignsPage';
import { OrgOwnedSolutionsPage } from './OrgOwnedSolutionsPage';
import { OrgOfferedServicesPage } from './OrgOfferedServicesPage';
import { OrgTeamPage } from './OrgTeamPage';
import { OrgCaseStudiesPage } from './OrgCaseStudiesPage';
//import internal from 'stream';

export const OrgPage = () => {
    
    const [ activePage, setActivePage ] = useState(1);

    const [ orgData, setOrgData] = useState(
        {
            name:"", 
            endorsements:-1, 
            statement:"", 
            interests:[], 
            type:"", 
            hq:"", 
            webLink:"", 
            numEmployees:-1, 
            dateJoined:"",
            presentation:"",
            focus: "",
            opRegions:[],
            vidLink:""
        }
    );
    const [ campData, setCampData ] = useState({
        name:"",
        phase:"",
        tags:[],
        description:""
    });
    const [ solData, setSolData ] = useState({
        name:"",
        tags:[],
    });
    const [ servData, setServData ] = useState({
        name:"",
        price:"",
        tags:[],
        description:""
    });

    const orgName = "Interns For Higher Pay";

    useEffect(() => {
        //for orgs
        fetch("http://localhost:9000/get-org-data", {
            method: "POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({name: orgName}) //change this back to name passed in at top when done w tesitng
        }).then((res) => res.json()) 
        .then((data) => {
            setOrgData(data.data);
        });

        // for campaign data
        fetch("http://localhost:9000/get-camp-by-org", {
            method: "POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({name: orgName}) //change this back to name passed in at top when done w tesitng
        }).then((res) => res.json()) 
        .then((data) => {
            setCampData(data.data);
            console.log(data.data)
        });

    }, [])


    const totalPages = 6;
    
    const handlePageChange = (page) => {
        setActivePage(page);
    };
    
    const renderActivePage = () => {
        switch (activePage) {
            case 1:
                return <OrgOverviewPage 
                            orgName={orgData.name}
                            presentation={orgData.presentation} 
                            focus={orgData.focus} 
                            opRegions={orgData.opRegions}
                            vidLink={orgData.vidLink}
                            campData={campData}
                        ></OrgOverviewPage>;
            case 2:
                return <OrgCampaignPage
                            orgName={orgName}
                            campData={campData}
                        ></OrgCampaignPage>;
            case 3:
                return <OrgOwnedSolutionsPage
                            orgName={orgName}
                        />;
            case 4:
                return <OrgOfferedServicesPage
                        orgName={orgName}
                        />;
            case 5:
                return <OrgTeamPage/>;
            case 6:
                return <OrgCaseStudiesPage/>;
            default:
                return <OrgOverviewPage
                            orgName={orgData.name}
                            presentation={orgData.presentation} 
                            focus={orgData.focus} 
                            opRegions={orgData.opRegions}
                            vidLink={orgData.vidLink}
                            campData={campData}
                        ></OrgOverviewPage>;
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
                        <OrgName 
                            name={orgData.name} 
                            endorsements={orgData.endorsements}
                            statement={orgData.statement}
                            interests={orgData.interests}
                        ></OrgName>
                    </Col>
                    <Col md={3}>
                        <OrgGenInfo
                            type={orgData.type}
                            hq={orgData.hq}
                            webLink={orgData.webLink}
                            numEmployees={orgData.numEmployees}
                            dateJoined={orgData.dateJoined}
                        ></OrgGenInfo>
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