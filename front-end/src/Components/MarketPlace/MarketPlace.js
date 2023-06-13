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
import '@fortawesome/fontawesome-free/css/all.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';


export const MarketPlace = () => {
    // initialize localStorage filter variables
    if (localStorage.getItem('orgFilter') === null)
        localStorage.setItem('orgFilter', '');
    // if (localStorage.getItem('campaignFilter') === null)
    //     localStorage.setItem('campaignFilter', '');
    // if (localStorage.getItem('roleFilter') === null)
    //     localStorage.setItem('roleFilter', '');
    // if (localStorage.getItem('statusFilter') === null)
    //     localStorage.setItem('statusFilter', '');
    // if (localStorage.getItem('regDateFilter') === null)
    //     localStorage.setItem('regDateFilter', '');
    // if (localStorage.getItem('tagsFilter') === null)
    //     localStorage.setItem('tagsFilter', '[]');
    
    const [ campaignData, setCampaignData ] = useState([]);
    
    useEffect(() => {
        console.log(`orgFilter${localStorage.getItem('orgFilter')}orgFilter`);
        fetch("http://localhost:9000/market-place", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                orgFilter: localStorage.getItem('orgFilter'),
                // campaignFilter: localStorage.getItem('campaignFilter'),
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
    
    return (
        <div>
            <NavigationBar/>
            <Container fluid>
                <Row className="mt-5 text-center">
                    <h4>You are currently browsing the market place as:</h4>
                </Row>
                <Row className="justify-content-center">
                <Card
                    style={{height: '75px', width: '500px'}}
                >
                    <Card.Title
                        className=""
                    >
                        <Row>
                            <Col xs={2} className="mt-1">
                            <Image
                            roundedCircle
                            src={require("../placeholderProfilePicture.png")}
                            height="65"
                            
                            />
                            </Col>
                            <Col className="mt-2">
                                <strong>Name of Organization</strong>
                                <br></br>
                                <p>Name of Campaign</p>
                            </Col>
                        </Row>
                    </Card.Title>
                </Card>
                </Row>
                <Navbar className="marketPlaceNav">
                    <Navbar.Collapse>
                        <Nav className="mx-auto">
                            <Nav.Link>All</Nav.Link>
                            <Nav.Link>Campaigns</Nav.Link>
                            <Nav.Link>Solutions</Nav.Link>
                            <Nav.Link>Services</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
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
                    {loadCards()}
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
                    {loadCards()}
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
            </Container>
        </div>
    )
}