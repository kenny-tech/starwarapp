import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Starwar App</Navbar.Brand>
            <Nav className="me-auto">
                <Form.Control type="text" placeholder="Search" style={{width: "400px"}} />
            </Nav>
      </Navbar>
    )
}

export default Header;