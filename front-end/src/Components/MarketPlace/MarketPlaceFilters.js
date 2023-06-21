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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    // ALL
  const [orgFilter, setOrgFilter] = useState(localStorage.getItem("orgFilter"));
  const [nameFilter, setNameFilter] = useState(localStorage.getItem("nameFilter"));
  const [regDateFilter, setRegDateFilter] = useState(new Date());
  // const [regDateFilter, setRegDateFilter] = useState(localStorage.getItem("regDateFilter"));
  const [tagsFilter, setTagsFilter] = useState(localStorage.getItem("tagsFilter"));
  // const [tagsFilter, setTagsFilter] = useState(JSON.parse(localStorage.getItem('tagsFilter')));
    // CAMPAIGN
  const [campNameFilter, setCampNameFilter] = useState(localStorage.getItem("campNameFilter"));
  const [campOrgFilter, setCampOrgFilter] = useState(localStorage.getItem("campOrgFilter"));
  const [campPhaseFilter, setCampPhaseFilter] = useState(localStorage.getItem("campPhaseFilter"));
  const [campRegDateFilter, setCampRegDateFilter] = useState(localStorage.getItem("campRegDateFilter"));
  const [campTagsFilter, setCampTagsFilter] = useState(localStorage.getItem("campTagsFilter"));
  const [campCSFilter, setCampCSFilter] = useState(localStorage.getItem("campCSFilter"));
  const [campMissionFilter, setCampMissionFilter] = useState(localStorage.getItem("campMissionFilter"));
  const [campNumActorsFilter, setCampNumActorsFilter] = useState(localStorage.getItem("campNumActorsFilter"));
  const [campLocationFilter, setCampLocationFilter] = useState(localStorage.getItem("campLocationFilter"));
  const [campReachFilter, setCampReachFilter] = useState(localStorage.getItem("campReachFilter"));
  const [campStakeholderLangFilter, setCampStakeholderLangFilter] = useState(localStorage.getItem("campStakeholderLangFilter"));
  const [campVolunteerLangFilter, setCampVolunteerLangFilter] = useState(localStorage.getItem("campVolunteerLangFilter"));
    // SOLUTION
  const [solNameFilter, setSolNameFilter] = useState(localStorage.getItem("solNameFilter"));
  const [solOrgFilter, setSolOrgFilter] = useState(localStorage.getItem("solOrgFilter"));
  const [solRegDateFilter, setSolRegDateFilter] = useState(localStorage.getItem("solRegDateFilter"));
  const [solTagsFilter, setSolTagsFilter] = useState(localStorage.getItem("solTagsFilter"));
  const [solFocusFilter, setSolFocusFilter] = useState(localStorage.getItem("solFocusFilter"));
  const [solNeedsFilter, setSolNeedsFilter] = useState(localStorage.getItem("solNeedsFilter"));
  const [solTechFilter, setSolTechFilter] = useState(localStorage.getItem("solTechFilter"));
    // SERVICE
  const [servNameFilter, setServNameFilter] = useState(localStorage.getItem("servNameFilter"));
  const [servOrgFilter, setServOrgFilter] = useState(localStorage.getItem("servOrgFilter"));
  const [servRegDateFilter, setServRegDateFilter] = useState(localStorage.getItem("servRegDateFilter"));
  const [servTagsFilter, setServTagsFilter] = useState(localStorage.getItem("servTagsFilter"));
  const [servPriceFilter, setServPriceFilter] = useState(localStorage.getItem("servPriceFilter"));
    
  
  const navigate = useNavigate();

  function applyFilters() {
    // Place holder function for now, eventually should return you to the marketplace page and apply filters selected from this page

    // update localStorage variables
      // ALL
    localStorage.setItem("orgFilter", orgFilter);
    localStorage.setItem("nameFilter", nameFilter);
    localStorage.setItem("regDateFilter", regDateFilter);
    localStorage.setItem("tagsFilter", tagsFilter);
      // CAMPAIGN
    localStorage.setItem("campNameFilter", campNameFilter);
    localStorage.setItem("campOrgFilter", campOrgFilter);
    localStorage.setItem("campPhaseFilter", campPhaseFilter);
    localStorage.setItem("campRegDateFilter", campRegDateFilter);
    localStorage.setItem("campTagsFilter", campTagsFilter);
    localStorage.setItem("campCSFilter", campCSFilter);
    localStorage.setItem("campMissionFilter", campMissionFilter);
    localStorage.setItem("campNumActorsFilter", campNumActorsFilter);
    localStorage.setItem("campLocationFilter", campLocationFilter);
    localStorage.setItem("campReachFilter", campReachFilter);
    localStorage.setItem("campStakeholderLangFilter", campStakeholderLangFilter);
    localStorage.setItem("campVolunteerLangFilter", campVolunteerLangFilter);
      // SOLUTION
    localStorage.setItem("solNameFilter", solNameFilter);
    localStorage.setItem("solOrgFilter", solOrgFilter);
    localStorage.setItem("solRegDateFilter", solRegDateFilter);
    localStorage.setItem("solTagsFilter", solTagsFilter);
    localStorage.setItem("solFocusFilter", solFocusFilter);
    localStorage.setItem("solNeedsFilter", solNeedsFilter);
    localStorage.setItem("solTechFilter", solTechFilter);
      // SERVICE
    localStorage.setItem("servNameFilter", servNameFilter);
    localStorage.setItem("servOrgFilter", servOrgFilter);
    localStorage.setItem("servRegDateFilter", servRegDateFilter);
    localStorage.setItem("servTagsFilter", servTagsFilter);
    localStorage.setItem("servPriceFilter", servPriceFilter);
      
    navigate("/market-place");
  }

  function clearFilters() {
    // Reset local storage filter variables
      // ALL
    localStorage.setItem("orgFilter", "");
    localStorage.setItem("nameFilter", "");
    localStorage.setItem("regDateFilter", "");
    localStorage.setItem("tagsFilter", "");
    // localStorage.setItem('tagsFilter', '[]');
      // CAMPAIGN
    localStorage.setItem("campNameFilter", "");
    localStorage.setItem("campOrgFilter", "");
    localStorage.setItem("campPhaseFilter", "");
    localStorage.setItem("campRegDateFilter", "");
    localStorage.setItem("campTagsFilter", "");
    localStorage.setItem("campCSFilter", "");
    localStorage.setItem("campMissionFilter", "");
    localStorage.setItem("campNumActorsFilter", "");
    localStorage.setItem("campLocationFilter", "");
    localStorage.setItem("campReachFilter", "");
    localStorage.setItem("campStakeholderLangFilter", "");
    localStorage.setItem("campVolunteerLangFilter", "");
      // SOLUTION
    localStorage.setItem("solNameFilter", "");
    localStorage.setItem("solOrgFilter", "");
    localStorage.setItem("solRegDateFilter", "");
    localStorage.setItem("solTagsFilter", "");
    localStorage.setItem("solFocusFilter", "");
    localStorage.setItem("solNeedsFilter", "");
    localStorage.setItem("solTechFilter", "");
      // SERVICE
    localStorage.setItem("servNameFilter", "");
    localStorage.setItem("servOrgFilter", "");
    localStorage.setItem("servRegDateFilter", "");
    localStorage.setItem("servTagsFilter", "");
    localStorage.setItem("servPriceFilter", "");
  

    // Reset state filter variables
      // ALL
    setOrgFilter("");
    setNameFilter("");
    setRegDateFilter("");
    setTagsFilter("");
    // setTagsFilter([]);
      // CAMPAIGN
    setCampNameFilter("");
    setCampOrgFilter("");
    setCampTagsFilter("");
    setCampPhaseFilter("");
    setCampRegDateFilter("");
    setCampCSFilter("");
    setCampMissionFilter("");
    setCampNumActorsFilter("");
    setCampLocationFilter("");
    setCampReachFilter("");
    setCampStakeholderLangFilter("");
    setCampVolunteerLangFilter("");
      // SOLUTION
    setSolNameFilter("");
    setSolOrgFilter("");
    setSolRegDateFilter("");
    setSolTagsFilter("");
    setSolFocusFilter("");
    setSolNeedsFilter("");
    setSolTechFilter("");
      // SERVICE
    setServNameFilter("");
    setServOrgFilter("");
    setServRegDateFilter("");
    setServTagsFilter("");
    setServPriceFilter("");

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
{/* ********** ALL FILTERS ********** */}
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
          {/* <Col>
            <Form.Select size="sm">
              <option>Select Organization</option>
            </Form.Select>
          </Col> */}
          <Col>
            <InputGroup size="sm" className="mb-3">
              <Button className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
              <Form.Control
                type="text"
                placeholder="Search organizations"
                value={orgFilter}
                onChange={(e) => setOrgFilter(e.target.value)}
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
                placeholder="Campaign/solution/service name"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
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
                placeholder="Filter tags"
                value={tagsFilter}
                onChange={(e) => setTagsFilter(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col>
            <DatePicker 
              placeholderText="Register date (MM/DD/YYYY)"
              selected={regDateFilter}
              onChange={(date) => {
                  // date is in MMDDYYYY format
                  setRegDateFilter(date);
                  localStorage.setItem("regDateFilter", date);
                  console.log("register date: " + date);
                  }} />
          </Col>
        </Row>
        <Row>
          <hr className="mt-4"></hr>
        </Row>
        <Row>
          <Col>
{/* ********** CAMPAIGN FILTERS ********** */}
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
            <Card
              style={{
                background: 'linear-gradient(to bottom, orange, white)',
                border: '0px',
              }}
            >
              <Card.Header
                style={{
                  backgroundColor: 'orange',
                }}
              >Basic Information</Card.Header>
              <Card.Body>
                <Row>
                <InputGroup size="sm" className="mb-3">
                  <Button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Filter campaign names containing..."
                    value={campNameFilter}
                    onChange={(e) => setcampNameFilter(e.target.value)}
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
                    value={campOrgFilter}
                    onChange={(e) => setCampOrgFilter(e.target.value)}
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
                    value={campTagsFilter}
                    onChange={(e) => setCampTagsFilter(e.target.value)}
                  />
                </InputGroup>
                </Row>
                <Row>
                <Col md={4}>
                <Form.Select
                  size="sm"
                  value={campPhaseFilter}
                  onChange={(e) => setCampPhaseFilter(e.target.value)}
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
                  value={campCSFilter}
                  onChange={(e) => setCampCSFilter(e.target.value)}
                >
                  <option value="">Case study?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Select>
                </Col>
                <Col md={4}>
                  <DatePicker 
                    placeholderText="Register date (MM/DD/YYYY)"
                    selected={campRegDateFilter}
                    onChange={(date) => {
                    // date is in MMDDYYYY format
                    setCampRegDateFilter(date);
                    localStorage.setItem("campRegDateFilter", date);
                  }} />
                </Col>
                </Row>
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
                      value={campMissionFilter}
                      onChange={(e)=>setCampMissionFilter(e.target.value)}
                    />
                  </InputGroup>
                </Row>
                <Row>
                  <Col>
                    <InputGroup size="sm">
                      <Form.Control
                        type="text"
                        placeholder="Filter active users"
                        value={campNumActorsFilter}
                        onChange={(e)=>setCampNumActorsFilter(e.target.value)}
                      />
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
                    <InputGroup size="sm" className="mb-3">
                      <Button className="search-btn">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </Button>
                      <Form.Control
                        type="text"
                        placeholder="Filter locations"
                        value={campLocationFilter}
                        onChange={(e)=>setCampLocationFilter(e.target.value)}
                      />
                    </InputGroup>
                    {/* <Form.Select size="sm">
                      <option>Filter location</option>
                    </Form.Select> */}
                  </Col>
                  <Col>
                    <InputGroup size="sm" className="mb-3">
                      <Button className="search-btn">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </Button>
                      <Form.Control
                        type="text"
                        placeholder="Filter reach"
                        value={campReachFilter}
                        onChange={(e)=>setCampReachFilter(e.target.value)}
                      />
                    </InputGroup>
                    {/* <Form.Select size="sm">
                      <option>Filter reach</option>
                    </Form.Select> */}
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <InputGroup size="sm" className="mb-3">
                        <Button className="search-btn">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </Button>
                        <Form.Control
                          type="text"
                          placeholder="Filter stakeholder language"
                          value={campStakeholderLangFilter}
                          onChange={(e)=>setCampStakeholderLangFilter(e.target.value)}
                        />
                      </InputGroup>
                    {/* <Form.Select size="sm">
                      <option>Filter stakeholder langauge</option>
                    </Form.Select> */}
                  </Col>
                  <Col>
                    <InputGroup size="sm" className="mb-3">
                        <Button className="search-btn">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </Button>
                        <Form.Control
                          type="text"
                          placeholder="Filter volunteer language"
                          value={campVolunteerLangFilter}
                          onChange={(e)=>setCampVolunteerLangFilter(e.target.value)}
                        />
                      </InputGroup>
                    {/* <Form.Select size="sm">
                      <option>Filter volunteer language</option>
                    </Form.Select> */}
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
{/* ********** SOLUTION FILTERS ********** */}
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
                    value={solNameFilter}
                    onChange={(e) => setSolNameFilter(e.target.value)}
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
                    value={solOrgFilter}
                    onChange={(e) => setSolOrgFilter(e.target.value)}
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
                    value={solTagsFilter}
                    onChange={(e) => setSolTagsFilter(e.target.value)}
                  />
                </InputGroup>
                </Row>
                <Row
                  style={{
                    textAlign: 'end',
                  }}
                >
                  <DatePicker 
                  placeholderText="Register date (MM/DD/YYYY)"
                  selected={solRegDateFilter}
                  onChange={(date) => {
                  // date is in MMDDYYYY format
                  setSolRegDateFilter(date);
                  localStorage.setItem("solRegDateFilter", date);
                  }} />
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
                  <Col>
                  <InputGroup size="sm" className="mb-3">
                  <Button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Focus area"
                    value={solFocusFilter}
                    onChange={(e) => setSolFocusFilter(e.target.value)}
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
                    value={solNeedsFilter}
                    onChange={(e) => setSolNeedsFilter(e.target.value)}
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
                    value={solTechFilter}
                    onChange={(e) => setSolTechFilter(e.target.value)}
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
{/* ********** SERVICE FILTERS ********** */}
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
                    value={servNameFilter}
                    onChange={(e) => setServNameFilter(e.target.value)}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                  <Button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Filter organization names containing..."
                    value={servOrgFilter}
                    onChange={(e) => setServOrgFilter(e.target.value)}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                  <Button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Filter tags"
                    value={servTagsFilter}
                    onChange={(e) => setServTagsFilter(e.target.value)}
                  />
                </InputGroup>
                <Row>
                
                <Col>
                <InputGroup size="sm">
                      <Form.Control 
                        type="text"
                        placeholder="Filter prices" 
                        value={servPriceFilter}
                        onChange={(e)=>setServPriceFilter(e.target.value)}
                      />
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
                <Col
                  style={{
                    textAlign: 'end'
                  }}
                >
                <DatePicker
                  placeholderText="Register date (MM/DD/YYYY)"
                  selected={servRegDateFilter}
                  onChange={(date) => {
                  // date is in MMDDYYYY format
                  setServRegDateFilter(date);
                  localStorage.setItem("servRegDateFilter", date);
                  }} />
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
