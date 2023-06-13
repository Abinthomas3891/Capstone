"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactBootstrap = require("react-bootstrap");
require("./header.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Header = function Header() {
  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar, {
    className: "navbar-onthego sticky",
    expand: "lg"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar.Brand, {
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "images/logo.png",
    alt: "Image 1"
  })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar.Toggle, {
    "aria-controls": "navbar-nav"
  }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar.Collapse, {
    id: "navbar-nav"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav, {
    className: "ml-auto"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
    as: _reactRouterDom.Link,
    to: "/"
  }, "Home"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
    as: _reactRouterDom.Link,
    to: "/about"
  }, "About"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
    as: _reactRouterDom.Link,
    to: "/contact"
  }, "Contact"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
    className: "btn-login btn",
    href: "#"
  }, "Login")))));
};
var _default = Header;
exports["default"] = _default;