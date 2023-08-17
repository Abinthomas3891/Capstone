import React from "react";
import Header from "./header.jsx";
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import './assets/css/style.css';
import Footer from "./footer.jsx";
class Aboutus extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
      className: "about-banner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "overlay"
    }), /*#__PURE__*/React.createElement("h1", null, "About us")), /*#__PURE__*/React.createElement(Container, {
      className: "pt-2 pb-2"
    }, /*#__PURE__*/React.createElement(Row, {
      className: "justify-content-center"
    }, /*#__PURE__*/React.createElement(Col, {
      md: 6,
      className: "contact-form"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../images/about1.jpg",
      alt: ""
    })), /*#__PURE__*/React.createElement(Col, {
      md: 6,
      className: "contact-form justify-content-center d-flex flex-column p-md-5"
    }, /*#__PURE__*/React.createElement("h1", null, "About Us"), /*#__PURE__*/React.createElement("p", null, "On-The-Go-Rentals is a website where people may rent houses. The website would place more of an emphasis on recent Canadian immigrants. Our aim is to make it easier for incoming students to identify housing choices based on their needs."), /*#__PURE__*/React.createElement("h1", {
      className: "pt-3"
    }, "Core Values"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Customer-centeric"), /*#__PURE__*/React.createElement("li", null, "Transparency"), /*#__PURE__*/React.createElement("li", null, "Commitment"), /*#__PURE__*/React.createElement("li", null, "Simplicity"))))), /*#__PURE__*/React.createElement("div", {
      className: "container-fluid bg-light"
    }, /*#__PURE__*/React.createElement(Container, {
      className: "pb-2"
    }, /*#__PURE__*/React.createElement(Row, {
      className: "justify-content-center"
    }, /*#__PURE__*/React.createElement(Col, {
      md: 6,
      className: "contact-form justify-content-center d-flex flex-column p-md-5"
    }, /*#__PURE__*/React.createElement("h1", null, "Mission"), /*#__PURE__*/React.createElement("p", null, "Our mission is to deliver excellent client service and to improve the environment and people's lives thus making a difference and adding value"), /*#__PURE__*/React.createElement("h1", {
      className: "pt-3"
    }, "Vision"), /*#__PURE__*/React.createElement("p", null, "Our vision is bringing together passion, people, technology, and real estate to revolutionise the property management industry. We set the bar for excellent customer service.")), /*#__PURE__*/React.createElement(Col, {
      md: 6,
      className: "contact-form"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../images/mission-vision.jpg",
      alt: ""
    }))))), /*#__PURE__*/React.createElement(Footer, null));
  }
}
export default Aboutus;