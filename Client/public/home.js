"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./home.css");
var _reactBootstrap = require("react-bootstrap");
var _header = _interopRequireDefault(require("./header.jsx"));
var _footer = _interopRequireDefault(require("./footer.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SearchBar = function SearchBar(_ref) {
  var onSearch = _ref.onSearch;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchQuery = _useState2[0],
    setSearchQuery = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    location = _useState4[0],
    setLocation = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showModal = _useState6[0],
    setShowModal = _useState6[1];
  var handleInputChange = function handleInputChange(event) {
    setSearchQuery(event.target.value);
  };
  var handleLocationChange = function handleLocationChange(event) {
    setLocation(event.target.value);
  };
  var handleFormSubmit = function handleFormSubmit(event) {
    event.preventDefault();
    var searchData = {
      query: searchQuery,
      location: location
    };
    onSearch(searchData);
  };
  var handleFilterButtonClick = function handleFilterButtonClick() {
    setShowModal(true);
  };
  var handleModalClose = function handleModalClose() {
    setShowModal(false);
  };
  var handleSearchButtonClick = function handleSearchButtonClick(e) {
    handleFormSubmit(e);
    setShowModal(false);
  };
  var handleClearButtonClick = function handleClearButtonClick() {
    setSearchQuery('');
    setLocation('');
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_header["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "s01"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "overlay"
  }), /*#__PURE__*/_react["default"].createElement("form", {
    className: "search-bar",
    onSubmit: handleFormSubmit
  }, /*#__PURE__*/_react["default"].createElement("fieldset", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Discover Your Dream Rental Property Today")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "inner-form"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-field first-wrap"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "search-input",
    placeholder: "Search for properties...",
    value: searchQuery,
    onChange: handleInputChange
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-field second-wrap"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "location-input",
    placeholder: "Location",
    value: location,
    onChange: handleLocationChange
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-field third-wrap d-flex justify-content-between"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "filter-button btn",
    onClick: handleFilterButtonClick
  }, "Filter"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "search-button btn"
  }, "Search")))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal, {
    show: showModal,
    onHide: handleModalClose
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Header, {
    closeButton: true
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Title, null, "Filters")), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Body, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "filter-options"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "propertyType"
  }, "Property type"), /*#__PURE__*/_react["default"].createElement("select", {
    className: "form-control",
    id: "propertyType"
  }, /*#__PURE__*/_react["default"].createElement("option", null, "All types"), /*#__PURE__*/_react["default"].createElement("option", null, "House"), /*#__PURE__*/_react["default"].createElement("option", null, "Apartment & Unit"), /*#__PURE__*/_react["default"].createElement("option", null, "Townhouse"), /*#__PURE__*/_react["default"].createElement("option", null, "Villa"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "bedrooms"
  }, "Bedrooms"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    className: "form-control",
    id: "bedroomsMin",
    placeholder: "Min"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    className: "form-control",
    id: "bedroomsMax",
    placeholder: "Max"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "bathrooms"
  }, "Bathrooms"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    className: "form-control",
    id: "bathrooms"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "carSpaces"
  }, "Car spaces"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    className: "form-control",
    id: "carSpaces"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "availableDate"
  }, "Available Date"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "date",
    className: "form-control",
    id: "availableDate"
  })))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Footer, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
    className: "clear",
    onClick: handleClearButtonClick
  }, "Clear filters"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
    className: "btn-login",
    onClick: handleSearchButtonClick
  }, "Search")))), /*#__PURE__*/_react["default"].createElement(_footer["default"], null));
};
var _default = SearchBar;
exports["default"] = _default;