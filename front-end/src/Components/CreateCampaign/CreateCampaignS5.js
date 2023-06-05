import { NavigationBar } from '../NavigationBar';
import { CreateCampaignNavbar } from './CreateCampaignNavbar';
import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import ListGroup from'react-bootstrap/ListGroup';
import Badge from'react-bootstrap/Badge';
import Button from'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import React from 'react';
import { Step1Suggestions } from './Step1Suggestions';
import { CreateCampaignS1 } from './CreateCampaignS1';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Step2Suggestions } from './Step2Suggestions';
import { CreateCampaignS3 } from './CreateCampaignS3';
import { CreateCampaignS4 } from './CreateCampaignS4';
// import { useState } from 'react';

export const CreateCampaignS5 = () => {
    const [show, setShow] = useState(false);
    const step1 = JSON.parse(localStorage.getItem('step1'));
    const step2 = JSON.parse(localStorage.getItem('step2'));
    const step3 = JSON.parse(localStorage.getItem('step3'));
    const step4 = JSON.parse(localStorage.getItem('step4'));
    
    const checkSteps = () => {
        if(step1 === true && step2 === true && step3 === true && step4 === true) {
            Navigate('/create-campaign-step-6')
        }   else {
            setShow(true);
        }
    }
    
    return(
        <div>
            <NavigationBar />
            <CreateCampaignNavbar />
            <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Looks like you're missing something!</Alert.Heading>
                <p>It looks like you're missing some important information. Be sure to fill out all mandatory fields while creating a campaign. You won't be able to continue until all mandatory fields are filled out.</p>
                <hr></hr>
                <div className="d-flex justify-content-end">
                    <Button href="/create-campaign-step-6">Dev cheats</Button>
                </div>
            </Alert>
            <Container>
                <Row className="mt-5">
                    <h2>Step 5: Suggestions to filled form</h2>
                </Row>
                <Row className="mt-3">
                    <ListGroup>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Step 1</div>
                            Provide basic information about the campagin
                        </div>
                        { step1 ? <>
                        <Badge bg="success">
                        Good!
                        </Badge>
                        </>
                        : <Badge bg="danger">
                        Suggestions below
                        </Badge>
                        }
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Step 2</div>
                            Provide detailed information about the campaign
                        </div>
                        { step2 ? 
                        <Badge bg="success">
                        Good!
                        </Badge>
                        : <Badge bg="danger">
                        Suggestions below
                        </Badge>
                        }
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Step 3</div>
                            Location and language
                        </div>
                        { step3 ? 
                        <Badge bg="success">
                        Good!
                        </Badge>
                        : <Badge bg="danger">
                        Suggestions below
                        </Badge>
                        }
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Step 4</div>
                            Additional materials and attachments
                        </div>
                        { step4 ? 
                        <Badge bg="success">
                        Good!
                        </Badge>
                        : <Badge bg="danger">
                        Suggestions below
                        </Badge>
                        }
                    </ListGroup.Item>
                    </ListGroup>
                </Row>
                <Container>
                    { step1 ? <></> : <Step1Suggestions/>}
                    { step2 ? <></> : <Step2Suggestions/>}
                    {/* { step3 ? <></> : <CreateCampaignS3/>}
                    { step4 ? <></> : <CreateCampaignS4/>} */}
                </Container>
                <Container className="mt-4 mb-5">
                    <Row className="justify-content-md-center">
                        <hr></hr>
                        <Button onClick={() => checkSteps()} classId="submit" size="lg" variant="success">Submit!</Button>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}