import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './OrgName.css';
import Badge from 'react-bootstrap/Badge';

export const OrgName = () => {
    return (
        <Card
            className="org-name-card"
            style={{ height: 500
            }}
        >
            <Card.Title className="mt-3 mx-3"><strong><h3>Name of the Organization</h3></strong></Card.Title>
            <Card.Subtitle className="mx-3">
                <Row className="mt-3">
                    <Col sm={5}>
                        <strong>Endorsements</strong>
                        <br/>
                        <i class="fa-regular fa-heart"></i>
                        <strong> 997</strong> endorsements
                    </Col>
                    <Col className="mt-2">
                        <Button
                            className="endorse-btn"
                        >
                            <strong>Endorse Organization</strong>
                        </Button>
                    </Col>
                </Row>
            </Card.Subtitle>
            <Card.Body className="mt-5 mb-3">
                <strong>Organization statement</strong>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt molestie tortor. Phasellus ut metus sed orci blandit gravida.
                <br/>
                <Button
                    className="contact-org-btn"
                >
                    <strong>Contact Organization</strong>
                    </Button>
                </Card.Body>
                <Card.Body className="mt-5">
                    <strong>Interested in:</strong>
                    <br/>
                    <Badge
                        bg="secondary"
                    >tagname
                    </Badge>
                    <Badge
                        bg="secondary"
                    >tagname
                    </Badge>
                    <Badge
                        bg="secondary"
                    >tagname
                    </Badge>
                    <Badge
                        bg="secondary"
                    >tagname
                    </Badge>
                </Card.Body>
        </Card>
    )
}