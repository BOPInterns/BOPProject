import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BottomNavbar = ({ currentPage }) => {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <Navbar fixed="bottom">
      <Nav className="">
        <Nav.Item>
          {prevPage > 0 &&(
            <Nav.Link as={Link} to={`/create-campaign-step-${prevPage}`}>
                Back
            </Nav.Link>
          )}
        </Nav.Item>
        </Nav>
        <Nav className="ms-auto">
        <Nav.Item>
            {nextPage < 6 && (
          <Nav.Link 
          as={Link} 
          to={`/create-campaign-step-${nextPage}`}>
            <p>Forward</p>
          </Nav.Link>
            )}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
  
};

export default BottomNavbar; // Export the component as default


