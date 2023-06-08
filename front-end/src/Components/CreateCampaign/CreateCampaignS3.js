import { NavigationBar } from '../NavigationBar';
import { CreateCampaignNavbar } from './CreateCampaignNavbar';
import Row from 'react-bootstrap/Row';
import Container from'react-bootstrap/Container';
import Card from'react-bootstrap/Card';
import FormGroup from'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form';
import { InputTags } from 'react-bootstrap-tagsinput';
import "react-bootstrap-tagsinput/dist/index.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { Step3MandatoryFields } from './Step3Mandatory';
import { Step3OptionalFields } from './Step3Optional';

export const CreateCampaignS3 = () => {
    return(
        <div>
            <NavigationBar />
            <CreateCampaignNavbar />
            <Container>
                <Row className="mt-5">
                    <h2>Step 3: Location & Language</h2>
                </Row>
                <Row className="mt-3">
                    <Step3MandatoryFields/>
                </Row>
                <Row className="mt-5 mb-5">
                    <Step3OptionalFields/>
                </Row>
            </Container>
        </div>
    )
}