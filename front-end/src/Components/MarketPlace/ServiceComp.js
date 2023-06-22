import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ServiceCard } from "./ServiceCard";
import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';

export const ServiceComp = () => {
  const [currLoadedCards, setCurrLoadedCards] = useState(8);
  const [serviceData, setServiceData] = useState([]);

  // useEffect(() => {
  //     if (currL{oadedCards >= serviceData.length) {
  //         const loadMoreBtn = document.getElementById('load-more-btn');
  //         loadMoreBtn.disabled = true;
  //     };
  // }, [currLoadedCards]);

  useEffect(() => {
    //for services
    fetch("http://localhost:9000/get-service-data", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        regDateFilter: localStorage.getItem("regDateFilter"),
        servNameFilter: localStorage.getItem("servNameFilter"),
        servOrgFilter: localStorage.getItem("servOrgFilter"),
        //servRegDateFilter: localStorage.getItem("servRegDateFilter"),
        servTagsFilter: localStorage.getItem("servTagsFilter"),
        servPriceFilter: localStorage.getItem("servPriceFilter")
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.data) setServiceData(data.data);
        else setServiceData([]);
      });
  }, []);

  const handleMoreCards = () => {
    if (currLoadedCards < serviceData.length) {
      setCurrLoadedCards(currLoadedCards + 8);
    } else {
      const button = document.getElementById("load-more-btn");
      button.disabled = true;
    }
  };

  const loadServiceData = (i) => {
    return serviceData[i];
  };

  const loadServiceCards = () => {
    return serviceData.slice(0, currLoadedCards).map((data, index) => (
      <Col key={index} xs={6} sm={4} md={3} lg={3}>
        <ServiceCard servData={loadServiceData(index)}></ServiceCard>
      </Col>
    ));
  };

  return (
    <div>
      <Row className="mt-5">
        <Col lg={3}>
          <strong>
            <h4>Transformation Services</h4>
          </strong>
        </Col>
        <Col md={7}>
          <hr></hr>
        </Col>
        <Col sm={2}>
          <Button className="browse-more-btn">Browse more</Button>
        </Col>
      </Row>
      <Row
        style={{
          paddingTop: "20px",
          paddingBottom: "40px",
          flexWrap: "wrap",
          display: "flex",
        }}
      >
        {loadServiceCards()}
      </Row>
      <Row className="mt-3 text-center">
        <Col text-center>
          <Button
            id="load-more-btn"
            variant="secondary"
            onClick={() => handleMoreCards()}
          >
            Load more services
          </Button>
        </Col>
      </Row>
    </div>
  );
};