import React from 'react';
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import emailjs from "emailjs-com";
import './assets/css/style.css';

//contactus page
class Contactus extends React.Component {
  state = {
    FirstName: '',
    LastName: '',
    Email: '',
    Status: '',
    Message: '',
    displayErrors: {},
    
  };
  

  contactformValidation = () => {
    const { FirstName, LastName, Email, Status, Message } = this.state;
    let displayErrors = {};

    if (!FirstName) {
      displayErrors.FirstName = 'First name is required';
    }

    if (!LastName) {
      displayErrors.LastName = 'Last name is required';
    }

    if (!Email) {
      displayErrors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
      displayErrors.Email = 'Email is invalid';
    }

    if (!Status) {
      displayErrors.Status = 'Status is required';
    }

    if (!Message) {
      displayErrors.Message = 'Message is required';
    }

    this.setState({ displayErrors });
    return Object.keys(displayErrors).length === 0;
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    
  };

  handleSubmit = (event) => {
    event.preventDefault();
  
  };
  
  sendEmail=(form)=>{

    emailjs.sendForm('service_5dvacww', 'template_i1sul7n', form, 'bXQsgszPNKSNQh0ik')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.reset();
    };

  render() 
  {
    
  const { displayErrors} = this.state;
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
              <Form name="contact1" onSubmit={(e) => { e.preventDefault(); this.sendEmail(e.target); }}>
                <FormGroup>
                  {/* <FormLabel id="firstname">First name</FormLabel> */}
                  <FormControl
                    type="text"
                    name="FirstName"
                    placeholder="Enter your first name"
                    onChange={this.handleChange}
                  />
                  {displayErrors.FirstName && <span className="error">{displayErrors.FirstName}</span>}
                </FormGroup>
                <FormGroup>
                  {/* <FormLabel id="lastname">Last name</FormLabel> */}
                  <FormControl
                    type="text"
                    name="LastName"
                    placeholder="Enter your last name"
                    onChange={this.handleChange}
                  />
                  {displayErrors.LastName && <span className="error">{displayErrors.LastName}</span>}
                </FormGroup>
                <FormGroup>
                  {/* <FormLabel id="email">Email</FormLabel> */}
                  <FormControl
                    type="email"
                    name="Email"
                    placeholder="Enter your email address"
                    onChange={this.handleChange}
                  />
                  {displayErrors.Email && <span className="error">{displayErrors.Email}</span>}
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
                      onChange={this.handleChange}
                    />
                    <Form.Check
                      type="radio"
                      id="rent-radio"
                      label="Rent"
                      value="Rent"
                      name="Status"
                      onChange={this.handleChange}
                    />
                    <Form.Check
                      type="radio"
                      id="other-radio"
                      label="Other"
                      value="Other"
                      name="Status"
                      onChange={this.handleChange}
                    />
                  </div>
                  {displayErrors.Status && <span className="error">{displayErrors.Status}</span>}
                </FormGroup>
                <FormGroup>
                  {/* <FormLabel id="message">Message</FormLabel> */}
                  <FormControl
                    as="textarea"
                    name="Message"
                    placeholder="Enter your message"
                    onChange={this.handleChange}
                  />
                  {displayErrors.Message && <span className="error">{displayErrors.Message}</span>}
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
