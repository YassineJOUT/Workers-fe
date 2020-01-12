import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


export const Header = () => (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="">Workers</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="#features"></Nav.Link>
    <Nav.Link href="#pricing"></Nav.Link>
    
  </Nav>
  <Nav>
    <Nav.Link href="/login">Sign In</Nav.Link>
    <Nav.Link eventKey={2} href="/register">
      Sign Up
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
)