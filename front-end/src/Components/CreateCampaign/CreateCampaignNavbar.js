import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CreateCampaignNavbar.css';
import { navigation , route } from 'react';
import Button from 'react-bootstrap/Button';

export const CreateCampaignNavbar = () => {
    const handleNext = () => {
        
    }
    return (
        <div>
            <Nav
                justify variant="tabs"
                defaultActiveKey="/create-campagin-introduction"
                id="CreateCampaignTabs"
            >
                <Nav.Item>
                    <Nav.Link href="/create-campaign-step-1">
                        Step 1
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/create-campaign-step-2">
                        Step 2
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/create-campaign-step-3">
                        Step 3
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/create-campaign-step-4">
                        Step 4
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/create-campaign-step-5">
                        Step 5
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Navbar
                fixed="bottom"
            >
                <Nav className="">
                    <Button
                        variant='outline-secondary'
                    >Back</Button>
                </Nav>
                <Nav className='ms-auto'>
                    <Button variant='outline-secondary' onClick={() => handleNext}>Next</Button>
                </Nav>
            </Navbar>
        </div>
    )
}