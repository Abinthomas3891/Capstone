import React, { useState } from 'react';
import './assets/css/home.css';
import { Button, Modal } from 'react-bootstrap';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
const SearchBar = ({
  onSearch
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };
  const handleLocationChange = event => {
    setLocation(event.target.value);
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    const searchData = {
      query: searchQuery,
      location: location
    };
    onSearch(searchData);
  };
  const handleFilterButtonClick = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  const handleSearchButtonClick = e => {
    handleFormSubmit(e);
    setShowModal(false);
  };
  const handleClearButtonClick = () => {
    setSearchQuery('');
    setLocation('');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "s01"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }), /*#__PURE__*/React.createElement("form", {
    className: "search-bar",
    onSubmit: handleFormSubmit
  }, /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("h1", null, "Discover Your Dream Rental Property Today")), /*#__PURE__*/React.createElement("div", {
    className: "inner-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-field first-wrap"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "search-input",
    placeholder: "Search for properties...",
    value: searchQuery,
    onChange: handleInputChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-field second-wrap"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "location-input",
    placeholder: "Location",
    value: location,
    onChange: handleLocationChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-field third-wrap d-flex justify-content-between"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "filter-button btn",
    onClick: handleFilterButtonClick
  }, "Filter"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "search-button btn"
  }, "Search")))), /*#__PURE__*/React.createElement(Modal, {
    show: showModal,
    onHide: handleModalClose
  }, /*#__PURE__*/React.createElement(Modal.Header, {
    closeButton: true
  }, /*#__PURE__*/React.createElement(Modal.Title, null, "Filters")), /*#__PURE__*/React.createElement(Modal.Body, null, /*#__PURE__*/React.createElement("div", {
    className: "filter-options"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "propertyType"
  }, "Property type"), /*#__PURE__*/React.createElement("select", {
    className: "form-control",
    id: "propertyType"
  }, /*#__PURE__*/React.createElement("option", null, "All types"), /*#__PURE__*/React.createElement("option", null, "House"), /*#__PURE__*/React.createElement("option", null, "Apartment & Unit"), /*#__PURE__*/React.createElement("option", null, "Townhouse"), /*#__PURE__*/React.createElement("option", null, "Villa"))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "bedrooms"
  }, "Bedrooms"), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "form-control",
    id: "bedroomsMin",
    placeholder: "Min"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "form-control",
    id: "bedroomsMax",
    placeholder: "Max"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "bathrooms"
  }, "Bathrooms"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "form-control",
    id: "bathrooms"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "carSpaces"
  }, "Car spaces"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "form-control",
    id: "carSpaces"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "availableDate"
  }, "Available Date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "form-control",
    id: "availableDate"
  })))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(Button, {
    className: "clear",
    onClick: handleClearButtonClick
  }, "Clear filters"), /*#__PURE__*/React.createElement(Button, {
    className: "btn-login",
    onClick: handleSearchButtonClick
  }, "Search")))), /*#__PURE__*/React.createElement(Footer, null));
};
export default SearchBar;