import { NavigationBar } from '../NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './MarketPlace.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { CampaignCard } from '../CampaignCenter/CampaignCard';
import { SolutionCard } from "./SolutionCard";
import { ServiceCard } from './ServiceCard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { CampaignComp } from './CampaignComp';
import { SolutionComp } from './SolutionComp';
import { ServiceComp } from './ServicesComp';
import Pagination from 'react-bootstrap/Pagination';



export const MarketPlace = () => {
    // initialize localStorage filter variables
    if (localStorage.getItem('orgFilter') === 'null')
        localStorage.setItem('orgFilter', '');
    if (localStorage.getItem('campaignFilter') === 'null')
        localStorage.setItem('campaignFilter', '');
    // if (localStorage.getItem('roleFilter') === null)
    //     localStorage.setItem('roleFilter', '');
    // if (localStorage.getItem('statusFilter') === null)
    //     localStorage.setItem('statusFilter', '');
    // if (localStorage.getItem('regDateFilter') === null)
    //     localStorage.setItem('regDateFilter', '');
    // if (localStorage.getItem('tagsFilter') === null)
    //     localStorage.setItem('tagsFilter', '[]');
    
    const [ allToggle, setAllToggle ] = useState(null);
    const [ campaignToggle, setCampaignToggle ] = useState(false);
    const [ solutionsToggle, setSolutionsToggle ] = useState(false);
    const [ servicesToggle, setServicesToggle ] = useState(false);
    
    
    const [ campaignData, setCampaignData ] = useState([]);
    const [ solutionData, setSolutionData ] = useState([]);
    const [ serviceData, setServiceData ] = useState([]);
    
    const [ activePage, setActivePage ] = useState(1);
    const totalPages = 4;
    
    const handlePageChange = (page) => {
        setActivePage(page);
    };
    
    const renderActivePage = () => {
        switch (activePage) {
            case 1:
                return (<CampaignComp/>);
            case 2:
                return <CampaignComp/>;
            case 3:
                return <SolutionComp/>;
            case 4:
                return <ServiceComp/>;
            default:
                return <CampaignCard/>;
        }
    };
    
    useEffect(() => {
        //for campaigns
        console.log(`orgFilter${localStorage.getItem('orgFilter')}orgFilter`);
        fetch("http://localhost:9000/get-campaign-data", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                orgFilter: localStorage.getItem('orgFilter'),
                campaignFilter: localStorage.getItem('campaignFilter'),
                // roleFilter: localStorage.getItem('roleFilter'),
                // statusFilter: localStorage.getItem('statusFilter'),
                // regDateFilter: localStorage.getItem('regDateFilter'),
                // tagsFilter: JSON.parse(localStorage.getItem('tagsFilter'))
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.data)
                setCampaignData(data.data);
            else 
                setCampaignData([]);
        });

        //for solutions
        fetch("http://localhost:9000/get-solution-data", {
            method: "GET",
        }).then((res) => res.json())
        .then((data) => {
            setSolutionData(data.data);
        });

        //for services
        fetch("http://localhost:9000/get-service-data", {
            method: "GET",
        }).then((res) => res.json())
        .then((data) => {
            setServiceData(data.data);
        });
    }, []);

    const loadData = (i) => {
        return campaignData[i];
    }

    const loadCards = () => {
        var rows = [];
        var fulls = Math.floor(campaignData.length / 4); 
        var remains = campaignData.length % 4;

        var num = 0;
        for(let i = 0; i < fulls; i++){
            rows.push(
                <Row>
                    <Col sm={3}><CampaignCard campData={loadData(num)}/></Col>
                    <Col sm={3}><CampaignCard campData={loadData(num+1)}/></Col>
                    <Col sm={3}><CampaignCard campData={loadData(num+2)}/></Col>
                    <Col sm={3}><CampaignCard campData={loadData(num+3)}/></Col>
                </Row>
            );
            num += 4;
        }
        if(remains == 3){
            rows.push(
                <Row className="mt-3">
                    <Col><CampaignCard campData={loadData(num)}/></Col>
                    <Col><CampaignCard campData={loadData(num+1)}/></Col>
                    <Col><CampaignCard campData={loadData(num+2)}/></Col>
                    <Col></Col>
                </Row>
            );
        }
        else if(remains == 2){
            rows.push(
                <Row className="mt-3">
                    <Col><CampaignCard campData={loadData(num)}/></Col>
                    <Col><CampaignCard campData={loadData(num+1)}/></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            );
        }
        else if(remains == 1){
            rows.push(
                <Row className="mt-5">
                    <Col><CampaignCard campData={loadData(num)}/></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            );
        }
        return rows;   
    }
    
    const loadSolutionData = (i) => {
        return solutionData[i];
    }

    const loadSolutionCards = () => {
        var rows = [];
        var fulls = Math.floor(solutionData.length / 4); 
        var remains = solutionData.length % 4;

        var num = 0;
        for(let i = 0; i < fulls; i++){
            rows.push(
                <Row>
                    <Col><SolutionCard solData={loadSolutionData(num)}/></Col>
                    <Col><SolutionCard solData={loadSolutionData(num+1)}/></Col>
                    <Col><SolutionCard solData={loadSolutionData(num+2)}/></Col>
                    <Col><SolutionCard solData={loadSolutionData(num+3)}/></Col>
                </Row>
            );
            num += 4;
        }
        if(remains == 3){
            rows.push(
                <Row className="mt-5">
                    <Col><SolutionCard solData={loadSolutionData(num)}/></Col>
                    <Col><SolutionCard solData={loadSolutionData(num+1)}/></Col>
                    <Col><SolutionCard solData={loadSolutionData(num+2)}/></Col>
                    <Col></Col>
                </Row>
            );
        }
        else if(remains == 2){
            rows.push(
                <Row className="mt-5">
                    <Col><SolutionCard solData={loadSolutionData(num)}/></Col>
                    <Col><SolutionCard solData={loadSolutionData(num+1)}/></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            );
        }
        else if(remains == 1){
            rows.push(
                <Row className="mt-5">
                    <Col><SolutionCard solData={loadSolutionData(num)}/></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            );
        }
        return rows;   
    }

    const loadServiceData = (i) => {
        return serviceData[i];
    }

    const loadServiceCards = () => {
        var rows = [];
        var fulls = Math.floor(serviceData.length / 4); 
        var remains = serviceData.length % 4;

        var num = 0;
        for(let i = 0; i < fulls; i++){
            rows.push(
                <Row>
                    <Col><ServiceCard servData={loadServiceData(num)}/></Col>
                    <Col><ServiceCard servData={loadServiceData(num+1)}/></Col>
                    <Col><ServiceCard servData={loadServiceData(num+2)}/></Col>
                    <Col><ServiceCard servData={loadServiceData(num+3)}/></Col>
                </Row>
            );
            num += 4;
        }
        if(remains == 3){
            rows.push(
                <Row className="mt-5">
                    <Col><ServiceCard servData={loadServiceData(num)}/></Col>
                    <Col><ServiceCard servData={loadServiceData(num+1)}/></Col>
                    <Col><ServiceCard servData={loadServiceData(num+2)}/></Col>
                    <Col></Col>
                </Row>
            );
        }
        else if(remains == 2){
            rows.push(
                <Row className="mt-5">
                    <Col><ServiceCard servData={loadServiceData(num)}/></Col>
                    <Col><ServiceCard servData={loadServiceData(num+1)}/></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            );
        }
        else if(remains == 1){
            rows.push(
                <Row className="mt-5">
                    <Col><ServiceCard servData={loadServiceData(num)}/></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            );
        }
        return rows;   
    }

    return (
        <div>
            <NavigationBar/>
            <Container fluid>
                <Row className="mt-5 text-center">
                    <h4>You are currently browsing the market place as:</h4>
                </Row>
                <Row>
                    <div class="d-flex justify-content-center">
                    <Dropdown>
                        <Dropdown.Toggle className="org-dropdown-btn">
                            <Row>
                                <Col xs={2}>
                                <Image
                                    roundedCircle
                                    src={require("../placeholderProfilePicture.png")}
                                    height="55"
                                />
                                </Col>
                                <Col lg={9} className="mt-1">
                                    <strong>Name of the Organization</strong>
                                    <br/>
                                    <p>Name of the campaign</p>
                                </Col>
                                <Col className="mt-3">
                                    <i class="fa-solid fa-circle-chevron-down fa-md"></i>
                                </Col>
                            </Row>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="org-dropdown-btn-menu">
                            <Dropdown.Item><strong>Name of the Organization</strong></Dropdown.Item>
                            <Dropdown.Item>Name of your campaign #1</Dropdown.Item>
                            <Dropdown.Item>Name of your campaign #2</Dropdown.Item>
                            <Dropdown.Divider></Dropdown.Divider>
                            <Dropdown.Item><strong>Name of the Organization</strong></Dropdown.Item>
                            <Dropdown.Item>Name of your campaign #1</Dropdown.Item>
                            <Dropdown.Item>Name of your campaign #2</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                </Row>
                <Row className="justify-content-center">
                
                <hr className="mt-5"></hr>
                </Row>
                <Container className="mt-3">
            <Pagination className="custom-pagination justify-content-center">
                <Pagination.Item active={activePage === 1} onClick={() => handlePageChange(1)} className="org-navbar-btn">
                    All
                </Pagination.Item>
                <Pagination.Item active={activePage === 2} onClick={() => handlePageChange(2)}>
                    Campaigns
                </Pagination.Item>
                <Pagination.Item active={activePage === 3} onClick={() => handlePageChange(3)}>
                    Solutions
                </Pagination.Item>
                <Pagination.Item active={activePage === 4} onClick={() => handlePageChange(4)}>
                    Services
                </Pagination.Item>
                </Pagination>
                {renderActivePage()}
            </Container>
                <Row>
                </Row>
                <Row className="mt-3">
                    <Col sm={2}></Col>
                    <Col lg={8}>
                        <InputGroup>
                        <Button
                            className='search-btn'
                        >
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </Button>
                            <Form.Control
                                type="text"
                                placeholder="Search Bar"
                            />
                        </InputGroup>
                    </Col>
                    <Col sm={2}>
                        <Button
                            className="filters-btn"
                            text-align="center"
                            href='/market-place/filters'
                        >
                            Filters <i class="fa-solid fa-filter"></i>
                        </Button>
                    </Col>
                </Row>
                <div style={{marginLeft: 100, marginRight: 100}}>
                <Row className="mt-5">
                    <Col lg={2}>
                        <strong><h4>Campaigns</h4></strong>
                    </Col>
                    <Col md={8}>
                        <hr></hr>
                    </Col>
                    <Col sm={2}>
                    <Button
                        className="browse-more-btn"
                    >
                        Browse more
                    </Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    {loadCards()}
                </Row>
                <Row className="mt-3 text-center">
                    <Col text-center>
                    <Button
                        variant="secondary"
                    >
                        Load more campaigns
                    </Button>
                    </Col>
            </Row>
                <Row className="mt-5">
                    <Col lg={2}>
                        <strong><h4>Solutions</h4></strong>
                    </Col>
                    <Col md={8}>
                        <hr></hr>
                    </Col>
                    <Col sm={2}>
                    <Button
                        className='browse-more-btn'
                    >
                        Browse more
                    </Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    {loadSolutionCards()}
                </Row>
                <Row className="mt-3 text-center">
                    <Col text-center>
                    <Button
                        variant="secondary"
                    >
                        Load more solutions
                    </Button>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={3}>
                        <strong><h4>Transformation Services</h4></strong>
                    </Col>
                    <Col md={7}>
                        <hr></hr>
                    </Col>
                    <Col sm={2}>
                    <Button
                        className='browse-more-btn'
                    >
                        Browse more
                    </Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    {loadServiceCards()}
                </Row>
                <Row className="mt-3 text-center">
                    <Col text-center>
                    <Button
                        variant="secondary"
                    >
                        Load more services
                    </Button>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    )
}