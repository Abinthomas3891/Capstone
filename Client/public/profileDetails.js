import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Header from "./userheader.jsx";
import Footer from "./footer.jsx";
import './assets/css/style.css';
const Dashboard = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '1234567890'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "container-fluid bg-light p-5"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "card-view p-5 dash-head"
  }, /*#__PURE__*/React.createElement("h1", null, "Hello! ", user.name, " ")), /*#__PURE__*/React.createElement("div", {
    className: "card-view"
  }, /*#__PURE__*/React.createElement("h4", null, "User Information"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(Row, {
    className: "user-view"
  }, /*#__PURE__*/React.createElement(Col, {
    md: 12,
    sm: 12,
    className: "pb-4"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Row, {
    className: "user-view"
  }, /*#__PURE__*/React.createElement(Col, {
    md: 4,
    sm: 4,
    className: "user-label"
  }, /*#__PURE__*/React.createElement("p", null, "Name"), /*#__PURE__*/React.createElement("h6", null, user.name)), /*#__PURE__*/React.createElement(Col, {
    md: 4,
    sm: 4,
    className: "user-label"
  }, /*#__PURE__*/React.createElement("p", null, "Email"), /*#__PURE__*/React.createElement("h6", null, user.email)), /*#__PURE__*/React.createElement(Col, {
    md: 4,
    sm: 4,
    className: "user-label"
  }, /*#__PURE__*/React.createElement("p", null, "Phone"), /*#__PURE__*/React.createElement("h6", null, user.phoneNumber)))))))))), /*#__PURE__*/React.createElement(Footer, null));
};
export default Dashboard;