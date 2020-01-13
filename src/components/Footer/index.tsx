import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


export const Footer: React.FC = () => (<Navbar collapseOnSelect className="fixed-bottom" expand="lg" bg="dark" variant="dark">

<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav" className="text-white">
  All rights are reserved
</Navbar.Collapse>
</Navbar>
)