import React, { useState } from 'react';
import {useEffect} from 'react';
import './assets/css/home.css';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Card} from 'react-bootstrap';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import post1 from './assets/images/p1.jpg';
import post2 from './assets/images/post4.jpg';
import post3 from './assets/images/post2.jpg';
import post4 from './assets/images/post3.jpg';
import { useHistory } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [post, setPost] = useState([]);
  
  

  useEffect(() => {
    displayPostDetails();
  }, []); 

  
  const displayPostDetails = async () => {
    const query = `query postDetails {
      postDetails {
            id
            Title
            Desc
            price
            Type
            Bed
            Bath
            parking
            Location
            image
          }
        }`;
    const response = await fetch("http://localhost:4500/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });
    const dataResult = await response.text();
    // console.log(dataResult,"oll");
    const responseData = JSON.parse(dataResult);
  
    if (responseData.errors) {
      console.log("error");
    } else {
      setPost(responseData.data.postDetails);
      console.log(responseData.data.postDetails,"posts");
    }
  };

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
    <div className='container-fluid pt-5 bg-light pb-4'>
      <Container>
      {post.map((rental) => (
        
        <Row className='card-view-home mb-3' key={rental.id}>
          <Col md={4}>
            <div className='pimg'>
             <Card.Img variant="top" src={`data:image/jpeg;base64,${rental.image}`} />
            </div>
          </Col>
          <Col md={8}>
            <h3>{rental.Title}</h3>
            {/* <h3>{rental}</h3> */}
            <p className='location'>{rental.Location}</p>
            <p className='description'>{rental.Desc}</p>
            <h6>{rental.price}</h6>
            
            <Link to={`/postView/${rental.id}`} className='btn-login btn nav-link mt-3'>View Property</Link>
            
          </Col>
        </Row>
      ))}
      </Container>
    </div>
    <Footer />
    </>
    
  );
};

export default SearchBar;
