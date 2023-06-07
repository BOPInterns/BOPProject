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
import { buttonStyle, hoverStyle } from '../styles'

export const CampaignCenter = () => {
    const auth = window.localStorage.getItem('loginState');
    const [ campaignData, setCampaignData ] = useState([]);
    
    
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
                    <Column><CampaignCard campData={loadData(num)}/></Column>
                    <Column><CampaignCard campData={loadData(num+1)}/></Column>
                    <Column><CampaignCard campData={loadData(num+2)}/></Column>
                    <Column><CampaignCard campData={loadData(num+3)}/></Column>
                </Row>
            );
            num += 4;
        }
        if(remains == 3){
            rows.push(
                <Row>
                    <Column><CampaignCard campData={loadData(num)}/></Column>
                    <Column><CampaignCard campData={loadData(num+1)}/></Column>
                    <Column><CampaignCard campData={loadData(num+2)}/></Column>
                    <Column></Column>
                </Row>
            );
        }
        else if(remains == 2){
            rows.push(
                <Row>
                    <Column><CampaignCard campData={loadData(num)}/></Column>
                    <Column><CampaignCard campData={loadData(num+1)}/></Column>
                    <Column></Column>
                    <Column></Column>
                </Row>
            );
        }
        else if(remains == 1){
            rows.push(
                <Row>
                    <Column><CampaignCard campData={loadData(num)}/></Column>
                    <Column></Column>
                    <Column></Column>
                    <Column></Column>
                </Row>
            );
        }
        return rows;   
    }

    return (
        <>
            <NavigationBar></NavigationBar>
            
            <Container>
                <hr></hr>
                <Row className="justify-content-center">
                    You are currently browsing the marketplace as: 
                </Row>
                <Row className="">
                    
                    <DropdownButton
                        title="Current Organizaiton"
                        id="CurrentOrganizationDropdown"
                        className="text-center"
                    >
                    { auth ? <>
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
                    </> : 
                    <>
                    <Dropdown.Divider/>
                    <Dropdown.Item className='text-center' href="/login">No user found<br></br>Sign in here!</Dropdown.Item>
                    <Dropdown.Divider/>
                    </>
                    }
                    </DropdownButton>
                    <hr className="mt-4"></hr>
                </Row>
                <Row className="">
                    <Col>
                        <h3>Campaigns</h3>
                    </Col>
                    <Col>
                    <div className="text-end">
                <Button href="/create-campaign-introduction">Create a Campaign</Button>
                </div>                     
                    </Col>
                    <hr className="mt-3"></hr>
                </Row>
                {loadCards()}
                <Row>
                    <Col>
                    <Button 
                    variant="outline-secondary" 
                    size="sm"
                    >Load more Campaigns</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}