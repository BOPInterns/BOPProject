import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ServiceCard } from './ServiceCard';


export const ServiceComp = () => {
    
    const [ serviceData, setServiceData ] = useState([]);

    useEffect(() => {
        //for services
        fetch("http://localhost:9000/get-service-data", {
            method: "GET",
        }).then((res) => res.json())
        .then((data) => {
            setServiceData(data.data);
        });
    }, []);
    
    const loadServiceData = (i) => {
        return serviceData[i];
    }

    const loadServiceCards = () => {
        var rows = [];
        var fulls = Math.floor(serviceData.length / 4); 
        var remains = serviceData.length % 4;

        var num = 0;
        for(let i = 0; i < fulls; i++){
            rows.push(
                <Row>
                    <Col><ServiceCard servData={loadServiceData(num)}/></Col>
                    <Col><ServiceCard servData={loadServiceData(num+1)}/></Col>
                    <Col><ServiceCard servData={loadServiceData(num+2)}/></Col>
                    <Col><ServiceCard servData={loadServiceData(num+3)}/></Col>
                </Row>
            );
            num += 4;
        }
        if(remains == 3){
            rows.push(
                <Row className="mt-5">
                    <Col><ServiceCard servData={loadServiceData(num)}/></Col>
                    <Col><ServiceCard servData={loadServiceData(num+1)}/></Col>
                    <Col><ServiceCard servData={loadServiceData(num+2)}/></Col>
                    <Col></Col>
                </Row>
            );
        }
        else if(remains == 2){
            rows.push(
                <Row className="mt-5">
                    <Col><ServiceCard servData={loadServiceData(num)}/></Col>
                    <Col><ServiceCard servData={loadServiceData(num+1)}/></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            );
        }
        else if(remains == 1){
            rows.push(
                <Row className="mt-5">
                    <Col><ServiceCard servData={loadServiceData(num)}/></Col>
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
                    <Col lg={3}>
                        <strong><h4>Transformation Services</h4></strong>
                    </Col>
                    <Col md={7}>
                        <hr></hr>
                    </Col>
                    <Col sm={2}>
                    <Button
                        className='browse-more-btn'
                    >
                        Browse more
                    </Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    {loadServiceCards()}
                </Row>
                <Row className="mt-3 text-center">
                    <Col text-center>
                    <Button
                        variant="secondary"
                    >
                        Load more services
                    </Button>
                    </Col>
                </Row>
        </div>
    )
}