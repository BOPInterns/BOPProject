import { NavigationBar } from '../NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CampaignCard } from './CampaignCard.js';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

export const CampaignCenter = () => {
    const [campaignData, setCampaignData] = useState([]);


    useEffect(() => {
        fetch("http://localhost:9000/get-campaign-data", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setCampaignData(data.data);
            });
    }, []);

    const loadData = (i) => {
        return campaignData[i]
    }

    return (
        <>
            <NavigationBar></NavigationBar>
            
            <Container>
                <Row className="justify-content-center">
                    You are currently browsing the marketplace as: 
                </Row>
                <Button href="/create-campaign-introduction">Create a Campaign</Button>
                <Row className="">
                    <DropdownButton
                        title="Current Organizaiton"
                        id="CurrentOrganizationDropdown"
                        className="text-center"
                    >
                    <Form.Control 
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Type to search..."
                        /* Need to program search functionality*/
                    />
                    <Dropdown.Item>
                        Name of Organization #1
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="/register">
                        Name of Campagin #1
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Name of Campaign #2
                    </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item>
                        Name of Organization #2
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="/register">
                        Name of Campagin #1
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Name of Campaign #2
                    </Dropdown.Item>
                    </DropdownButton>
                </Row>
                <Row className="justify-content-left">
                    Campaigns
                </Row>
                <Row>
                    <Column>
                        <CampaignCard campData={loadData(0)}/>
                    </Column>
                    <Column>
                        <CampaignCard campData={loadData(1)}/>
                    </Column>
                    <Column>
                        <CampaignCard/>
                    </Column>
                    <Column>
                        <CampaignCard/>
                    </Column>
                </Row>
                <Row>
                <Column>
                    <CampaignCard/>
                    </Column>
                    <Column>
                    <CampaignCard/>
                    </Column>
                    <Column>
                    <CampaignCard/>
                    </Column>
                    <Column>
                    <CampaignCard/>
                    </Column>
                </Row>
                <Row>
                    <Col>
                    <Button variant="outline-secondary" size="sm">Load more Campaigns</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}