import React from 'react';
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import './assets/css/style.css';
class Contactus extends React.Component {
  onSubmit = event => {
    event.preventDefault();
  };
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
      className: "contact-banner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "overlay"
    }), /*#__PURE__*/React.createElement("h1", null, "Contact us")), /*#__PURE__*/React.createElement(Container, {
      style: {
        minHeight: '80vh'
      }
    }, /*#__PURE__*/React.createElement(Row, {
      className: "justify-content-center"
    }, /*#__PURE__*/React.createElement(Col, {
      md: 8,
      className: "contact-form"
    }, /*#__PURE__*/React.createElement("h3", null, "Send us a message"), /*#__PURE__*/React.createElement(Form, {
      name: "contact1",
      onSubmit: this.onSubmit
    }, /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(FormControl, {
      type: "text",
      name: "FirstName",
      placeholder: "Enter your first name"
    })), /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(FormControl, {
      type: "text",
      name: "LastName",
      placeholder: "Enter your last name"
    })), /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(FormControl, {
      type: "email",
      name: "Email",
      placeholder: "Enter your email address"
    })), /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(FormLabel, {
      id: "status-label"
    }, "Status"), /*#__PURE__*/React.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/React.createElement(Form.Check, {
      type: "radio",
      id: "sell-radio",
      label: "Sell",
      value: "Sell",
      name: "Status"
    }), /*#__PURE__*/React.createElement(Form.Check, {
      type: "radio",
      id: "rent-radio",
      label: "Rent",
      value: "Rent",
      name: "Status"
    }), /*#__PURE__*/React.createElement(Form.Check, {
      type: "radio",
      id: "other-radio",
      label: "Other",
      value: "Other",
      name: "Status"
    }))), /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(FormControl, {
      as: "textarea",
      name: "Message",
      placeholder: "Enter your message"
    })), /*#__PURE__*/React.createElement(Button, {
      className: "primary-btn btn",
      type: "submit"
    }, "Send a message"))), /*#__PURE__*/React.createElement(Col, {
      md: 4,
      className: "contact-form"
    }, /*#__PURE__*/React.createElement("h3", null, "Contact us"), /*#__PURE__*/React.createElement("h5", null, "Main Office"), /*#__PURE__*/React.createElement("ul", {
      className: "mb-5"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, " ", /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "290 5th Ave, ON 10N 0N1, Canada ")), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, " ", /*#__PURE__*/React.createElement("a", {
      href: "tel:+12269999999",
      target: "_self"
    }, "+1 226 999 99 99 ")), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, " ", /*#__PURE__*/React.createElement("a", {
      href: "tel:+12345678911",
      target: "_self"
    }, "+1 234 562 89 11 ")), " "), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, " ", /*#__PURE__*/React.createElement("a", {
      href: "mailto:info@onthego.com",
      target: "_self"
    }, "info@onthego.com ")), " ")), /*#__PURE__*/React.createElement("ul", {
      className: "mt-3 pt-5"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, "Monday \u2013 Friday 09:00 \u2013 20:30")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", null, "Saturday 09:00 \u2013 18:00")))))), /*#__PURE__*/React.createElement("div", {
      className: "google-map"
    }, /*#__PURE__*/React.createElement("iframe", {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.7827858968367!2d-80.4785174240522!3d43.38156567111644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c0abd9ee2ad3d%3A0xdfa301c471f1c73d!2s103%20Woodedge%20Cir%2C%20Kitchener%2C%20ON%20N2R%201R7!5e0!3m2!1sen!2sca!4v1686579486479!5m2!1sen!2sca",
      width: "100%",
      height: "450",
      style: {
        border: 0
      },
      allowFullScreen: "",
      loading: "lazy",
      referrerPolicy: "no-referrer-when-downgrade"
    })), /*#__PURE__*/React.createElement(Footer, null));
  }
}
export default Contactus;