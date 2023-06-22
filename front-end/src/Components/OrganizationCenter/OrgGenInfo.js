import Card from 'react-bootstrap/Card';

export const OrgGenInfo = ({type, hq, webLink, numEmployees, dateJoined}) => {

    return (
        <Card>
            <Card.Title className="mt-3 mx-3">General Information</Card.Title>
            <Card.Body>
                Organization Type
                <br/>
                <strong>{type}</strong>
            </Card.Body>
            <Card.Body>
                Headquarters
                <br/>
                <strong>{hq}</strong>
            </Card.Body>
            <Card.Body>
                Website
                <br/>
                <strong>{webLink}</strong>
            </Card.Body>
            <Card.Body>
                Number of Employees
                <br/>
                <strong>{numEmployees}</strong>
            </Card.Body>
            <Card.Body>
                On platform since
                <br/>
                <strong>
                    {dateJoined}
                </strong>
            </Card.Body>
        </Card>
    )
}