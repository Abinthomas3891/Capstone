import React from "react";
import Header from "./header.jsx";
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import './style.css';
import Footer from "./footer.jsx";

class Aboutus extends React.Component{
  render(){
    return(
        <>
        <Header />
        <div className='about-banner'>
          <div className="overlay"></div>
          <h1>About us</h1>
        </div>
        <Container className="pt-2 pb-2">
            <Row className="justify-content-center">
                <Col md={6} className='contact-form'>
                    <img src="../images/about1.jpg" alt=""/>
                </Col>
                <Col md={6} className='contact-form justify-content-center d-flex flex-column p-md-5'>
                <h1 >About Us</h1>
                <p>On-The-Go-Rentals is a website where people may rent houses. The website would place more of an emphasis on recent Canadian immigrants. Our aim is to make it easier for incoming students to identify housing choices based on their needs.</p>

                <h1 className="pt-3">Core Values</h1>
                        <ul>
                            <li>Customer-centeric</li>
                            <li>Transparency</li>
                            <li>Commitment</li>
                            <li>Simplicity</li>
                        </ul>
                </Col>
            </Row>
        </Container>

        <div className="container-fluid bg-light">
            <Container className="pb-2">
                <Row className="justify-content-center">
                    
                    <Col md={6} className='contact-form justify-content-center d-flex flex-column p-md-5'>
                        <h1>Mission</h1>
                        <p>Our mission is to deliver excellent client service and to improve the environment and people's lives thus making a difference and adding value</p>
                        <h1 className="pt-3">Vision</h1>
                        <p>Our vision is bringing together passion, people, technology, and real estate to revolutionise the property management industry. We set the bar for excellent customer service.</p>
                        
                    </Col>
                    <Col md={6} className='contact-form'>
                        <img src="../images/mission-vision.jpg" alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer />
      </>
    );
  }
}
 
export default Aboutus