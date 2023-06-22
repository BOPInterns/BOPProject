import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CampaignCard } from "../CampaignCenter/CampaignCard";
import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';


export const CampaignComp = () => {
  const [currLoadedCards, setCurrLoadedCards] = useState(8);
  const [campaignData, setCampaignData] = useState([]);

  useEffect(() => {
    //for campaigns
    fetch("http://localhost:9000/get-campaign-data", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        orgFilter: localStorage.getItem("orgFilter"),
        nameFilter: localStorage.getItem("nameFilter"),
        tagsFilter: localStorage.getItem("tagsFilter"),
        phaseFilter: localStorage.getItem("phaseFilter"),
        regDateFilter: localStorage.getItem("regDateFilter")
        // tagsFilter: JSON.parse(localStorage.getItem("tagsFilter"))
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.data) setCampaignData(data.data);
        else setCampaignData([]);
      });
  }, []);

  const handleMoreCards = () => {
    if (currLoadedCards < campaignData.length) {
      setCurrLoadedCards(currLoadedCards + 8);
    } else {
      const button = document.getElementById("load-more-btn");
      button.disabled = true;
    }
  };

  const loadCampaignData = (i) => {
    return campaignData[i];
  };
  
  const loadCampaignCards = () => {
    return campaignData.slice(0, currLoadedCards).map((data, index) => (
      <Col key={index} xs={6} sm={4} md={3} lg={3}>
        <CampaignCard campData={loadCampaignData(index)}></CampaignCard>
      </Col>
    ));
  };
  
  return (
    <div>
      <Row className="mt-5">
        <Col lg={2}>
          <strong>
            <h4>Campaigns</h4>
          </strong>
        </Col>
        <Col md={8}>
          <hr></hr>
        </Col>
        <Col sm={2}>
          <Button href='/create-campaign-introduction' className="browse-more-btn">Create</Button>
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
        {loadCampaignCards()}
      </Row>
      <Row className="mt-3 text-center">
        <Col text-center>
          <Button variant="secondary">Load more campaigns</Button>
        </Col>
      </Row>
    </div>
  );
};
