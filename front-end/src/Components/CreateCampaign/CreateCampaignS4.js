import { NavigationBar } from '../NavigationBar';
import { CreateCampaignNavbar } from './CreateCampaignNavbar';
import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import Card from'react-bootstrap/Card';
import Form from'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { Step4MandatoryFields } from './Step4Mandatory';

export const CreateCampaignS4 = () => {


    //also for testing
    // useEffect(() => {
    //     if(files != ''){
    //         //uplaodFile(); uncomment this line for it to work
    //     }

    // }, [files]);


    //temporary function to test if file upload works right
    // const uplaodFile = () => {
    //     fetch("http://localhost:9000/upload-file",{
    //         method: "POST",
    //         crossDomain: true,
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //             "Access-Control-Allow-Origin": "*",
    //         },
    //         body: JSON.stringify({
    //             fileData: files
    //         })
    //     }).then((res) => res.json()).then((data) => console.log(data))
    // }

    return(
        <div>
            <NavigationBar />
            <CreateCampaignNavbar />
            <Container>
                <Row className="mt-5">
                    <h2>Step 4: Additional materials and attachments</h2>
                </Row>
                <Row className="mt-3">
                    <Step4MandatoryFields/>
                </Row>
            </Container>
        </div>
    );
};