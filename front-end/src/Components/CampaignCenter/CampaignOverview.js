import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';



export const CampaignOverview = ({vidLink, description, mission, goals, milestones, location}) => {

    useEffect(() => {
        console.log(goals);
    })

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
                {/* <Row className="mt-5">
                    <Col>
                        <strong>Goals</strong>
                    </Col>
                    <Col className="text-end">
                        <strong>Translate: </strong>
                        Original
                    </Col>
                </Row>
                goals.forEach(() {
                    <div>
                        <Row className="mx-4 mt-3">
                            <strong>{element}</strong>
                        </Row>
                    </div>
                })
                {goals.map((goal) => {
                    <div>
                        <Row className="mx-4 mt-3">
                            Goal {goals.indexOf(goal) + 1}: 
                            <strong>{goal}</strong>
                        </Row>
                    </div>
                })} */}
            </Container>
        </div>
    )
}