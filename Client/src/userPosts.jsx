import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from "./userheader.jsx";
import Footer from "./footer.jsx";
import './assets/css/style.css';
import post1 from './assets/images/post4.jpg';
import post2 from './assets/images/post2.jpg';
import post3 from './assets/images/post3.jpg';

const Dashboard = () => {
  // Sample data for house rentals
  const houseRentals = [
    { id: 1, title: 'Cozy Apartment', location: 'City Center', price: '$1000', image: post1 },
    { id: 2, title: 'Luxury Villa', location: 'Beachfront', price: '$3000', image: post2 },
    { id: 3, title: 'Spacious House', location: 'Suburb', price: '$2000', image: post3 },
  ];

  


  return (
    <>
      <Header />
      <div className='container-fluid bg-light p-5'>
        <Container>
          
          <div className='card-view'>
            <div className='head-link'>
                <h4>My Rental Properties</h4>
                
            </div>
            <hr/>
            <Link to="/postCreation" className='primary-btn btn'>
              <i className="fas fa-plus"></i> Add Property
            </Link>
            <Row>
              {houseRentals.map((rental) => (
                <Col key={rental.id} md={4} sm={4} className='pb-4'>
                  <Card>
                    <Card.Img variant="top" src={rental.image} />
                    <Card.Body>
                      <Card.Title>{rental.title}</Card.Title>
                      <Card.Text>{rental.location}</Card.Text>
                      <Card.Text>{rental.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

         

        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
