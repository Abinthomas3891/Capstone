import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

import Header from "./userheader.jsx";
import Footer from "./footer.jsx";
import './assets/css/style.css';


const Dashboard = () => {
 

  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '1234567890',
  };

  return (
    <>
      <Header />
      <div className='container-fluid bg-light p-5'>
        <Container>
          <div className='card-view p-5 dash-head'>
            <h1>Hello! {user.name} </h1>
          </div>
          <div className='card-view'>
            <h4>User Information</h4>
            <hr/>
            <Row className='user-view'>
              <Col md={12} sm={12} className='pb-4'>
                <Card>
                  <Card.Body>
                  <Row className='user-view'>
                    <Col md={4} sm={4} className='user-label'>
                        <p>Name</p>
                        <h6>{user.name}</h6>
                    </Col>
                    <Col md={4} sm={4} className='user-label'>
                        <p>Email</p>
                        <h6>{user.email}</h6>
                    </Col>
                    <Col md={4} sm={4} className='user-label'>
                        <p>Phone</p>
                        <h6>{user.phoneNumber}</h6>
                    </Col>
                  </Row>   
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          
                     

         

        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
