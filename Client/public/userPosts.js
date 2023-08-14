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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "container-fluid bg-light p-5"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "card-view"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head-link"
  }, /*#__PURE__*/React.createElement("h4", null, "My Rental Properties")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(Link, {
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