
import React from 'react';
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import './postCreation.css';


class PostCreation extends React.Component {
  onSubmit = async(event) => {
    event.preventDefault();
    const inputForm = document.forms.ad;
    const postData = {
      Title:inputForm.PostTitle.value,
      Desc: inputForm.PostDescription.value,
      price: inputForm.Price.value,
      Type: inputForm.PostType.value,
      Bed: inputForm.bed.value,
      Bath: inputForm.bath.value,
      parking: inputForm.park.value,
      Location:inputForm.location.value,
      image:inputForm.photos.value
    };

    await this.userDetInsert(postData);

  };

  userDetInsert = async (postData) => {
    const query = `mutation {
                addPostDetails(posts:{

                        Title: "${postData.Title}",
                        Desc: "${postData.Desc}",
                        price: "${postData.price}",
                        Type: "${postData.Type}",
                        Bed: "${postData.Bed}",
                        Bath: "${postData.Bath}",
                        parking: "${postData.parking}",
                        Location: "${postData.Location}",
                        image: "${postData.image}"
                      
                      
              }) {
                
                Title
                Desc
                price
                Type
                Bed
                Bath
                parking
                Location
                image
              }}`;

              console.log(postData,"ill");
    const Pdata = await graphQLFetch(query, {
      postData,
    });
    console.log(Pdata,"ull");
    
    async function graphQLFetch(query, variables = {}) {
      try {
        const response = await fetch("http://localhost:4500/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables,
          }),
        });
        const res = await response.text();
        const resResult = JSON.parse(res);
        console.log(resResult, "result");
        if (resResult.errors) {
          const resError = resResult.errors[0];
          if (resError.extensions.code === "BAD_USER_INPUT") {
            const errDetails = resError.extensions.exception.errors.join("\n ");
            alert(`${resError.message}:\n ${errDetails}`);
          } else {
            alert(`${resError.extensions.code}: ${resError.message}`);
          }
        }
        return resResult.data;
      } catch (err) {
        alert(`sending data to server failed: ${err.message}`);
      }
    }
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
                    type="number"
                    name="Price"

                  />

                </FormGroup>
                <FormGroup as={Col} className='mb-3' controlId="formGridState">
                  <FormLabel>Apartment Type</FormLabel>
                  <FormControl name="PostType"></FormControl>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>House</option>
                    <option>Town House</option>
                    <option>Apartment</option>
                    <option>Basement</option>
                    <option>Villa</option>
                    
                  </Form.Select>
                </FormGroup>
                <FormGroup className='mb-3'>
                  <FormLabel id="bed-label">Bedroom</FormLabel>
                  <FormControl name="bed"></FormControl>
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
                    <FormGroup className='mb-3'>
                  <FormLabel id="bath-label">Bathroom</FormLabel>
                  <FormControl name="bath"></FormControl>
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
                    
                    <FormGroup className='mb-3'>
                  <FormLabel id="parking-label">Parking</FormLabel>
                  <FormControl name="park"></FormControl>
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