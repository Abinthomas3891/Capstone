

import React from 'react';
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import Header from "./userheader.jsx";
import Footer from "./footer.jsx";
import './assets/css/style.css';

class PostCreation extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
  return (
    <>
      <Header />
      <div className='container-fluid bg-light p-5 create-post'>
        <Container>
         
          <div className='card-view'>
            <h4>Create your new property</h4>
            <hr/>
            
              <Form name="ad" onSubmit={this.onSubmit}>
              <Row className="">
                <Col md={6} className='contact-form'>
                <FormGroup>
                  <FormLabel id="posttitle">Post Title</FormLabel>
                  <FormControl
                    type="text"
                    name="PostTitle"

                  />
                  
                </FormGroup>
                </Col>
                <Col md={6} className='contact-form'>
                <FormGroup className='mb-3'>
                  <FormLabel id="postdescription">Post description</FormLabel>
                  <FormControl
                    type="text"
                    name="PostDescription"

                  />
                </FormGroup>
                </Col>
                <Col md={6} className='contact-form'>
                <FormGroup className='mb-3'>
                  <FormLabel id="price">Price</FormLabel>
                  <FormControl
                    type="text"
                    name="Price"

                  />

                </FormGroup>
                </Col>
                <Col md={6} className='contact-form'>
                <FormGroup as={Col} className='mb-3' controlId="formGridState">
                  <FormLabel>Apartment Type</FormLabel>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>House</option>
                    <option>Town House</option>
                    <option>Apartment</option>
                    <option>Basement</option>
                    <option>Villa</option>
                    
                  </Form.Select>
                </FormGroup>
                </Col>
                <Col md={4} className='contact-form'>
                <FormGroup className='mb-3'>
                  <FormLabel id="bed-label">Bedroom</FormLabel>
                  <div className='d-flex'>
                    <Form.Check
                      type="radio"
                      id="bed-radio"
                      label="1"
                      value="1"
                      name="bed"
                    />
                    <Form.Check
                      type="radio"
                      id="room-radio"
                      label="2"
                      value="2"
                      name="bed"
                    />
                    <Form.Check
                      type="radio"
                      id="bedroom-radio"
                      label="3"
                      value="3"
                      name="bed"
                    />
                    <Form.Check
                      type="radio"
                      id="bed"
                      label="4"
                      value="4"
                      name="bed"
                    />
                    <Form.Check
                      type="radio"
                      id="bedroom"
                      label="5"
                      value="5"
                      name="bed"
                    />
                    </div>
                    </FormGroup>
                    </Col>
                <Col md={4} className='contact-form'>
                    <FormGroup className='mb-3'>
                  <FormLabel id="bath-label">Bathroom</FormLabel>
                  <div className='d-flex'>
                    <Form.Check
                      type="radio"
                      id="bath-radio"
                      label="1"
                      value="1"
                      name="bed"
                    />
                     <Form.Check
                      type="radio"
                      id="radio"
                      label="1.5"
                      value="1.5"
                      name="bed"
                    />
                    <Form.Check
                      type="radio"
                      id="bathroom-radio"
                      label="2"
                      value="2"
                      name="bed"
                    />
                    <Form.Check
                      type="radio"
                      id="bedroom"
                      label="3"
                      value="3"
                      name="bed"
                    />
                    
                    </div>
                    </FormGroup>
                    </Col>
                <Col md={4} className='contact-form'>
                    <FormGroup className='mb-3'>
                  <FormLabel id="parking-label">Parking</FormLabel>
                  <div className='d-flex'>
                    <Form.Check
                      type="radio"
                      id="parking-radio"
                      label="Yes"
                      value="Yes"
                      name="parking"
                    />
                    <Form.Check
                      type="radio"
                      id="parking"
                      label="No"
                      value="No"
                      name="parking"
                    />
                    </div>
                    </FormGroup>
                    </Col>
                <Col md={6} className='contact-form'>
                <FormGroup className='mb-3'>
                  <FormLabel id="location">Location</FormLabel>
                  <FormControl
                    type="text"
                    name="location"

                  />
                </FormGroup>
                </Col>
                <Col md={6} className='contact-form'>
                <Row className='mb-3'>
                  <FormGroup className='col-md-9'>
                  <FormLabel id="location">Upload Images</FormLabel>
                    <FormControl
                      type="file"
                      name="photos"

                    />
                  </FormGroup>
                  <FormGroup className='col-md-3 upload-product'>
                    <Button className='primary-btn btn' type="submit">Upload</Button>

                  </FormGroup>
                </Row>
                </Col>
                <Col md={12} className='contact-form d-flex justify-content-center post-submit'>
                <Button className='primary-btn btn' type="submit">Add New Post</Button>
                </Col>
          </Row>
              </Form>




            
          </div>
          

         

        </Container>
      </div>
      <Footer />
    </>
  );
};
}
export default PostCreation









