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

export const CreateCampaignS2 = () => {
    return(
        <div>
            <NavigationBar />
            <Nav className="justify-content-left" sticky="top">
                <DropdownButton
                    title="Previous Steps"
                >
                    <Dropdown.Item href="create-campaign-step-1">
                        Step 1
                    </Dropdown.Item>
                </DropdownButton>
            </Nav>
            <Nav className="justify-content-end" sticky="top">
                <DropdownButton
                    title="Next Steps"
                >
                    <Dropdown.Item href="create-campaign-step-2">
                        Step 3
                    </Dropdown.Item>
                    <Dropdown.Item href="create-campaign-step-3">
                        Step 4
                    </Dropdown.Item>
                    <Dropdown.Item href="create-campaign-step-4">
                        Step 5
                    </Dropdown.Item>
                    <Dropdown.Item disabled>
                        Step 6
                    </Dropdown.Item>
                </DropdownButton>
            </Nav>
        </div>
    )
}