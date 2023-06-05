import { NavigationBar } from '../NavigationBar';
import { CreateCampaignNavbar  } from './CreateCampaignNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { InputTags } from 'react-bootstrap-tagsinput';
import "react-bootstrap-tagsinput/dist/index.css";

export const CreateCampaignS1 = () => {
    if (localStorage.getItem('campaignName') === null) 
        localStorage.setItem('campaignName', '');
    if (localStorage.getItem('campaignTags') === null)
        localStorage.setItem('campaignTags', '[]');
    if (localStorage.getItem('videoLink') === null)
        localStorage.setItem('videoLink', '');
    if (localStorage.getItem('step1') === 'null')
        localStorage.setItem('step1', 'false');

    const [campaignName, setCampaignName] = useState(localStorage.getItem('campaignName'));
    const [campaignTags, setCampaignTags] = useState(JSON.parse(localStorage.getItem('campaignTags')));
    const [videoLink, setVideoLink] = useState(localStorage.getItem('videoLink'));
    
    useEffect(() => {
        localStorage.setItem('campaignName', campaignName);
    }, [campaignName]);

    useEffect(() => {
        localStorage.setItem('campaignTags', JSON.stringify(campaignTags));
    }, [campaignTags]);

    useEffect(() => {
        localStorage.setItem('videoLink', videoLink);
    }, [videoLink]);

    useEffect(() => {
        if ((campaignName.length == 0) || (campaignTags.length == 0))
            return localStorage.setItem('step1', false);
        localStorage.setItem('step1', true);
    }, [campaignName, campaignTags]);

    const displayTags = () => {
        var list = "Tags: ";
        for (let i = 0; i < campaignTags.length; i++) {
            list += campaignTags[i];
            if (i != campaignTags.length - 1) {
                list += ", ";
            }
        }
        return list;
    }

    return (
        <div>
            <NavigationBar />
            <CreateCampaignNavbar />
            <Container>
                <Row className="mt-5">
                    <h2>Step 1: Provide basic information about the campaign</h2>
                </Row>
                <Row>
                    <Card className="mt-3">
                        <Card.Title className="mt-3">
                            Mandatory fields
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Form>
                                <FormGroup className="mb-3">
                                    <Form.Label>Campaign name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Campaign name" 
                                        value={campaignName}
                                        onChange={(e) => setCampaignName(e.target.value)}
                                    /><Form.Text className="text-muted">Explainer text about the role of the campaign name. Do's and Dont's</Form.Text>
                                </FormGroup>
                                
                                <Form.Label>Campaign tags</Form.Label>
                                <div className="input-group">
                                    <InputTags values={campaignTags} placeholder='New Tag' onTags={(value) => {setCampaignTags(value.values)}} />
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        data-testid="button-clearAll"
                                        onClick={(e) => {e.preventDefault();setCampaignTags([]);}}
                                    >Delete all</button>
                                </div>
                                <hr />
                                {displayTags()}

                            </Form>
                    </Card.Body>
                    </Card>
                </Row>
                <Row className="mt-5">
                    <Card>
                        <Card.Title className="mt-3">
                            Optional Fields
                            <hr></hr>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>Fields below are not necessary to fill, but they surely improve your campaign's recognition on the platform.</Card.Text>
                            <Card.Text>
                                <Form>
                                    <FormGroup>
                                        <Form.Label>Upload promotional video</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Video link" 
                                            value={videoLink}
                                            onChange={(e) => setVideoLink(e.target.value)}
                                        />
                                        <Form.Text className="text-muted">
                                            You can upload a video to promote your campaign
                                        </Form.Text>
                                    </FormGroup>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                </Row>

            </Container>
        </div>
    )
}