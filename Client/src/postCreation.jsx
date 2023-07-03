
import React from 'react';
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import './postCreation.css';


class PostCreation extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Header />
        <div className='post-ad'>
          <div className="post"></div>
          <h1>Create a New Ad</h1>
        </div>

        <Container style={{ minHeight: '80vh' }}>
          <Row className="justify-content-center">
            <Col md={8} className='contact-form'>
              <Form name="ad" onSubmit={this.onSubmit}>
                <FormGroup>
                  <FormLabel id="posttitle">Post Title</FormLabel>
                  <FormControl
                    type="text"
                    name="PostTitle"

                  />
                </FormGroup>
                <FormGroup className='mb-3'>
                  <FormLabel id="postdescription">Post description</FormLabel>
                  <FormControl
                    type="text"
                    name="PostDescription"

                  />
                </FormGroup>
                <FormGroup className='mb-3'>
                  <FormLabel id="price">price</FormLabel>
                  <FormControl
                    type="text"
                    name="Price"

                  />

                </FormGroup>
                <FormGroup as={Col} className='mb-3' controlId="formGridState">
                  <FormLabel>Apartment Type</FormLabel>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Studio</option>
                    <option>1BHK</option>
                    <option>2BHK</option>
                    <option>3BHK</option>
                    <option>4BHK</option>
                    <option>5BHK</option>
                  </Form.Select>
                </FormGroup>
                <FormGroup className='mb-3'>
                  <FormLabel id="location">Location</FormLabel>
                  <FormControl
                    type="text"
                    name="location"

                  />
                </FormGroup>
                <Row className='mb-3'>
                  <FormGroup as={Col}>

                    <FormControl
                      type="file"
                      name="photos"

                    />
                  </FormGroup>
                  <FormGroup as={Col}>
                    <Button className='primary-btn btn' type="submit">Upload</Button>

                  </FormGroup>
                </Row>
                <Button className='primary-btn btn' type="submit">Add New Post</Button>
              </Form>




            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}



export default PostCreation