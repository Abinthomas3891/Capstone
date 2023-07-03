import React from 'react';
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import './style.css';


class Contactus extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Header />
        <div className='contact-banner'>
          <div className="overlay"></div>
          <h1>Contact us</h1>
        </div>

        <Container style={{ minHeight: '80vh' }}>
          <Row className="justify-content-center">
            <Col md={8} className='contact-form'>
              <h3>Send us a message</h3>
              <Form name="contact1" onSubmit={this.onSubmit}>
                <FormGroup>
                  {/* <FormLabel id="firstname">First name</FormLabel> */}
                  <FormControl
                    type="text"
                    name="FirstName"
                    placeholder="Enter your first name"
                  />
                </FormGroup>
                <FormGroup>
                  {/* <FormLabel id="lastname">Last name</FormLabel> */}
                  <FormControl
                    type="text"
                    name="LastName"
                    placeholder="Enter your last name"
                  />
                </FormGroup>
                <FormGroup>
                  {/* <FormLabel id="email">Email</FormLabel> */}
                  <FormControl
                    type="email"
                    name="Email"
                    placeholder="Enter your email address"
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel id="status-label">Status</FormLabel>
                  <div className='d-flex'>
                    <Form.Check
                      type="radio"
                      id="sell-radio"
                      label="Sell"
                      value="Sell"
                      name="Status"
                    />
                    <Form.Check
                      type="radio"
                      id="rent-radio"
                      label="Rent"
                      value="Rent"
                      name="Status"
                    />
                    <Form.Check
                      type="radio"
                      id="other-radio"
                      label="Other"
                      value="Other"
                      name="Status"
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  {/* <FormLabel id="message">Message</FormLabel> */}
                  <FormControl
                    as="textarea"
                    name="Message"
                    placeholder="Enter your message"
                  />
                </FormGroup>
                <Button className='primary-btn btn' type="submit">Send a message</Button>
              </Form>
            </Col>
            <Col md={4} className='contact-form'>
                <h3>Contact us</h3>
                <h5>Main Office</h5>
                <ul className='mb-5'>
                    <li >
                    <p> <a href="#">
                        290 5th Ave, ON 10N 0N1, Canada </a>
                    </p> </li>
                    <li >
                    <p> <a href="tel:+12269999999" target="_self">
                        +1 226 999 99 99 </a>
                    </p> </li>
                    <li >
                    <p> <a href="tel:+12345678911" target="_self">
                        +1 234 562 89 11 </a>
                    </p> </li>
                    <li >
                    <p> <a href="mailto:info@onthego.com" target="_self">
                        info@onthego.com </a>
                    </p> </li>
                </ul>
                <ul className='mt-3 pt-5'>
                    <li>
                        <p> 
                            Monday – Friday 09:00 – 20:30
                        </p> 
                    </li>
                    <li>
                        <p> 
                            Saturday 09:00 – 18:00
                        </p> 
                    </li>
                </ul>

            </Col>
          </Row>
        </Container>
        <div className="google-map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.7827858968367!2d-80.4785174240522!3d43.38156567111644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c0abd9ee2ad3d%3A0xdfa301c471f1c73d!2s103%20Woodedge%20Cir%2C%20Kitchener%2C%20ON%20N2R%201R7!5e0!3m2!1sen!2sca!4v1686579486479!5m2!1sen!2sca"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contactus;