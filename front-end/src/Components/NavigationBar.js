import Navbar from 'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export const NavigationBar = () => {
    const auth = localStorage.getItem('loginState');
    const user = JSON.parse(localStorage.getItem('userObj'));
    
    const handleSignout = () => {
        localStorage.removeItem('loginState');
        localStorage.removeItem('userObj');
        window.location.href='/login';
    }
    return(
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/" >
                            <img height="65" width="115" src="https://images.squarespace-cdn.com/content/v1/60e57a13579c8f0509ce7237/03227bce-9951-411b-9f7d-42875ddb8933/New+header+logo.png?format=1500w" alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="">
                        <Nav.Link href="/campaign-center">Campaign Center</Nav.Link>
                        <Nav.Link href="/">Explore</Nav.Link>
                        <Nav.Link href="/">Learn</Nav.Link>
                        <Nav.Link href="/">Become</Nav.Link>
                        <Nav.Link href="/">About us</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className=""> 
                    { auth ? <>                        
                        <Nav className='ms-auto'>
                            <Nav.Link href="/my-account">Welcome: { user.firstName + " " + user.lastName }</Nav.Link>
                            <Nav.Link onClick={handleSignout}>Logout</Nav.Link>
                        </Nav>
                        </> : 
                        <Nav className='ms-auto'>
                        <Nav.Link className="loginButton" href="/login">Login</Nav.Link>
                        <Nav.Link className="registerButton" href="/register">Register</Nav.Link>
                        </Nav>
                    }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}