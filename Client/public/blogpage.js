import React from "react";
import Header from "./header.jsx";
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import './style.css';
import Footer from "./footer.jsx";
class blogpage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
      className: "blog-banner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "overlay"
    }), /*#__PURE__*/React.createElement("h1", null, "Blogs")), /*#__PURE__*/React.createElement(Container, {
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
    }, /*#__PURE__*/React.createElement("h1", null, "Blogs"), /*#__PURE__*/React.createElement("p", null, "\"Welcome to Our Rental Home Blog: Inspiring Spaces and Memorable Stays\"."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "posts"
    }, posts.map(post => /*#__PURE__*/React.createElement("div", {
      className: "post",
      key: post.id
    }, /*#__PURE__*/React.createElement("h2", null, post.title), /*#__PURE__*/React.createElement("p", null, post.content)))))))), /*#__PURE__*/React.createElement(Footer, null));
  }
}
export default blogpage;