import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { OrgCampaignOwner } from './OrgCampaignOwner';
import { OrgCampaignParticipant } from './OrgCampaignParticipant';
import Pagination from 'react-bootstrap/Pagination';
import React, { useState } from 'react';

export const OrgCampaignPage = () => {
    
    const [ activePage, setActivePage ] = useState(1);
    const totalPages = 2;
    
    const handlePageChange = (page) => {
        setActivePage(page);
    };
    
    const renderActivePage = () => {
        switch (activePage) {
            case 1:
                return <OrgCampaignOwner/>;
            case 2:
                return <OrgCampaignParticipant/>;
            default:
                return <OrgCampaignOwner/>;
        }
    };
    
    return(
        <div>
            <Container>
                <strong><h4>[name of the organization] campaigns:</h4></strong>
                <Row className="text-center">
                    <p>Browse campaigns associated with organization.</p>
                </Row>
            </Container>
            <Container>
            <Pagination className="custom-pagination-camp justify-content-center">
                <Pagination.Item active={activePage === 1} onClick={() => handlePageChange(1)} className="org-navbar-btn">
                    Campaign Owner
                </Pagination.Item>
                <Pagination.Item active={activePage === 2} onClick={() => handlePageChange(2)}>
                    Campaign Participant
                </Pagination.Item>
                </Pagination>
                {renderActivePage()}
            </Container>
        </div>
    )
}