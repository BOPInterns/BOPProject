import { NavigationBar } from './NavigationBar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const RegisterSuccess = () => {
    return (
        <div>
            <NavigationBar/>
            <Container>
                <Card>
                    <Card.Title className="text-center mt-3">
                        Account Created!
                    </Card.Title>
                    <hr></hr>
                    <Card.Body>
                        Congratulations! Welcome to BOPHub. Please click the button below to navigate back to the login page
                    </Card.Body>
                    <Button href='/login' variant="outline-success">
                        Back to Login
                    </Button>
                </Card>
            </Container>
        </div>
    )
}