import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const OrgOwnedSolutionsPage = ({orgName}) => {
    return (
        <div>
            <Container>
                <Row>
                    <strong><h4>{orgName}'s solutions:</h4></strong>
                </Row>
            </Container>
        </div>
    )
}