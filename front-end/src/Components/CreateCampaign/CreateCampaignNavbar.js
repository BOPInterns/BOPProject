import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { navigation , route } from 'react';
import Button from 'react-bootstrap/Button';
import BottomNavbar from './BottomNavbar';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const CreateCampaignNavbar = () => {
        
    const location = useLocation();
    const currentPage = Number(location.pathname.slice(-1));
        
    return (
        <div>
            <Nav
                justify variant="pills"
                id="CreateCampaignTabs"
            >
                <Nav.Item>
                    <Nav.Link 
                    as={NavLink}
                    exact
                    to="/create-campaign-step-1"
                    activeStyle={{
                      backgroundColor: '#f8f9fa',
                      color: '#212529',
                    }}
                    href="/create-campaign-step-1">
                        Step 1
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                    as={NavLink}
                    exact
                    to="/create-campaign-step-2"
                    activeStyle={{
                      backgroundColor: '#f8f9fa',
                      color: '#212529',
                    }}
                    href="/create-campaign-step-2">
                        Step 2
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                    as={NavLink}
                    exact
                    to="/create-campaign-step-3"
                    activeStyle={{
                      backgroundColor: '#f8f9fa',
                      color: '#212529',
                    }}
                    href="/create-campaign-step-3">
                        Step 3
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                    as={NavLink}
                    exact
                    to="/create-campaign-step-4"
                    activeStyle={{
                      backgroundColor: '#f8f9fa',
                      color: '#212529',
                    }}
                    href="/create-campaign-step-4">
                        Step 4
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                    as={NavLink}
                    exact
                    to="/create-campaign-step-5"
                    activeStyle={{
                      backgroundColor: '#f8f9fa',
                      color: '#212529',
                    }}
                    href="/create-campaign-step-5">
                        Step 5
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <BottomNavbar currentPage={currentPage}/>
        </div>
    )
}