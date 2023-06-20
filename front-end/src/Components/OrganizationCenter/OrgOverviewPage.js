import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';
import './OrgName.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

export const OrgOverviewPage = ({presentation, focus, interests, opRegions, vidLink}) => {
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
                    <Image
                        src={require('../videoPlaceHolder.png')}
                    />
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
                        <strong>Fields of interest</strong>
                    </Col>
                    <Col className="text-end">
                        <strong>Translate: </strong>
                        Original
                    </Col>
                </Row>
                <Row>
                <Placeholder as="text" animation="glow">
                        <Placeholder xs={12}></Placeholder>
                        <Placeholder xs={12}></Placeholder>
                        <Placeholder xs={12}></Placeholder>
                        <Placeholder xs={12}></Placeholder>
                        <Placeholder xs={12}></Placeholder>
                    </Placeholder>
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
                <Row className="mx-4 mt-3">
                    <strong>Mentoring</strong>
                    <br/>
                    <Placeholder as="text" animation="glow">
                        <Placeholder xs={12}></Placeholder>
                        <Placeholder xs={12}></Placeholder>
                    </Placeholder>
                </Row>
                <Row className="justify-content-center mt-2">
                <Button
                        className="overview-offer-btn"
                    >
                        Ask for funding</Button>
                </Row>
                <Row className="mx-4 mt-3">
                    <strong>AI support</strong>
                    <br/>
                    <Placeholder as="text" animation="glow">
                        <Placeholder xs={12}></Placeholder>
                        <Placeholder xs={12}></Placeholder>
                    </Placeholder>
                </Row>
                <Row className="justify-content-center mt-2">
                <Button
                        className="overview-offer-btn"
                    >
                        Ask for AI support</Button>
                </Row>
                <Row className="mx-4 mt-3">
                    <strong>Scaling guidance</strong>
                    <br/>
                    <Placeholder as="text" animation="glow">
                        <Placeholder xs={12}></Placeholder>
                        <Placeholder xs={12}></Placeholder>
                    </Placeholder>
                </Row>
                <Row className="justify-content-center mt-2">
                <Button
                        className="overview-offer-btn"
                    >
                        Ask for scaling guidance</Button>
                </Row>
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
                                <Placeholder as="text" animation="glow">
                                    <Placeholder xs={12}></Placeholder>
                                    <Placeholder xs={12}></Placeholder>
                                </Placeholder>
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
                    {opRegions}
                </Row>
                <Image
                    src={require('./OrgOverviewMap.png')}
                    style={{
                        height: 500,
                        width: 900
                    }}
                />
                <Row>
                    <strong>Recently worked on:</strong>
                    <br/>
                    <body>Below are some of the projects that this organization has reccently worked on.</body>
                </Row>
                <Row className="mt-3 mb-3">
                    <Card className="flex-row">
                        <Card.Img
                        src={require('./lightbulb.png')}   
                        style={{
                            height:200,
                            width:325
                        }}                     
                        />
                        <Card.Body>
                            <Row>
                                <Col>
                                    <strong>Name of the campaign</strong>
                                    <br/>
                                    <Badge
                                        bg="secondary"
                                    >
                                        tagname
                                    </Badge>
                                    <Badge
                                        bg="secondary"
                                    >
                                        tagname
                                    </Badge>
                                    <Badge
                                        bg="secondary"
                                    >
                                        tagname
                                    </Badge>
                                    <br/>
                                    <p>Number of actors involved: <strong>10</strong></p>
                                </Col>
                                <Col sm={4} className="text-end">
                                <p class="text-muted">Status: 
                                    <Badge>
                                        Project
                                    </Badge>
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className="mt-3 mb-3">
                    <Card className="flex-row">
                        <Card.Img
                        src={require('./lightbulb.png')}   
                        style={{
                            height:200,
                            width:325
                        }}                     
                        />
                        <Card.Body>
                            <Row>
                                <Col>
                                    <strong>Name of the campaign</strong>
                                    <br/>
                                    <Badge
                                        bg="secondary"
                                    >
                                        tagname
                                    </Badge>
                                    <Badge
                                        bg="secondary"
                                    >
                                        tagname
                                    </Badge>
                                    <Badge
                                        bg="secondary"
                                    >
                                        tagname
                                    </Badge>
                                    <br/>
                                    <p>Number of actors involved: <strong>10</strong></p>
                                </Col>
                                <Col sm={4} className="text-end">
                                <p class="text-muted">Status: 
                                    <Badge>
                                        Project
                                    </Badge>
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
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