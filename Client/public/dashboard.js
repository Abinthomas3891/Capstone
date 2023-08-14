import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from "./userheader.jsx";
import Footer from "./footer.jsx";
import './assets/css/style.css';
import post1 from './assets/images/post4.jpg';
import post2 from './assets/images/post2.jpg';
import post3 from './assets/images/post3.jpg';
const Dashboard = () => {
  // Sample data for house rentals
  const houseRentals = [{
    id: 1,
    title: 'Cozy Apartment',
    location: 'City Center',
    price: '$1000',
    image: post1
  }, {
    id: 2,
    title: 'Luxury Villa',
    location: 'Beachfront',
    price: '$3000',
    image: post2
  }, {
    id: 3,
    title: 'Spacious House',
    location: 'Suburb',
    price: '$2000',
    image: post3
  }];

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
  }, /*#__PURE__*/React.createElement("h1", null, "Hello! ", user.name, " ", /*#__PURE__*/React.createElement("span", null, "Welcome to your dashboard."), " ")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("p", null, "Phone"), /*#__PURE__*/React.createElement("h6", null, user.phoneNumber)))))))), /*#__PURE__*/React.createElement("div", {
    className: "card-view"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head-link"
  }, /*#__PURE__*/React.createElement("h4", null, "My Rental Properties"), /*#__PURE__*/React.createElement(Link, {
    to: "/userPosts"
  }, "View All")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(Link, {
    to: "/postCreation",
    className: "primary-btn btn"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-plus"
  }), " Add Property"), /*#__PURE__*/React.createElement(Row, null, houseRentals.map(rental => /*#__PURE__*/React.createElement(Col, {
    key: rental.id,
    md: 4,
    sm: 4,
    className: "pb-4"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Img, {
    variant: "top",
    src: rental.image
  }), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Card.Title, null, rental.title), /*#__PURE__*/React.createElement(Card.Text, null, rental.location), /*#__PURE__*/React.createElement(Card.Text, null, rental.price))))))))), /*#__PURE__*/React.createElement(Footer, null));
};
export default Dashboard;