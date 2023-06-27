import { NavigationBar } from '../NavigationBar';
import Container from  'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import '../videoPlaceHolder.png';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './CampaignPage.css';
import { CampaignOverview } from './CampaignOverview';
import { CampaignParticipants } from './CampaignParticipants';
import { CampaignUpdates } from './CampaignUpdates';
import { CampaignDiscussion } from './CampaignDiscussion';
import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const CampaignPage = () => {
    const [campData, setCampData] = useState([]);
    
    const [activePage, setActivePage] = useState(1);
    const totalPages = 4;
    const { id } = useParams();

    useEffect(() => {
        console.log("id: " + id);
        fetch("http://localhost:9000/campaign-page", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({id: id})
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.data) {
                    setCampData(data.data);
                }
                else {
                    setCampData([]);
                    console.log("campData is empty");
                }
            });
    }, []);
  
    const handlePageChange = (page) => {
        setActivePage(page);
      };
    
    const renderActivePage = () => {
        switch (activePage) {
          case 1:
            return <div>
                <CampaignOverview campData={campData}/>
            </div>
          case 2:
            return <div>
                <CampaignParticipants campData={campData}/>
            </div>;
          case 3:
            return <div>
                <CampaignUpdates campData={campData}/>
            </div>
          case 4:
            return <div>
                <CampaignDiscussion campData={campData}/>
            </div>
          default:
            return <div>
                <CampaignOverview campData={campData}/>
            </div>
        }
      };
    
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
                        //justifyContent: 'center',
                        paddingTop: '80px',
                    }}
                >
                    <Col
                    md={7}
                        style={{
                            paddingRight: '0px',
                            paddingLeft: '200px'
                        }}
                    >
                <Card
                    style={{
                        height: '400px',
                        width: '600px',
                        borderTopRightRadius: '0px',
                        borderBottomRightRadius: '0px',
                        
                    }}
                >
                    <Card.Title
                        style={{
                            padding: '30px',
                            paddingBottom: '0px',
                        }}
                    >
                        <h3>{campData.name}</h3>
                    </Card.Title>
                    <Card.Body>
                        <Row
                            style={{
                                paddingBottom: '0px',
                            }}
                        >
                            <p>Campaign contributes to these SDG challenges: {campData.challenge}</p>
                        </Row>
                        <Row>
                            <p><strong>Campaign Phase:</strong></p>
                        </Row>
                        <Row>
                            <Col>
                                <Badge
                                    bg='warning'
                                >
                                    {campData.phase}
                                </Badge>
                            </Col>
                            <Col>
                                <Button
                                    className="custom-links-btn"
                                >
                                    <i class="fa-solid fa-up-right-from-square"></i>
                                    learn more about campaign status
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <strong>Deadline:</strong>
                        </Row>
                        <Row>
                            <p>Arbitrary date</p>
                        </Row>
                    </Card.Body>
                </Card>
                </Col>
                <Col
                    sm={5}
                    style={{
                        paddingLeft: '0px',
                        paddingRight: '200px',
                    }}
                >
                    <Card
                        style={{
                            height: '400px',
                            width: '400px',
                            paddingLeft: '0px',
                            background: 'linear-gradient(to bottom, lightgray, white)',
                            borderTopLeftRadius: '0px',
                            borderBottomLeftRadius: '0px',
                            borderLeft: '0px'
                        }}
                    >
                        <Card.Title
                            style={{
                                paddingTop: '20px',
                                paddingLeft: '20px',
                                paddingBottom: '0px',
                            }}
                        >
                            <h6>Check how this campaign matches your goals</h6>
                        </Card.Title>
                        <Card.Body>
                            <Row
                                style={{
                                    textAlign: 'center',
                                    padding: '15px'
                                }}
                            >
                                <strong
                                    style={{color: 'green'}}
                                >
                                    Overall matching: 96%
                                </strong>
                            </Row>
                            <Row
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                <Col
                                    style={{
                                        color: 'green',
                                    }}
                                >
                                    98%
                                </Col>
                                <Col
                                    style={{
                                        color: 'green',
                                    }}
                                >
                                    95%
                                </Col>
                                <Col
                                    style={{
                                        color: 'green',
                                    }}
                                >
                                    95%
                                </Col>
                            </Row>
                            <Row
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                <Col>
                                    relevance
                                </Col>
                                <Col>
                                    complementary
                                </Col>
                                <Col>
                                    community rating
                                </Col>
                            </Row>
                            <Row
                                style={{
                                    textAlign: 'end',
                                    padding: '20px',
                                    paddingRight: '0px'
                                }}
                            >
                                <Col>
                                <Button
                                    className="custom-links-btn"
                                    size="sm"
                                >
                                    <i class="fa-solid fa-up-right-from-square"></i>
                                    detailed matching information
                                </Button>
                                </Col>
                            </Row>
                            <Row
                                style={{
                                    textAlign: 'center',
                                    paddingBottom: '20px',
                                }}
                            >
                                <Col>
                                    <Button
                                        className="custom-btn"
                                    >
                                        Participate in this campaign
                                    </Button>
                                </Col>
                            </Row>
                            <Row
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                <Col>
                                    <Button
                                        className="custom-btn"
                                        onClick={console.log(id)}
                                    >
                                        Follow campaign
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
                <Container className="mt-3">
          <Pagination className="custom-pagination justify-content-center">
            <Pagination.Item
              active={activePage === 1}
              onClick={() => handlePageChange(1)}
              className="org-navbar-btn"
            >
              Campaign Overview
            </Pagination.Item>
            <Pagination.Item
              active={activePage === 2}
              onClick={() => handlePageChange(2)}
            >
              Participants
            </Pagination.Item>
            <Pagination.Item
              active={activePage === 3}
              onClick={() => handlePageChange(3)}
            >
                Campaign Updates
            </Pagination.Item>
            <Pagination.Item
              active={activePage === 4}
              onClick={() => handlePageChange(4)}
            >
                Discussion
            </Pagination.Item>
            
          </Pagination>
          {renderActivePage()}
        </Container>
            </Container>
        </div>
    )
}