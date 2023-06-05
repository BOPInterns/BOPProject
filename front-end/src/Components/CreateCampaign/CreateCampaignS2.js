import { NavigationBar } from '../NavigationBar';
import { CreateCampaignNavbar } from './CreateCampaignNavbar';
import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import { InputTags } from 'react-bootstrap-tagsinput';
import "react-bootstrap-tagsinput/dist/index.css";
import { Step2MandatoryFields } from './Step2Mandatory';
import { Step2OptionalFields } from './Step2Optional';


export const CreateCampaignS2 = () => {
 
    return(
        <div>
            <NavigationBar />
            <CreateCampaignNavbar />
            <Container>
                <Row className="mt-5">
                    <h2>Step 2: Provide detailed information about the campagin</h2>
                </Row>
                <Row>
                    <Step2MandatoryFields/>
                </Row>
                <Row>
                    <Step2OptionalFields/>  
                </Row>
            </Container>
        </div>
    )
}