"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _header = _interopRequireDefault(require("./header.jsx"));
var _reactBootstrap = require("react-bootstrap");
require("./style.css");
var _footer = _interopRequireDefault(require("./footer.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Aboutus = /*#__PURE__*/function (_React$Component) {
  _inherits(Aboutus, _React$Component);
  var _super = _createSuper(Aboutus);
  function Aboutus() {
    _classCallCheck(this, Aboutus);
    return _super.apply(this, arguments);
  }
  _createClass(Aboutus, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_header["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "about-banner"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "overlay"
      }), /*#__PURE__*/_react["default"].createElement("h1", null, "About us")), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Container, {
        className: "pt-2 pb-2"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, {
        className: "justify-content-center"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
        md: 6,
        className: "contact-form"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "../images/about1.jpg",
        alt: ""
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
        md: 6,
        className: "contact-form justify-content-center d-flex flex-column p-md-5"
      }, /*#__PURE__*/_react["default"].createElement("h1", null, "About Us"), /*#__PURE__*/_react["default"].createElement("p", null, "On-The-Go-Rentals is a website where people may rent houses. The website would place more of an emphasis on recent Canadian immigrants. Our aim is to make it easier for incoming students to identify housing choices based on their needs."), /*#__PURE__*/_react["default"].createElement("h1", {
        className: "pt-3"
      }, "Core Values"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, "Customer-centeric"), /*#__PURE__*/_react["default"].createElement("li", null, "Transparency"), /*#__PURE__*/_react["default"].createElement("li", null, "Commitment"), /*#__PURE__*/_react["default"].createElement("li", null, "Simplicity"))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "container-fluid bg-light"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Container, {
        className: "pb-2"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, {
        className: "justify-content-center"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
        md: 6,
        className: "contact-form justify-content-center d-flex flex-column p-md-5"
      }, /*#__PURE__*/_react["default"].createElement("h1", null, "Mission"), /*#__PURE__*/_react["default"].createElement("p", null, "Our mission is to deliver excellent client service and to improve the environment and people's lives thus making a difference and adding value"), /*#__PURE__*/_react["default"].createElement("h1", {
        className: "pt-3"
      }, "Vision"), /*#__PURE__*/_react["default"].createElement("p", null, "Our vision is bringing together passion, people, technology, and real estate to revolutionise the property management industry. We set the bar for excellent customer service.")), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
        md: 6,
        className: "contact-form"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "../images/mission-vision.jpg",
        alt: ""
      }))))), /*#__PURE__*/_react["default"].createElement(_footer["default"], null));
    }
  }]);
  return Aboutus;
}(_react["default"].Component);
var _default = Aboutus;
exports["default"] = _default;