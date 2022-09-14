import React from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Starwar App</Navbar.Brand>
            <Nav className="me-auto">
                <Form.Control type="text" placeholder="Search" style={{width: "400px"}} />
            </Nav>
            </Container>
      </Navbar>
    )
}

export default Header;