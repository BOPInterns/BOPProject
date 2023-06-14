import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Placeholder from 'react-bootstrap/Placeholder';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';

export const SolutionOverview = () => {
    return (
        <div>
            <Row>
                <Col>
                    <strong>Solution overview</strong>
                </Col>
                <Col className="text-end">
                    <strong>Translate:</strong> original
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
            <Row>
                <strong>
                    Relation to SDG categories/tags
                </strong>
            </Row>
                <Badge
                    bg='dark'
                >
                    tagname
                </Badge>
                <Badge
                    bg='dark'
                >
                    tagname
                </Badge>
                <Badge
                    bg='dark'
                >
                    tagname
                </Badge>
                <Badge
                    bg='dark'
                >
                    tagname
                </Badge>
            <Row>
                <Col>
                    <strong>Mission</strong>
                </Col>
                <Col className="text-end">
                    <strong>Translate:</strong> original
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Placeholder as="text" animation="glow">
                        <Placeholder xs={12}></Placeholder>
                        <Placeholder xs={12}></Placeholder>
                        <Placeholder xs={12}></Placeholder>
                        <Placeholder xs={12}></Placeholder>
                        <Placeholder xs={12}></Placeholder>
                        <Placeholder xs={12}></Placeholder>
                        <Placeholder xs={12}></Placeholder>
                        <Placeholder xs={12}></Placeholder>
                        <Placeholder xs={12}></Placeholder>

                    </Placeholder>
                </Col>
                <Col>
                    <Image
                        style={{
                            height: 225,
                            width: 295,
                        }}
                        src={require('../videoPlaceHolder.png')}
                    />
                </Col>
            </Row>
            <Row>
                <strong>Focus area</strong>
            </Row>
        </div>
    )
}