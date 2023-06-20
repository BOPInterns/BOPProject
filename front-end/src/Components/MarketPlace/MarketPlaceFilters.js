import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./MarketPlace.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Card } from "react-bootstrap";

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
  const [orgFilter, setOrgFilter] = useState(localStorage.getItem("orgFilter"));
  const [nameFilter, setNameFilter] = useState(localStorage.getItem("nameFilter"));
  const [phaseFilter, setPhaseFilter] = useState(localStorage.getItem("phaseFilter"));
  const [regDateFilter, setRegDateFilter] = useState(localStorage.getItem("regDateFilter"));
  const [tagsFilter, setTagsFilter] = useState(localStorage.getItem("tagsFilter"));
  // const [tagsFilter, setTagsFilter] = useState(JSON.parse(localStorage.getItem('tagsFilter')));
  const navigate = useNavigate();

  function applyFilters() {
    // Place holder function for now, eventually should return you to the marketplace page and apply filters selected from this page

    // update localStorage variables
    localStorage.setItem("orgFilter", orgFilter);
    localStorage.setItem("nameFilter", nameFilter);
    localStorage.setItem("phaseFilter", phaseFilter);
    localStorage.setItem("regDateFilter", regDateFilter);
    localStorage.setItem("tagsFilter", tagsFilter);

    navigate("/market-place");
  }

  function clearFilters() {
    // Reset local storage filter variables
    localStorage.setItem("orgFilter", "");
    localStorage.setItem("nameFilter", "");
    localStorage.setItem("phaseFilter", "");
    localStorage.setItem("regDateFilter", "");
    localStorage.setItem("tagsFilter", "");
    // localStorage.setItem('tagsFilter', '[]');

    // Reset state filter variables
    setOrgFilter("");
    setNameFilter("");
    setPhaseFilter("");
    setRegDateFilter("");
    setTagsFilter("");
    // setTagsFilter([]);

    console.log("Filters cleared");
  }

  function formatDate(el) {
    return el.replace(/^([\d]{4})([\d]{2})([\d]{2})$/,"$1-$2-$3");
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
              onClick={() => navigate("/market-place")}
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
          <h4>All filters</h4>
        </Row>
        <Row>
          <Col>
            <InputGroup size="sm">
              <Form.Control placeholder="Search by Name, UID, Serial Number..." />
              <DropdownButton
                variant="outline-secondary"
                title="All"
                align="end"
              ></DropdownButton>
            </InputGroup>
          </Col>
          <Col>
            <Form.Select size="sm">
              <option>Select Organization</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              size="sm"
              value={phaseFilter}
              onChange={(e) => setPhaseFilter(e.target.value)}
            >
              <option value="">Select phase</option>
              <option value="New">New</option>
              <option value="Challenge">Challenge</option>
              <option value="Project">Project</option>
              <option value="Showcase">Showcase</option>
            </Form.Select>
          </Col>
          <Col>
            {/* <Form.Select size="sm">
              <option>Select register date</option>
            </Form.Select> */}
            <InputGroup size="sm" className="mb-3">
              <Form.Control 
                type="text"
                placeholder="Register date (YYYYMMDD)"
                value={regDateFilter}
                onChange={(e)=>{
                  if (e.target.value.length > 10)
                    e.target.value = e.target.value.slice(0,10);
                  e.target.value=formatDate(e.target.value);
                  setRegDateFilter(e.target.value);
                }}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <hr className="mt-4"></hr>
        </Row>
        <Row>
          <Col>
            <h4>Campaign filters</h4>
          </Col>
          <Col xs={3} className="text-end">
            <Button className="clear-filters-btn" onClick={clearFilters}>
              Clear filters
            </Button>
          </Col>
        </Row>
        <Row className="mt-2 justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Header>Basic Information</Card.Header>
              <Card.Body>
                <Row>
                <InputGroup size="sm" className="mb-3">
                  <Button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Filter campaign names containing..."
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                  />
                </InputGroup>
                </Row>
                <Row>
                <InputGroup size="sm" className="mb-3">
                  <Button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Filter organization names containing..."
                    value={orgFilter}
                    onChange={(e) => setOrgFilter(e.target.value)}
                  />
                </InputGroup>
                </Row>
                <Row>
                <InputGroup size="sm" className="mb-3">
                  <Button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Filter tags"
                    value={tagsFilter}
                    onChange={(e) => setTagsFilter(e.target.value)}
                  />
                </InputGroup>
                </Row>
                <Row>
                <Col md={4}>
                <Form.Select
                  size="sm"
                  value={phaseFilter}
                  onChange={(e) => setPhaseFilter(e.target.value)}
                >
                  <option value="">Select phase</option>
                  <option value="New">New</option>
                  <option value="Challenge">Challenge</option>
                  <option value="Project">Project</option>
                  <option value="Showcase">Showcase</option>
                </Form.Select>
                </Col>
                <Col md={4}>
                <Form.Select
                  size="sm"
                  // value={phaseFilter}
                  // onChange={(e) => setPhaseFilter(e.target.value)}
                >
                  <option value="">Case study?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Select>
                </Col>
                <Col>
                <InputGroup size="sm" className="mb-3">
              <Form.Control 
                type="text"
                placeholder="Register date (YYYYMMDD)"
                value={regDateFilter}
                onChange={(e)=>{
                  if (e.target.value.length > 10)
                    e.target.value = e.target.value.slice(0,10);
                  e.target.value=formatDate(e.target.value);
                  setRegDateFilter(e.target.value);
                }}
              />
            </InputGroup>
                </Col>
                </Row>
                <Row>
                  <Col md={4}>
                  <InputGroup size="sm" className="mb-3">
              <Form.Control 
                type="text"
                placeholder="Campaign deadline (YYYYMMDD)"
                // value={regDateFilter}
                // onChange={(e)=>{
                //   if (e.target.value.length > 10)
                //     e.target.value = e.target.value.slice(0,10);
                //   e.target.value=formatDate(e.target.value);
                //   setRegDateFilter(e.target.value);
                // }}
              />
            </InputGroup>
                  </Col>
                </Row>
                {/* <Form.Select size="sm">
                  <option>Filter tags</option>
                </Form.Select> */}
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
                  <InputGroup size="sm" className="mb-3">
                    <Button className="search-btn">
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
                    <InputGroup size="sm">
                      <Form.Control placeholder="Filter active users" />
                      <DropdownButton
                        variant="outline-secondary"
                        title=""
                        align="end"
                      >
                        <Dropdown.Item eventKey="1">
                          Greater than...
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">Less than...</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Equal to...</Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </Col>
                  <Col></Col>
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
                    <Form.Select size="sm">
                      <option>Filter location</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Select size="sm">
                      <option>Filter reach</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <Form.Select size="sm">
                      <option>Filter stakeholder langauge</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Select size="sm">
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
            <Button className="browse-more-btn" onClick={applyFilters}>
              Apply
            </Button>
          </Col>
        </Row>
        <Row
          style={{
            padding: '40px',
          }}
        >
          <hr></hr>
        </Row>
        <Row>
          <Col>
            <h4>Solution filters</h4>
          </Col>
          <Col xs={3} className="text-end">
            <Button className="clear-filters-btn" onClick={clearFilters}>
              Clear filters
            </Button>
          </Col>
        </Row>
        <Row className=" mt-2 justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Header>Basic Information</Card.Header>
              <Card.Body>
                <Row>
                <InputGroup size="sm" className="mb-3">
                  <Button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Filter solution names containing..."
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                  />
                </InputGroup>
                </Row>
                <Row>
                <InputGroup size="sm" className="mb-3">
                  <Button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Filter organization names containing..."
                    value={orgFilter}
                    onChange={(e) => setOrgFilter(e.target.value)}
                  />
                </InputGroup>
                </Row>
                <Row>
                <InputGroup size="sm" className="mb-3">
                  <Button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Filter tags"
                    value={tagsFilter}
                    onChange={(e) => setTagsFilter(e.target.value)}
                  />
                </InputGroup>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-2 justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Header>Secondary Information</Card.Header>
              <Card.Body>
                <Row>
                <InputGroup size="sm" className="mb-3">
              <Form.Control 
                type="text"
                placeholder="Register date (YYYYMMDD)"
                // value={regDateFilter}
                // onChange={(e)=>{
                //   if (e.target.value.length > 10)
                //     e.target.value = e.target.value.slice(0,10);
                //   e.target.value=formatDate(e.target.value);
                //   setRegDateFilter(e.target.value);
                // }}
              />
            </InputGroup>
                </Row>
                <Row>
                  <Col>
                  <InputGroup size="sm" className="mb-3">
                  <Button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Focus area"
                    // value={nameFilter}
                    // onChange={(e) => setNameFilter(e.target.value)}
                  />
                </InputGroup>
                  </Col>
                  <Col>
                  <InputGroup size="sm" className="mb-3">
                  <Button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Needs"
                    // value={nameFilter}
                    // onChange={(e) => setNameFilter(e.target.value)}
                  />
                </InputGroup>
                  </Col>
                  <Col>
                  <InputGroup size="sm" className="mb-3">
                  <Button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Technologies"
                    // value={nameFilter}
                    // onChange={(e) => setNameFilter(e.target.value)}
                  />
                </InputGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-end">
            <Button className="browse-more-btn" onClick={applyFilters}>
              Apply
            </Button>
          </Col>
        </Row>
        <Row
          style={{
            padding: '40px',
          }}
        >
          <hr></hr>
        </Row>
        <Row>
          <Col>
            <h4>Service filters</h4>
          </Col>
          <Col xs={3} className="text-end">
            <Button className="clear-filters-btn" onClick={clearFilters}>
              Clear filters
            </Button>
          </Col>
        </Row>
        <Row className=" mt-2 justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Header>Basic Information</Card.Header>
              <Card.Body>
                <InputGroup size="sm" className="mb-3">
                  <Button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Filter transformation service names containing..."
                    // value={nameFilter}
                    // onChange={(e) => setNameFilter(e.target.value)}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                  <Button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Filter organization names containing..."
                    value={orgFilter}
                    onChange={(e) => setOrgFilter(e.target.value)}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                  <Button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Filter tags"
                    value={tagsFilter}
                    onChange={(e) => setTagsFilter(e.target.value)}
                  />
                </InputGroup>
                <Row>
                <Col>
                <InputGroup size="sm" className="mb-3">
              <Form.Control 
                type="text"
                placeholder="Register date (YYYYMMDD)"
                value={regDateFilter}
                onChange={(e)=>{
                  if (e.target.value.length > 10)
                    e.target.value = e.target.value.slice(0,10);
                  e.target.value=formatDate(e.target.value);
                  setRegDateFilter(e.target.value);
                }}
              />
            </InputGroup>
                </Col>
                <Col>
                <InputGroup size="sm">
                      <Form.Control placeholder="Filter prices" />
                      <DropdownButton
                        variant="outline-secondary"
                        title=""
                        align="end"
                      >
                        <Dropdown.Item eventKey="1">
                          Greater than...
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">Less than...</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Equal to...</Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                </Col>
                </Row>
                {/* <Form.Select size="sm">
                  <option>Filter tags</option>
                </Form.Select> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mt-3">
          <Col className="text-end">
            <Button className="browse-more-btn" onClick={applyFilters}>
              Apply
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
