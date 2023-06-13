import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './MarketPlace.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate }  from 'react-router-dom';
import { useState } from 'react';

import { Card } from 'react-bootstrap';

/*
    Filters:
    organization -
    role -
    status -
    registration date -

    Search functionality:
    organization -
    campaign name -
    tag name -
*/


export const MarketPlaceFilters = () => {
    // note: localStorage filter variables are initialized in MarketPlace.js
    const [orgFilter, setOrgFilter] = useState(localStorage.getItem('orgFilter'));
    // const [campaignFilter, setCampaignFilter] = useState(localStorage.getItem('campaignFilter'));
    // const [roleFilter, setRoleFilter] = useState(localStorage.getItem('roleFilter'));
    // const [statusFilter, setStatusFilter] = useState(localStorage.getItem('statusFilter'));
    // const [regDateFilter, setRegDateFilter] = useState(localStorage.getItem('regDateFilter'));
    // const [tagsFilter, setTagsFilter] = useState(JSON.parse(localStorage.getItem('tagsFilter')));
    const navigate = useNavigate();
    
    
    function applyFilters() {
        // Place holder function for now, eventually should return you to the marketplace page and apply filters selected from this page
        
        // update localStorage variables
        localStorage.setItem('orgFilter', orgFilter);
        // localStorage.setItem('campaignFilter', campaignFilter);
        // localStorage.setItem('roleFilter', roleFilter);
        // localStorage.setItem('statusFilter', statusFilter);
        // localStorage.setItem('regDateFilter', regDateFilter);
        // localStorage.setItem('tagsFilter', tagsFilter);

        navigate('/market-place');
    }
    
    function clearFilters() {
        // Reset local storage filter variables
        localStorage.setItem('orgFilter', '');
        // localStorage.setItem('campaignFilter', '');
        // localStorage.setItem('roleFilter', '');
        // localStorage.setItem('statusFilter', '');
        // localStorage.setItem('regDateFilter', '');
        // localStorage.setItem('tagsFilter', '[]');

        // Reset state filter variables
        setOrgFilter('');
        // setCampaignFilter('');
        // setRoleFilter('');
        // setStatusFilter('');
        // setRegDateFilter('');
        // setTagsFilter([]);

        console.log('Filters cleared');
    }
    
    return (
        <div>
            <Container className="mt-4 mb-5" fluid>
                <Row className="mb-3">
                    <Col>
                        <h3>Filters</h3>
                    </Col>
                    <Col className="text-end">
                        <Button
                            onClick={()=>navigate('/market-place')}
                            className="search-btn"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <hr className="mt-3"></hr>
                </Row>
                <Row>
                    <h4>Quick filters</h4>
                </Row>
                <Row>
                    <Col>
                        <InputGroup
                        size='sm'
                        >
                            <Form.Control
                                placeholder='Search by Name, UID, Serial Number...'
                            />
                            <DropdownButton
                                variant="outline-secondary"
                                title="All"
                                align="end"
                            >
                            </DropdownButton>
                        </InputGroup>
                    </Col>
                    <Col>
                        <Form.Select
                            size='sm'
                        >
                            <option>Select Organization</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select
                            size='sm'
                        >
                            <option>Select roles</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select
                            size='sm'
                        >
                            <option>Select status</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select
                            size='sm'
                        >
                            <option>Select register date</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <hr className="mt-4"></hr>
                </Row>
                <Row>
                    <Col>
                        <h4>In-Depth filters</h4>
                    </Col>
                    <Col xs={3} className="text-end">
                        <Button
                            className="clear-filters-btn"
                            onClick={clearFilters}
                        >
                            Clear filters
                        </Button>
                    </Col>
                </Row>
                <Row className=" mt-2 justify-content-center">
                    <Col md={8}>
                    <Card>
                        <Card.Header>
                            Basic Information
                        </Card.Header>
                        <Card.Body>
                        <InputGroup
                            size='sm'
                            className="mb-3"
                        >
                        <Button
                            className='search-btn'
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Button>
                            <Form.Control
                                type="text"
                                placeholder="Filter campaign names containing..."
                                onChange={(e)=>setCampaignFilter(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup
                            size='sm'
                            className="mb-3"
                        >
                        <Button
                            className='search-btn'
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Button>
                            <Form.Control
                                type="text"
                                placeholder="Filter organization names containing..."
                                onChange={(e)=>setOrgFilter(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup
                            size='sm'
                            className="mb-3"
                        >
                        <Button
                            className='search-btn'
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Button>
                            <Form.Control
                                type="text"
                                placeholder="Filter campaign descriptions containing..."
                            />
                        </InputGroup>
                        <Form.Select
                            size='sm'
                        >
                            <option>Filter tags</option>
                        </Form.Select>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Card>
                            <Card.Header>Secondary Information</Card.Header>
                            <Card.Body>
                                <Row>
                                <InputGroup
                                    size='sm'
                                    className="mb-3"
                                >
                                <Button
                                    className='search-btn'
                                >
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </Button>
                                    <Form.Control
                                        type="text"
                                        placeholder="Filter mission statements containing..."
                                    />
                                </InputGroup>
                                </Row>
                                <Row>
                                    <Col>
                                    <InputGroup
                                    size='sm'
                                    >
                                        <Form.Control
                                            placeholder='Filter active users'
                                        />
                                        <DropdownButton
                                            variant="outline-secondary"
                                            title=''
                                            align="end"
                                        >
                                            <Dropdown.Item eventKey="1">Greater than...</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Less than...</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Equal to...</Dropdown.Item>
                                        </DropdownButton>
                                    </InputGroup>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Location and Language</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                    <Form.Select
                                        size='sm'
                                    >
                                        <option>Filter location</option>
                                    </Form.Select>
                                    </Col>
                                    <Col>
                                    <Form.Select
                                        size='sm'
                                    >
                                        <option>Filter reach</option>
                                    </Form.Select>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col>
                                    <Form.Select
                                        size='sm'
                                    >
                                        <option>Filter stakeholder langauge</option>
                                    </Form.Select>
                                    </Col>
                                    <Col>
                                    <Form.Select
                                        size='sm'
                                    >
                                        <option>Filter volunteer language</option>
                                    </Form.Select>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-end">
                    <Button
                        className="browse-more-btn"
                        onClick={applyFilters}
                    >
                        Apply
                    </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}