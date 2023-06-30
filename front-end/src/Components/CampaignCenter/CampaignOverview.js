import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { VectorMap } from "react-jvectormap";



export const CampaignOverview = ({vidLink, description, mission, goals, milestones, location}) => {
    const { getCode, getName, getData } = require("country-list");
    let goalData = [];
    let milestoneData = [];

    goals.forEach((goal, index) => {
        goalData.push(
            <div>
                <Row>
                    <p>Goal {index + 1}: <strong>{goal}</strong></p>
                </Row>
            </div>
        );
    });

    milestones.forEach((milestone, index) => {
        milestoneData.push(
            <div>
                <Row>
                    <p>Milestone {index + 1}: <strong>{milestone}</strong></p>
                </Row>
            </div>
        )
    });

    const getMapData = () => {
        var res  = {};
        const code = getCode(location);
        res[code] = Math.floor(Math.random() * 1048575);
        return res;
    }

    return (
        <div>
            <Container>
                <Row>
                    <div className='ratio ratio-16x9'>
                        <iframe 
                           src={vidLink.replace("watch?v=", "embed/")}
                             title="Presentation Video" 
                           allowFullScreen>
                       </iframe>
                   </div>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <strong>Campaign Description</strong>
                    </Col>
                    <Col className="text-end">
                        <strong>Translate: </strong>
                        Original
                    </Col>
                </Row>
                <Row>
                    {description}
                </Row>
                <Row className="mt-5">
                    <Col>
                        <strong>Campaign Mission</strong>
                    </Col>
                    <Col className="text-end">
                        <strong>Translate: </strong>
                        Original
                    </Col>
                </Row>
                <Row>
                    {mission}
                </Row>
                <Row className="mt-5">
                    <Col>
                        <strong>Goals</strong>
                    </Col>
                    <Col className="text-end">
                        <strong>Translate: </strong>
                        Original
                    </Col>
                </Row>
                <Row>
                    {goalData.length ? goalData : "None listed"}
                </Row>
                <Row className="mt-5">
                    <Col>
                        <strong>Milestones</strong>
                    </Col>
                    <Col className="text-end">
                        <strong>Translate: </strong>
                        Original
                    </Col>
                </Row>
                <Row>
                    {milestoneData.length ? milestoneData : "None listed"}
                </Row>
                <Row className="mt-5">
                    <Col>
                        <strong>Location</strong>
                        <footer className='form-subtext'>Select other countries to see their borders.</footer>
                    </Col>
                    <Col className="text-end">
                        <strong>Translate: </strong>
                        Original
                    </Col>
                </Row>
                <Row>
                    <p>
                        Campaign owner would like to introduce final outcomes in:
                        <strong> {location}</strong>
                    </p>
                </Row>
                
                <div>
                <VectorMap
                    map={"world_mill"}
                    backgroundColor="transparent" //change it to ocean blue: #0077be
                    zoomOnScroll={false}
                    containerStyle={{
                    width: "100%",
                    height: "520px"
                    }}
                    containerClassName="map"
                    regionStyle={{
                    initial: {
                        fill: "#e4e4e4",
                        "fill-opacity": 0.9,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                    },
                    hover: {
                        "fill-opacity": 0.8,
                        cursor: "pointer"
                    },
                    selectedHover: {}
                    }}
                    regionsSelectable={true}
                    series={{
                    regions: [
                        {
                        values: getMapData(), //this is your data
                        scale: ["#146804", "#ff0000"], //your color game's here
                        normalizeFunction: "polynomial"
                        }
                    ]
                    }}
                />
                </div>

                <Row className="mt-5">
                    <Col sm={3}>
                        <Image 
                            src={require('./participation.png')}
                            style={{
                                height:150,
                                width:150,
                            }}
                        />
                    </Col>
                    <Col>
                        <strong>Interested in participation?</strong>
                        <br/>
                        <body>Filler text</body>
                        <div class="text-center mt-2">
                        <Button className="participate-btn">
                            Participate in this campaign
                        </Button>
                        <strong> </strong>
                        <Button className="contact-btn">
                            Contact the campaign owner
                        </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}