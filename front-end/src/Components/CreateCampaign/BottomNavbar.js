import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CreateCampaignNavbar.css'


const BottomNavbar = ({ currentPage }) => {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <Navbar fixed="bottom">
      <Nav className="bottom-campaign-create-navbar">
        <Nav.Item>
          {prevPage > 0 &&(
            <Nav.Link
            className="bottom-nav-btn" 
            as={Link} 
            to={`/create-campaign-step-${prevPage}`}>
                <i class="fa-solid fa-arrow-left-long fa-2xl"></i>
            </Nav.Link>
          )}
        </Nav.Item>
        </Nav>
        <Nav className="ms-auto">
        <Nav.Item>
            {nextPage < 6 && (
          <Nav.Link
          className="bottom-nav-btn"
          as={Link} 
          to={`/create-campaign-step-${nextPage}`}>
            <i class="fa-solid fa-arrow-right-long fa-2xl"></i>
          </Nav.Link>
            )}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
  
};

export default BottomNavbar; // Export the component as default


