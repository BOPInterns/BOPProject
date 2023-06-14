import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { SolutionCard } from "./SolutionCard";



export const SolutionComp = () => {
    
    const [ solutionData, setSolutionData ] = useState([]);
    
    useEffect(() => {
        //for solutions
        fetch("http://localhost:9000/get-solution-data", {
            method: "GET",
        }).then((res) => res.json())
        .then((data) => {
            setSolutionData(data.data);
        });
    }, []);
    
    const loadSolutionData = (i) => {
        return solutionData[i];
    }

    const loadSolutionCards = () => {
        var rows = [];
        var fulls = Math.floor(solutionData.length / 4); 
        var remains = solutionData.length % 4;

        var num = 0;
        for(let i = 0; i < fulls; i++){
            rows.push(
                <Row>
                    <Col><SolutionCard solData={loadSolutionData(num)}/></Col>
                    <Col><SolutionCard solData={loadSolutionData(num+1)}/></Col>
                    <Col><SolutionCard solData={loadSolutionData(num+2)}/></Col>
                    <Col><SolutionCard solData={loadSolutionData(num+3)}/></Col>
                </Row>
            );
            num += 4;
        }
        if(remains == 3){
            rows.push(
                <Row className="mt-5">
                    <Col><SolutionCard solData={loadSolutionData(num)}/></Col>
                    <Col><SolutionCard solData={loadSolutionData(num+1)}/></Col>
                    <Col><SolutionCard solData={loadSolutionData(num+2)}/></Col>
                    <Col></Col>
                </Row>
            );
        }
        else if(remains == 2){
            rows.push(
                <Row className="mt-5">
                    <Col><SolutionCard solData={loadSolutionData(num)}/></Col>
                    <Col><SolutionCard solData={loadSolutionData(num+1)}/></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            );
        }
        else if(remains == 1){
            rows.push(
                <Row className="mt-5">
                    <Col><SolutionCard solData={loadSolutionData(num)}/></Col>
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
                        <strong><h4>Solutions</h4></strong>
                    </Col>
                    <Col md={8}>
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
                    {loadSolutionCards()}
                </Row>
                <Row className="mt-3 text-center">
                    <Col text-center>
                    <Button
                        variant="secondary"
                    >
                        Load more solutions
                    </Button>
                    </Col>
                </Row>
        </div>
    )
}