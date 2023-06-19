import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { SolutionCard } from './SolutionCard';



export const SolutionComp = () => {
    
    const [ currLoadedCards, setCurrLoadedCards ] = useState(8);
    const [ solutionData, setSolutionData ] = useState([]);
    
    useEffect(() => {
        //for solutions
        fetch("http://localhost:9000/get-solution-data", {
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
              regDateFilter: localStorage.getItem("regDateFilter"),
              // tagsFilter: JSON.parse(localStorage.getItem('tagsFilter'))
            }),
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.data) setSolutionData(data.data);
            else setSolutionData([]);
        });
    }, []);
    
    const handleMoreCards = () => {
        if(currLoadedCards < solutionData.length) {
            setCurrLoadedCards(currLoadedCards + 8);
        }   else {
            const button = document.getElementById('load-more-btn');
            button.disabled = true;
        }
    }
    
    const loadSolutionData = (i) => {
        return solutionData[i];
    }
    
    const loadSolutionCards = () => {
        return solutionData.slice(0, currLoadedCards).map((data, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={3}>
                <SolutionCard solData={loadSolutionData(index)}></SolutionCard>
            </Col>
        ));
    };

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
                <Row className="d-flex flex-wrap">
                    {loadSolutionCards()}
                </Row>
                <Row className="mt-3 text-center">
                    <Col text-center>
                    <Button
                        variant="secondary"
                        id="load-more-btn"
                        onClick={() => handleMoreCards()}
                    >
                        Load more solutions
                    </Button>
                    </Col>
                </Row>
        </div>
    )
}