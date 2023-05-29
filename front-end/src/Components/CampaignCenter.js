import { NavigationBar } from './NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const CampaignCenter = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            
            <Container>
                <Row className="justify-content-center">
                    You are currently browsing the marketplace as:
                    <Button href="/create-campaign-introduction">Create a Campaign</Button>
                </Row>
                <Row className="">
                    <DropdownButton
                        title="Current Organizaiton"
                        id="CurrentOrganizationDropdown"
                        className="text-center"
                    >
                    <Form.Control 
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Type to search..."
                        /* Need to program search functionality*/
                    />
                    <Dropdown.Item>
                        Name of Organization #1
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="/register">
                        Name of Campagin #1
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Name of Campaign #2
                    </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item>
                        Name of Organization #2
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="/register">
                        Name of Campagin #1
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Name of Campaign #2
                    </Dropdown.Item>
                    </DropdownButton>
                </Row>
                <Row className="justify-content-left">
                    Campaigns
                </Row>
                <Row>
                    <Column>
                        <Card style={{width: '12rem'}}>
                            <Card.Body>
                                <Card.Title>Name of the Campaign</Card.Title>
                                <Card.Text>[no.%] match</Card.Text>
                                <Badge bg="secondary">tags</Badge>
                                <Badge bg="secondary">tags</Badge>
                                <Badge bg="secondary">tags</Badge>
                            </Card.Body>
                        </Card>
                    </Column>
                    <Column>
                        <Card style={{width: '12rem'}}>
                            <Card.Body>
                                <Card.Title>Name of the Campagin</Card.Title>
                            </Card.Body>
                        </Card>
                    </Column>
                    <Column>
                            <Card style={{width: '12rem'}}>
                            <Card.Body>
                                <Card.Title>Name of the Campagin</Card.Title>
                            </Card.Body>
                        </Card>
                    </Column>
                    <Column>
                        <Card style={{width: '12rem'}}>
                            <Card.Body>
                                <Card.Title>Name of the Campagin</Card.Title>
                            </Card.Body>
                        </Card>
                    </Column>
                </Row>
                <Row>
                <Column>
                        <Card style={{width: '12rem'}}>
                            <Card.Body>
                                <Card.Title>Name of the Campaign</Card.Title>
                            </Card.Body>
                        </Card>
                    </Column>
                    <Column>
                        <Card style={{width: '12rem'}}>
                            <Card.Body>
                                <Card.Title>Name of the Campagin</Card.Title>
                            </Card.Body>
                        </Card>
                    </Column>
                    <Column>
                            <Card style={{width: '12rem'}}>
                            <Card.Body>
                                <Card.Title>Name of the Campagin</Card.Title>
                            </Card.Body>
                        </Card>
                    </Column>
                    <Column>
                        <Card style={{width: '12rem'}}>
                            <Card.Body>
                                <Card.Title>Name of the Campagin</Card.Title>
                            </Card.Body>
                        </Card>
                    </Column>
                </Row>
            </Container>
        </>
    )
}