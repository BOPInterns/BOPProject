import { NavigationBar } from '../NavigationBar';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Dropdown from'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from'react-bootstrap/Row';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import React, { useState, useRef } from 'react';
import Image from 'react-bootstrap/image'

export const CreateCampaignS1 = () => {
    return (
        <div>
            <NavigationBar />
            <Nav className="justify-content-left">
            <DropdownButton
                title="Previous Steps"
            >
                <Dropdown.Item href="create-campaign-introduction">Introduction</Dropdown.Item>
            </DropdownButton>
            </Nav>
            <Nav className="justify-content-end" sticky="top">
                <DropdownButton
                    title="Next Steps"
                >
                    <Dropdown.Item href="create-campaign-step-2">
                        Step 2
                    </Dropdown.Item>
                    <Dropdown.Item href="create-campaign-step-3">
                        Step 3
                    </Dropdown.Item>
                    <Dropdown.Item href="create-campaign-step-4">
                        Step 4
                    </Dropdown.Item>
                    <Dropdown.Item href="create-campaign-step-5">
                        Step 5
                    </Dropdown.Item>
                    <Dropdown.Item disabled>
                        Step 6
                    </Dropdown.Item>
                </DropdownButton>
            </Nav>
            <Container>
                <Row className="justify-content-center">
                    <h2>Step 1: Provide basic information about the campaign</h2>
                </Row>
                <Row>
                    <Form>
                        <FormGroup className="mb-3">
                            <Form.Label>Campaign name</Form.Label>
                            <Form.Control type="text" placeholder="Campaign name" />
                            <Form.Text className="text-muted">Explainer text about the role of the campaign name. Do's and Dont's</Form.Text>
                        </FormGroup>
                        <FormGroup className="mb-3">
                        <Form.Label>Campaign tags</Form.Label>
                            <Form.Control type="text" placeholder="tags" />
                            <Form.Text className="text-muted">Add tags down here that you can click to select</Form.Text>
                        </FormGroup>
                    </Form>
                </Row>
                <Row>
                    <Card>
                        <Card.Title className="mt-3" outline="false">Optional Fields</Card.Title>
                        <Card.Body>
                            <Card.Text>Fields below arenot necessary to fill, but they surely improve your campaigns recognition on the platform</Card.Text>
                            <Card.Text>
                                <Button>
                                    <Image src="./uploadPromoVideo.png" fluid></Image>
                                </Button>
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                </Row>
            </Container>
        </div>
    )
}