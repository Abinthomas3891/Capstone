import React, { useState } from 'react';
import './home.css';
import { Button, Modal } from 'react-bootstrap';
import Header from "./header.jsx";
import Footer from "./footer.jsx";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const searchData = {
      query: searchQuery,
      location: location,
    };
    onSearch(searchData);
  };

  const handleFilterButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSearchButtonClick = (e) => {
    handleFormSubmit(e);
    setShowModal(false);
  };

  const handleClearButtonClick = () => {
    setSearchQuery('');
    setLocation('');
  };

  return (
    <>
    <Header />
    
    <div className="s01">
      <div className="overlay"></div>
      <form className="search-bar" onSubmit={handleFormSubmit}>
        <fieldset>
          <h1>Discover Your Dream Rental Property Today</h1>
        </fieldset>
        <div className="inner-form">
          <div className="input-field first-wrap">
            <input
              type="text"
              className="search-input"
              placeholder="Search for properties..."
              value={searchQuery}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field second-wrap">
            <input
              type="text"
              className="location-input"
              placeholder="Location"
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <div className="input-field third-wrap d-flex justify-content-between">
            <button
              type="button"
              className="filter-button btn"
              onClick={handleFilterButtonClick}
            >
              Filter
            </button>
            <button type="submit" className="search-button btn">
              Search
            </button>
          </div>
        </div>
      </form>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="filter-options">
            <div className="form-group">
              <label htmlFor="propertyType">Property type</label>
              <select className="form-control" id="propertyType">
                <option>All types</option>
                <option>House</option>
                <option>Apartment &amp; Unit</option>
                <option>Townhouse</option>
                <option>Villa</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bedrooms">Bedrooms</label>
              <div className="row">
                <div className="col-6">
                  <input type="number" className="form-control" id="bedroomsMin" placeholder="Min" />
                </div>
                <div className="col-6">
                  <input type="number" className="form-control" id="bedroomsMax" placeholder="Max" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="bathrooms">Bathrooms</label>
              <input type="number" className="form-control" id="bathrooms" />
            </div>
            <div className="form-group">
              <label htmlFor="carSpaces">Car spaces</label>
              <input type="number" className="form-control" id="carSpaces" />
            </div>
            <div className="form-group">
              <label htmlFor="availableDate">Available Date</label>
              <input type="date" className="form-control" id="availableDate" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="clear" onClick={handleClearButtonClick}>
            Clear filters
          </Button>
          <Button className="btn-login" onClick={handleSearchButtonClick}>
            Search
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
    <Footer />
    </>
    
  );
};

export default SearchBar;
