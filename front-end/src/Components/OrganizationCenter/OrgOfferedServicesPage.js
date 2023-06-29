import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export const OrgOfferedServicesPage = ({orgName}) => {
    return (
        <div>
            <Container>
                <Row>
                    <strong><h4>{orgName}'s offered services:</h4></strong>
                </Row>
            </Container>
        </div>
    )
}