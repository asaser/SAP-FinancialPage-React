import React from 'react';
import './Navigation.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, Navbar } from 'react-bootstrap';

function Navigation() {
    return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#Home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-burger"></Navbar.Toggle>
          <Navbar.Collapse id="navbar-burger">
            <Nav className="ml-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Service">Service</Nav.Link>
              <Nav.Link href="#Description">Description</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
    )
}

export default Navigation;
