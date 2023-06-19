import { NavigationBar } from "../NavigationBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./MarketPlace.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { CampaignComp } from "./CampaignComp";
import { SolutionComp } from "./SolutionComp";
import { ServiceComp } from "./ServiceComp";
import { AllPages } from "./AllPages";
import { MarketPlaceFilters } from "./MarketPlaceFilters";
import Pagination from "react-bootstrap/Pagination";

export const MarketPlace = () => {
  // initialize localStorage filter variables
  if (localStorage.getItem("orgFilter") === null)
    localStorage.setItem("orgFilter", "");
  if (localStorage.getItem("nameFilter") === null)
    localStorage.setItem("nameFilter", "");
  if (localStorage.getItem("phaseFilter") === null)
    localStorage.setItem("phaseFilter", "");
  if (localStorage.getItem("regDateFilter") === null)
      localStorage.setItem("regDateFilter", "");
  if (localStorage.getItem("tagsFilter") === null)
      localStorage.setItem("tagsFilter", "");

  const [allToggle, setAllToggle] = useState(null);
  const [campaignToggle, setCampaignToggle] = useState(false);
  const [solutionsToggle, setSolutionsToggle] = useState(false);
  const [servicesToggle, setServicesToggle] = useState(false);

  const [activePage, setActivePage] = useState(1);
  const totalPages = 4;

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 1:
        return <AllPages />;
      case 2:
        return <CampaignComp />;
      case 3:
        return <SolutionComp />;
      case 4:
        return <ServiceComp />;
      default:
        return <AllPages />;
    }
  };

  const handleFilters = () => {
    return <MarketPlaceFilters />;
  };

  return (
    <div>
      <NavigationBar />
      <Container fluid>
        <Row className="mt-5 text-center">
          <h4>You are currently browsing the market place as:</h4>
        </Row>
        <Row>
          <div class="d-flex justify-content-center">
            <Dropdown>
              <Dropdown.Toggle className="org-dropdown-btn">
                <Row>
                  <Col xs={2}>
                    <Image
                      roundedCircle
                      src={require("../placeholderProfilePicture.png")}
                      height="55"
                    />
                  </Col>
                  <Col lg={9} className="mt-1">
                    <strong>Name of the Organization</strong>
                    <br />
                    <p>Name of the campaign</p>
                  </Col>
                  <Col className="mt-3">
                    <i class="fa-solid fa-circle-chevron-down fa-md"></i>
                  </Col>
                </Row>
              </Dropdown.Toggle>
              <Dropdown.Menu className="org-dropdown-btn-menu">
                <Dropdown.Item>
                  <strong>Name of the Organization</strong>
                </Dropdown.Item>
                <Dropdown.Item>Name of your campaign #1</Dropdown.Item>
                <Dropdown.Item>Name of your campaign #2</Dropdown.Item>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Item>
                  <strong>Name of the Organization</strong>
                </Dropdown.Item>
                <Dropdown.Item>Name of your campaign #1</Dropdown.Item>
                <Dropdown.Item>Name of your campaign #2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Row>
        <Row className="justify-content-center">
          <hr className="mt-5"></hr>
        </Row>
        <Container className="mt-3">
          <Pagination className="custom-pagination justify-content-center">
            <Pagination.Item
              active={activePage === 1}
              onClick={() => handlePageChange(1)}
              className="org-navbar-btn"
            >
              All
            </Pagination.Item>
            <Pagination.Item
              active={activePage === 2}
              onClick={() => handlePageChange(2)}
            >
              Campaigns
            </Pagination.Item>
            <Pagination.Item
              active={activePage === 3}
              onClick={() => handlePageChange(3)}
            >
              Solutions
            </Pagination.Item>
            <Pagination.Item
              active={activePage === 4}
              onClick={() => handlePageChange(4)}
            >
              Services
            </Pagination.Item>
            <Row className="mt-3">
              <Col sm={2}></Col>
              <Col lg={8}>
                <InputGroup>
                  <Button className="search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control type="text" placeholder="Search Bar" />
                </InputGroup>
              </Col>
              <Col sm={2}>
                <Button
                  className="filters-btn"
                  text-align="center"
                  href="/market-place/filters"
                >
                  Filters <i class="fa-solid fa-filter"></i>
                </Button>
              </Col>
            </Row>
          </Pagination>
          {renderActivePage()}
        </Container>
        <Row></Row>

        <div style={{ marginLeft: 100, marginRight: 100 }}></div>
      </Container>
    </div>
  );
};
