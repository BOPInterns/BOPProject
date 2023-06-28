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
import { MarketPlaceSearchBar } from "./MarketPlaceSearchBar";
import Pagination from "react-bootstrap/Pagination";
import React from 'react';

export const MarketPlace = () => {
  // initialize localStorage filter variables:
    // ALL
  if (localStorage.getItem("orgFilter") === null)
    localStorage.setItem("orgFilter", "");
  if (localStorage.getItem("nameFilter") === null)
    localStorage.setItem("nameFilter", "");
  if (localStorage.getItem("regDateFilter") === null)
    localStorage.setItem("regDateFilter", "");
  if (localStorage.getItem("tagsFilter") === null)
    localStorage.setItem("tagsFilter", "");
    // CAMPAIGN
  if (localStorage.getItem("campNameFilter") === null)
    localStorage.setItem("campNameFilter", "");
  if (localStorage.getItem("campOrgFilter") === null)
    localStorage.setItem("campOrgFilter", "");
  if (localStorage.getItem("campPhaseFilter") === null)
    localStorage.setItem("campPhaseFilter", "");
  // if (localStorage.getItem("campRegDateFilter") === null)
  //     localStorage.setItem("campRegDateFilter", "");
  if (localStorage.getItem("campTagsFilter") === null)
      localStorage.setItem("campTagsFilter", "");
  if (localStorage.getItem("campCSFilter") === null)
    localStorage.setItem("campCSFilter", "");
  if (localStorage.getItem("campMissionFilter") === null)
    localStorage.setItem("campMissionFilter", "");
  if (localStorage.getItem("campNumActorsFilter") === null)
    localStorage.setItem("campNumActorsFilter", "");
  if (localStorage.getItem("campLocationFilter") === null)
    localStorage.setItem("campLocationFilter", "");
  if (localStorage.getItem("campReachFilter") === null)
    localStorage.setItem("campReachFilter", "");
  if (localStorage.getItem("campStakeholderLangFilter") === null)
    localStorage.setItem("campStakeholderLangFilter", "");
  if (localStorage.getItem("campVolunteerLangFilter") === null)
    localStorage.setItem("campVolunteerLangFilter", "");
    // SOLUTION
  if (localStorage.getItem("solNameFilter") === null)
    localStorage.setItem("solNameFilter", "");
  if (localStorage.getItem("solOrgFilter") === null)
    localStorage.setItem("solOrgFilter", "");
  // if (localStorage.getItem("solRegDateFilter") === null)
  //   localStorage.setItem("solRegDateFilter", "");
  if (localStorage.getItem("solTagsFilter") === null)
    localStorage.setItem("solTagsFilter", "");
  if (localStorage.getItem("solFocusFilter") === null)
    localStorage.setItem("solFocusFilter", "");
  if (localStorage.getItem("solNeedsFilter") === null)
    localStorage.setItem("solNeedsFilter", "");
  if (localStorage.getItem("solTechFilter") === null)
    localStorage.setItem("solTechFilter", "");
    // SERVICE
  if (localStorage.getItem("servNameFilter") === null)
    localStorage.setItem("servNameFilter", "");
  if (localStorage.getItem("servOrgFilter") === null)
    localStorage.setItem("servOrgFilter", "");
  // if (localStorage.getItem("servRegDateFilter") === null)
  //   localStorage.setItem("servRegDateFilter", "");
  if (localStorage.getItem("servTagsFilter") === null)
    localStorage.setItem("servTagsFilter", "");
  if (localStorage.getItem("servPriceFilter") === null)
    localStorage.setItem("servPriceFilter", "");

  const [allToggle, setAllToggle] = useState(null);
  const [campaignToggle, setCampaignToggle] = useState(false);
  const [solutionsToggle, setSolutionsToggle] = useState(false);
  const [servicesToggle, setServicesToggle] = useState(false);

  const [activePage, setActivePage] = useState(1);
  const totalPages = 4;

  const handlePageChange = (page) => {
    setActivePage(page);
  };
  
  const handleSearch = (query) => {
    console.log(query);
    };

  const renderActivePage = () => {
    switch (activePage) {
      case 1:
        return <div>
            <MarketPlaceSearchBar onSearch={handleSearch}/>
            <AllPages />
        </div>
      case 2:
        return <div>
            <MarketPlaceSearchBar onSearch={handleSearch}/>
            <CampaignComp />
        </div>;
      case 3:
        return <div>
            <MarketPlaceSearchBar onSearch={handleSearch}/>
            <SolutionComp />
        </div>
      case 4:
        return <div>
            <MarketPlaceSearchBar onSearch={handleSearch}/>
            <ServiceComp />
        </div>
      default:
        return <div>
            <MarketPlaceSearchBar onSearch={handleSearch}/>
            <AllPages />
        </div>
    }
  };

  const handleFilters = () => {
    return <MarketPlaceFilters />;
  };

  return (
    <div>
      <NavigationBar />
      <Container fluid
        style={{
        }}
      >
        <Row className="mt-5 text-center"
            style={{
            }}
        >
          <h4 style={{fontWeight: 'bold', color: '#fa6e13'}}>You are currently browsing the market place as:</h4>
        </Row>
        <Row>
          <div class="d-flex justify-content-center">
            <Dropdown>
              <Dropdown.Toggle className="org-dropdown-btn">
                <Row>
                  <Col xs={2}
                    style={{
                      paddingTop: '4px',
                    }}
                  >
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
            
          </Pagination>
          {renderActivePage()}
        </Container>
        <Row></Row>

        <div style={{ marginLeft: 100, marginRight: 100 }}></div>
      </Container>
    </div>
  );
};
