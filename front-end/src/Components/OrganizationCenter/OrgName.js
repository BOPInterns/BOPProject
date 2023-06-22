import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './OrgName.css';
import Badge from 'react-bootstrap/Badge';
import TagInput from '../TagInput';

export const OrgName = ({name, endorsements, statement, interests}) => {
    return (
        <Card
            className="org-name-card"
            style={{ height: 500
            }}
        >
            <Card.Title className="mt-3 mx-3"><strong><h3>{name}</h3></strong></Card.Title>
            <Card.Subtitle className="mx-3">
                <Row className="mt-3">
                    <Col sm={5}>
                        <strong>Endorsements</strong>
                        <br/>
                        <strong
                            style={{
                                color: '#f54547',
                            }}
                        >
                        <i class="fa-regular fa-heart"></i> { }
                        997</strong> {endorsements}
                    </Col>
                    <Col className="mt-2"
                        style={{
                            textAlign: 'end',
                        }}
                    >
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
                {statement}
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
                    {interests.map((interest, index) => (
                    <Badge
                        key={index}
                        variant="secondary"
                        className="mr-2 mb-2 bg-secondary"
                        style={{marginRight: 2}}
                    >{interest}</Badge>
                    ))}
                </Card.Body>
        </Card>
    )
}