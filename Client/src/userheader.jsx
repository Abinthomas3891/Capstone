import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown  } from 'react-bootstrap';
import './assets/css/header.css';

import userpic from './assets/images/user.png';



const userHeader = () => {


    const user = {
        username: 'JohnDoe',
        profilePic: userpic,
    };

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
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/blogpage">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      
            <Dropdown alignRight>
              <Dropdown.Toggle variant="link" id="user-dropdown">
                <img src={user.profilePic} alt="Profile Pic" className="profile-pic" />
                {user.username}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profileDetails">Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/postCreation">Add Property</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default userHeader;
