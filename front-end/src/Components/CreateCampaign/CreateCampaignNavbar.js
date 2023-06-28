import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { navigation , route } from 'react';
import Button from 'react-bootstrap/Button';
import BottomNavbar from './BottomNavbar';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './CreateCampaignNavbar.css'
import Pagination from 'react-bootstrap/Pagination';
import { CreateCampaignS1 } from './CreateCampaignS1';
import { CreateCampaignS2 } from './CreateCampaignS2';
import { CreateCampaignS3 } from './CreateCampaignS3';
import { CreateCampaignS4 } from './CreateCampaignS4';
import { CreateCampaignS5 } from './CreateCampaignS5';
import Container from 'react-bootstrap/Container';

export const CreateCampaignNavbar = () => {
        
    const location = useLocation();
    const currentPage = Number(location.pathname.slice(-1));
    
    // const renderActivePage = () => {
    //     switch (activePage) {
    //       case 1:
    //         return <div>
    //             <CreateCampaignS1/>
    //         </div>
    //       case 2:
    //         return <div>
    //             <CreateCampaignS2/>
    //         </div>;
    //       case 3:
    //         return <div>
    //             <CreateCampaignS3/>
    //         </div>
    //       case 4:
    //         return <div>
    //             <CreateCampaignS4/>
    //         </div>
    //       case 5:
    //         return <div>
    //             <CreateCampaignS/>
    //         </div>  
    //       default:
    //         return <div>
    //             <CreateCampaignS1/>
    //         </div>
    //     }
    //   };
        
    return (
        <div>
        <Container
            style={{
                paddingTop: '40px',
            }}
        >
            <Navbar
                className="create-campaign-navbar"
            >
                <Navbar.Collapse
                    className='create-campaign-navbar-collapse'
                >
                    <Nav.Link
                        as={NavLink}
                        activeClassName="active"
                        className='create-campaign-navbar-nav-link'
                        to='/create-campaign-step-1'
                    >
                        Step 1
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        activeClassName="active"
                        className='create-campaign-navbar-nav-link'
                        to='/create-campaign-step-2'
                    >
                        Step 2
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        activeClassName="active"
                        className='create-campaign-navbar-nav-link'
                        to='/create-campaign-step-3'
                    >
                        Step 3
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        activeClassName="active"
                        className='create-campaign-navbar-nav-link'
                        to='/create-campaign-step-4'
                    >
                        Step 4
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        activeClassName="active"
                        className='create-campaign-navbar-nav-link'
                        to='/create-campaign-step-5'
                    >
                        Step 5
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </Container>
            <BottomNavbar currentPage={currentPage}/>
        </div>
    )
}