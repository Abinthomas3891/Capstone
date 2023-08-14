import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import './assets/css/header.css';
import userpic from './assets/images/user.png';
const userHeader = () => {
  const user = {
    username: 'JohnDoe',
    profilePic: userpic
  };
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
    to: "/dashboard"
  }, "Dashboard"), /*#__PURE__*/React.createElement(Nav.Link, {
    as: Link,
    to: "/about"
  }, "About"), /*#__PURE__*/React.createElement(Nav.Link, {
    as: Link,
    to: "/contact"
  }, "Contact"), /*#__PURE__*/React.createElement(Dropdown, {
    alignRight: true
  }, /*#__PURE__*/React.createElement(Dropdown.Toggle, {
    variant: "link",
    id: "user-dropdown"
  }, /*#__PURE__*/React.createElement("img", {
    src: user.profilePic,
    alt: "Profile Pic",
    className: "profile-pic"
  }), user.username), /*#__PURE__*/React.createElement(Dropdown.Menu, null, /*#__PURE__*/React.createElement(Dropdown.Item, {
    as: Link,
    to: "/profileDetails"
  }, "Profile"), /*#__PURE__*/React.createElement(Dropdown.Divider, null), /*#__PURE__*/React.createElement(Dropdown.Item, {
    as: Link,
    to: "/postCreation"
  }, "Add Property"), /*#__PURE__*/React.createElement(Dropdown.Divider, null), /*#__PURE__*/React.createElement(Dropdown.Item, {
    as: Link,
    to: "/logout"
  }, "Logout")))))));
};
export default userHeader;