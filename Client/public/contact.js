<<<<<<< HEAD
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
=======
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _header = _interopRequireDefault(require("./header.jsx"));
var _footer = _interopRequireDefault(require("./footer.jsx"));
require("./style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Contactus = /*#__PURE__*/function (_React$Component) {
  _inherits(Contactus, _React$Component);
  var _super = _createSuper(Contactus);
  function Contactus() {
    var _this;
    _classCallCheck(this, Contactus);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (event) {
    event.preventDefault();
    });
    return _this;
  }
  _createClass(Contactus, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_header["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "contact-banner"
      }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "overlay"
      }), /*#__PURE__*/_react["default"].createElement("h1", null, "Contact us")), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Container, {
      style: {
        minHeight: '80vh'
      }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, {
      className: "justify-content-center"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
      md: 8,
      className: "contact-form"
      }, /*#__PURE__*/_react["default"].createElement("h3", null, "Send us a message"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form, {
      name: "contact1",
      onSubmit: this.onSubmit
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
      type: "text",
      name: "FirstName",
      placeholder: "Enter your first name"
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
      type: "text",
      name: "LastName",
      placeholder: "Enter your last name"
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
      type: "email",
      name: "Email",
      placeholder: "Enter your email address"
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormLabel, {
      id: "status-label"
      }, "Status"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "d-flex"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Check, {
      type: "radio",
      id: "sell-radio",
      label: "Sell",
      value: "Sell",
      name: "Status"
      }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Check, {
      type: "radio",
      id: "rent-radio",
      label: "Rent",
      value: "Rent",
      name: "Status"
      }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Check, {
      type: "radio",
      id: "other-radio",
      label: "Other",
      value: "Other",
      name: "Status"
      }))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
      as: "textarea",
      name: "Message",
      placeholder: "Enter your message"
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
      className: "primary-btn btn",
      type: "submit"
      }, "Send a message"))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
      md: 4,
      className: "contact-form"
      }, /*#__PURE__*/_react["default"].createElement("h3", null, "Contact us"), /*#__PURE__*/_react["default"].createElement("h5", null, "Main Office"), /*#__PURE__*/_react["default"].createElement("ul", {
      className: "mb-5"
      }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("p", null, " ", /*#__PURE__*/_react["default"].createElement("a", {
      href: "#"
      }, "290 5th Ave, ON 10N 0N1, Canada ")), " "), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("p", null, " ", /*#__PURE__*/_react["default"].createElement("a", {
      href: "tel:+12269999999",
      target: "_self"
      }, "+1 226 999 99 99 ")), " "), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("p", null, " ", /*#__PURE__*/_react["default"].createElement("a", {
      href: "tel:+12345678911",
      target: "_self"
      }, "+1 234 562 89 11 ")), " "), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("p", null, " ", /*#__PURE__*/_react["default"].createElement("a", {
      href: "mailto:info@onthego.com",
      target: "_self"
      }, "info@onthego.com ")), " ")), /*#__PURE__*/_react["default"].createElement("ul", {
      className: "mt-3 pt-5"
      }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("p", null, "Monday \u2013 Friday 09:00 \u2013 20:30")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("p", null, "Saturday 09:00 \u2013 18:00")))))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "google-map"
      }, /*#__PURE__*/_react["default"].createElement("iframe", {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.7827858968367!2d-80.4785174240522!3d43.38156567111644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c0abd9ee2ad3d%3A0xdfa301c471f1c73d!2s103%20Woodedge%20Cir%2C%20Kitchener%2C%20ON%20N2R%201R7!5e0!3m2!1sen!2sca!4v1686579486479!5m2!1sen!2sca",
      width: "100%",
      height: "450",
      style: {
        border: 0
      },
      allowFullScreen: "",
      loading: "lazy",
      referrerPolicy: "no-referrer-when-downgrade"
      })), /*#__PURE__*/_react["default"].createElement(_footer["default"], null));
  }
  }]);
  return Contactus;
}(_react["default"].Component);
var _default = Contactus;
exports["default"] = _default;
>>>>>>> 3daebf3f7819ef3abbed0c9ac66afd9adbbc3a24
