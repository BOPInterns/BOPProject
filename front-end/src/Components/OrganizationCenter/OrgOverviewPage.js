import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';
import './OrgName.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import { useState, useEffect } from 'react';
import { VectorMap } from "react-jvectormap";
import { OrgCampaignOwner } from './OrgCampaignOwner';

export const OrgOverviewPage = ({presentation, focus, opRegions, vidLink, campData}) => {
    const { getCode, getName, getData } = require("country-list");
    const [ offerData, setOfferData] = useState([]);    

    const orgName = "Interns For Higher Pay";
    useEffect(() => {
        //for offers
        fetch("http://localhost:9000/get-offer-data", {
            method: "POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({org: orgName}) //change this back to name passed in at top when done w tesitng
        }).then((res) => res.json()) 
        .then((data) => {
            setOfferData(data.data);
        });
    }, [])

    const getMapData = () => {
        var res  = {};
        for(let i = 0; i < opRegions.length; i++){
            const code = getCode(opRegions[i])
            res[code] = Math.floor(Math.random() * 1048575);
        }
        return res;
    }
    
    const getList = () => {
        var res = "";
        res = opRegions.join(', ');
        return res;
    }
  


    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <strong>Presentation</strong>
                    </Col>
                    <Col className="text-end">
                        <strong>Translate: </strong>
                        Original
                    </Col>
                </Row>
                <Row>
                    {presentation}
                </Row>
                <Row>
                    <div className='ratio ratio-16x9'>
                        <iframe src={vidLink.replace("watch?v=", "embed/")} title="Presentation Video" allowFullScreen></iframe>
                    </div>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <strong>Focus</strong>
                    </Col>
                    <Col className="text-end">
                        <strong>Translate: </strong>
                        Original
                    </Col>
                </Row>
                <Row>
                    {focus}
                </Row>
                <Row className="mt-5">
                <Col>
                        <strong>Offer</strong>
                    </Col>
                    <Col className="text-end">
                        <strong>Translate: </strong>
                        Original
                    </Col>
                </Row>                
                {offerData.map((offer) => (
                    <div>
                    <Row className="mx-4 mt-3">
                        <strong>{offer.name}</strong>
                        <br/>
                        {offer.description}
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Button
                            className="overview-offer-btn"
                        >Ask for {offer.name}</Button>
                    </Row>
                    </div>
                ))}



                <Row className="mt-5 mb-5">
                    <Card>
                        <Row>
                            <Col sm={3} className="">
                                <Image
                                    src={require('./OrgOverviewFullOffer.png')}
                                    style={{height: 150, width: 150}}
                                />
                            </Col>
                            <Col lg={9}>
                                <strong><h3>Interested in a full offer?</h3></strong>
                                Click below to view the full list of offers that "{orgName}" is currently providing 
                                and the details in which that offer is provided .
                                <div className="text-center mt-2">
                                <Button
                                    className="overview-offer-btn"
                                >Show full offer of organization services</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Row>
                <Row className="mt-5">
                    <strong>Operating regions</strong>
                    <br/>
                    {getList()} 
                    <footer className='form-subtext'>Select other countries to see their borders.</footer>
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


                <Row>
                    <strong>Recently worked on:</strong>
                    <br/>
                    <body>Below are some of the projects that this organization has reccently worked on.</body>
                </Row>
                
                <OrgCampaignOwner campData={campData}/>


                <Row className="justify-content-center mt-2">
                    <Button
                        className="overview-offer-btn"
                    >
                        Show all campaigns organization works with
                    </Button>
                </Row>
                <Row className="mt-5">
                    <Col sm={3}>
                        <Image 
                            src={require('./reachUs.png')}
                            style={{
                                height:150,
                                width:150,
                            }}
                        />
                    </Col>
                    <Col>
                        <strong>Reach us!</strong>
                        <br/>
                        <body>Feel free to use the Button below for any feedback that you might want to give!</body>
                        <div class="text-center mt-2">
                        <Button
                            className="reach-us-btn"
                        >
                            Reach us via contact form
                        </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}