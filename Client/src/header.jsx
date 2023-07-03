import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './header.css';

const Header = () => {
  return (
    <Navbar className="navbar-onthego sticky" expand="lg">
      <div className="container">
        <Navbar.Brand href="/">
          <img src="images/logo.png" alt="Image 1" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/postCreation">Post Ad</Nav.Link>
            <Nav.Link className="btn-login btn" href="#">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
