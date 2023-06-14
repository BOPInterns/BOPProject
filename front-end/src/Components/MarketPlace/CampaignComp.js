import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

export const CampaignComp = () => {
    
    const [ campaignData, setCampaignData ] = useState([]);
    
    useEffect(() => {
        //for campaigns
        console.log(`orgFilter${localStorage.getItem('orgFilter')}orgFilter`);
        fetch("http://localhost:9000/get-campaign-data", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                orgFilter: localStorage.getItem('orgFilter'),
                campaignFilter: localStorage.getItem('campaignFilter'),
                // roleFilter: localStorage.getItem('roleFilter'),
                // statusFilter: localStorage.getItem('statusFilter'),
                // regDateFilter: localStorage.getItem('regDateFilter'),
                // tagsFilter: JSON.parse(localStorage.getItem('tagsFilter'))
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.data)
                setCampaignData(data.data);
            else 
                setCampaignData([]);
        });
    }, []);
    
        const loadData = (i) => {
        return campaignData[i];
    }

    const loadCards = () => {
        var rows = [];
        var fulls = Math.floor(campaignData.length / 4); 
        var remains = campaignData.length % 4;

        var num = 0;
        for(let i = 0; i < fulls; i++){
            rows.push(
                <Row>
                    <Col sm={3}><CampaignCard campData={loadData(num)}/></Col>
                    <Col sm={3}><CampaignCard campData={loadData(num+1)}/></Col>
                    <Col sm={3}><CampaignCard campData={loadData(num+2)}/></Col>
                    <Col sm={3}><CampaignCard campData={loadData(num+3)}/></Col>
                </Row>
            );
            num += 4;
        }
        if(remains == 3){
            rows.push(
                <Row className="mt-3">
                    <Col><CampaignCard campData={loadData(num)}/></Col>
                    <Col><CampaignCard campData={loadData(num+1)}/></Col>
                    <Col><CampaignCard campData={loadData(num+2)}/></Col>
                    <Col></Col>
                </Row>
            );
        }
        else if(remains == 2){
            rows.push(
                <Row className="mt-3">
                    <Col><CampaignCard campData={loadData(num)}/></Col>
                    <Col><CampaignCard campData={loadData(num+1)}/></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            );
        }
        else if(remains == 1){
            rows.push(
                <Row className="mt-5">
                    <Col><CampaignCard campData={loadData(num)}/></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            );
        }
        return rows;   
    }
    
    return (
        <div>
            <Row className="mt-5">
                    <Col lg={2}>
                        <strong><h4>Campaigns</h4></strong>
                    </Col>
                    <Col md={8}>
                        <hr></hr>
                    </Col>
                    <Col sm={2}>
                    <Button
                        className="browse-more-btn"
                    >
                        Browse more
                    </Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    {loadCards()}
                </Row>
                <Row className="mt-3 text-center">
                    <Col text-center>
                    <Button
                        variant="secondary"
                    >
                        Load more campaigns
                    </Button>
                    </Col>
            </Row>
        </div>
    )
}