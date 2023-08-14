import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './assets/css/header.css';
const Header = () => {
  return /*#__PURE__*/React.createElement(Navbar, {
    className: "navbar-onthego sticky",
    expand: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Navbar.Brand, {
    href: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/logo.png",
    alt: "Image 1"
  })), /*#__PURE__*/React.createElement(Navbar.Toggle, {
    "aria-controls": "navbar-nav"
  }), /*#__PURE__*/React.createElement(Navbar.Collapse, {
    id: "navbar-nav"
  }, /*#__PURE__*/React.createElement(Nav, {
    className: "ml-auto"
  }, /*#__PURE__*/React.createElement(Nav.Link, {
    as: Link,
    to: "/"
  }, "Home"), /*#__PURE__*/React.createElement(Nav.Link, {
    as: Link,
    to: "/about"
  }, "About"), /*#__PURE__*/React.createElement(Nav.Link, {
    as: Link,
    to: "/contact"
  }, "Contact"), /*#__PURE__*/React.createElement(Nav.Link, {
    className: "btn-login btn",
    href: "/login"
  }, "Login")))));
};
export default Header;