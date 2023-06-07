import React from 'react';
import { NavigationBar } from '../NavigationBar';
import { CreateCampaignNavbar  } from './CreateCampaignNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import FormGroup from 'react-bootstrap/esm/FormGroup';
// import Form from 'react-bootstrap/Form';
// import Card from 'react-bootstrap/Card';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { InputTags } from 'react-bootstrap-tagsinput';
import { Step1MandatoryFields } from './Step1Mandatory';
import "react-bootstrap-tagsinput/dist/index.css";
import { Step1OptionalFields } from './Step1Optional';
import { BottomNavbar } from './BottomNavbar';

export const CreateCampaignS1 = () => {
    return (
        <div>
            <NavigationBar />
            <CreateCampaignNavbar />
            <Container>
                <Row className="mt-5">
                    <h2>Step 1: Provide basic information about the campaign</h2>
                </Row>
                <Row className="mt-3">
                    <Step1MandatoryFields/>
                </Row>
                <Row className="mt-5">
                    <Step1OptionalFields/>
                </Row>
            </Container>
        </div>
    )
}