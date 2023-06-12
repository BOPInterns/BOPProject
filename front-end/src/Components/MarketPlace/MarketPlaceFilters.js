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

import { Card } from 'react-bootstrap';

/*
    Filter by: 
    campaign name -
    organization -
    tags -
    description -
    goal -
    location -
    reach -
    stakeholder lang
    volunteer lang
    
*/


export const MarketPlaceFilters = () => {
    
    // Eventually should have local storage variables here just like campaign creation
    const navigate = useNavigate();
    
    
    function applyFilters() {
        // Place holder function for now, eventually should return you to the marketplace page and apply filters selected from this page
        navigate('/market-place')
    }
    
    function clearFilters() {
        // Place holder function for now, eventually should clear all filters from local storage and reinitialize them
        console.log('Clearing filters')
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
                            <i class="fa-solid fa-xmark"></i>
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
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </Button>
                            <Form.Control
                                type="text"
                                placeholder="Filter campaign names containing..."
                            />
                        </InputGroup>
                        <InputGroup
                            size='sm'
                            className="mb-3"
                        >
                        <Button
                            className='search-btn'
                        >
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </Button>
                            <Form.Control
                                type="text"
                                placeholder="Filter organization names containing..."
                            />
                        </InputGroup>
                        <InputGroup
                            size='sm'
                            className="mb-3"
                        >
                        <Button
                            className='search-btn'
                        >
                            <i class="fa-solid fa-magnifying-glass"></i>
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
                                    <i class="fa-solid fa-magnifying-glass"></i>
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