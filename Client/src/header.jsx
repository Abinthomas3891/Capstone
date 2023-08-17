import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './assets/css/header.css';



const Header = () => {
let navigate= useNavigate();
const {user , logout} = useContext(AuthContext);
  const onLogout =()=>{
    logout();
    navigate('/');
  }

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
            <Nav.Link as={Link} to="/blogpage">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            
            { user?
            <>
            
            <Nav.Link className="btn-login btn" onClick={onLogout}>
                  Logout
                </Nav.Link>
                </>
            
            :
                <>
                <Nav.Link className="btn-login btn" href="/login">
                  Login
                </Nav.Link>
                </>
            }

            
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
