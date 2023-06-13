import Card from 'react-bootstrap/Card';

export const OrgGenInfo = () => {
    return (
        <Card>
            <Card.Title className="mt-3 mx-3">General Information</Card.Title>
            <Card.Body>
                Organization Type
                <br/>
                <strong>Startup</strong>
            </Card.Body>
            <Card.Body>
                Headquarters
                <br/>
                <strong>Wroclaw, Poland</strong>
            </Card.Body>
            <Card.Body>
                Website
                <br/>
                <strong>www.organization.com</strong>
            </Card.Body>
            <Card.Body>
                Number of Employees
                <br/>
                <strong>42</strong>
            </Card.Body>
            <Card.Body>
                On platform since
                <br/>
                <strong>2022</strong>
            </Card.Body>
        </Card>
    )
}