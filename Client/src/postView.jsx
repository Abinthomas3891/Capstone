import React, { useState ,useEffect} from 'react';
import { Container, Row, Col, Image, Form, FormGroup, FormLabel, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Header from "./header.jsx";
import Footer from "./footer.jsx";
import './assets/css/style.css';
import p1 from './assets/images/p1.jpg';
import p2 from './assets/images/p2.jpg';
import p3 from './assets/images/p3.jpg';
import p4 from './assets/images/p4.jpg';
import p5 from './assets/images/p5.jpg';
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
  // Sample property data
  const { rentalId } = useParams();
  const [post, setPost] = useState([]);
  console.log("rentalId1-",rentalId)

 const getSinglePost = async (id) => {
    const query = `
    query getSinglePost($id: String!) {
      getSinglePost(id: $id) {
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
    }
  `;
    const variables = { id: rentalId };
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
    const resdata = JSON.parse(res);
    if (resdata.errors) {
      console.log(resdata.errors, "error");
    } else {
       console.log("success-working");
       setPost(resdata.data.getSinglePost);
       console.log(resdata.data);
      
    }
  };

  

//   const [selectedImage, setSelectedImage] = useState(rental.image[0]);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  
  useEffect(() => {
    console.log("rentalId2-",rentalId);
    getSinglePost(rentalId);
  }, [rentalId]);

  return (
    <>
      <Header />
      <div className='container-fluid product-view bg-light'>
        <Container>
          {/* <h1>Property Details</h1> */}
          <Row>
            <Col md={7}>
              <div className='gallery'>
                <Image src={`data:image/jpeg;base64,${post.image}`} fluid />
              </div>
              
            </Col>
            <Col md={5}>
              <h2>{post.Title}</h2>
              <p>
                <strong>Address:</strong> {post.Location}
              </p>
              <p>
                <strong>Price:</strong> {post.price}
              </p>
              <p>
                <strong>Description:</strong> {post.Desc}
              </p>
              <Link className="btn-login btn me-2">Contact Agent</Link>
              <Link className="btn-login btn btn-outline"><i class="fa-regular fa-star"></i> Save Property</Link>
            </Col>
          </Row>
          
        </Container>
      </div>
      <div className='container-fluid pt-5 pb-5'>
        <Container>
          
          <Row>
          
          <Col md={12}>
            <h3 className='pb-3'>Property features</h3>
            <Row>
                <Col md={4}>
                  <p><i class="fa-regular fa-snowflake"></i> Air conditioning</p>
                </Col>
                <Col md={4}>
                  <p><i class="fa-solid fa-cloud-sun"></i> Balcony</p>
                </Col>
                <Col md={4}>
                  <p><i class="fa-solid fa-bolt"></i> Utilities Included</p>
                </Col>
                <Col md={4}>
                  <p><i class="fa-solid fa-wifi"></i> Wi-Fi Included</p>
                </Col>
                <Col md={4}>
                  <p><i class="fa-solid fa-bolt"></i> Parking Included</p>
                </Col>
                <Col md={4}>
                  <p><i class="fa-solid fa-square-parking"></i> 3+ Parking Included</p>
                </Col>
                <Col md={4}>
                  <p><i class="fa-solid fa-dog"></i> Pet Friendly</p>
                </Col>
                <Col md={4}>
                  <p><i class="fa-solid fa-couch"></i> Furnished</p>
                </Col>
                <Col md={4}>
                  <p><i class="fa-solid fa-jug-detergent"></i> Laundry In Unit</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='container-fluid bg-light'>
        <Container>
          
          <Form onSubmit={handleSubmit}>
          <Row>
          <Col md={12}  className='contact-form'>
          <h3>Contact Agent</h3>
            <Row>
              <Col md={12}>
                <FormGroup controlId="name" className='mt-3'>
                  <FormControl type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Enter your full name" />
                </FormGroup>
                <FormGroup controlId="email" className='mt-3'>
                  <FormControl type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Enter your email address" />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup controlId="phone" className='mt-3'>
                  <FormControl type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="Enter your phone number"/>
                </FormGroup>
                <FormGroup controlId="message">
                  <FormControl as="textarea" name="message" value={formData.message} onChange={handleInputChange} rows={5} required placeholder="Enter your Message" />
                </FormGroup>
              </Col>
            </Row>
            <Button type="submit" className='primary-btn btn mt-3'>Contact Agent</Button>
            </Col>
           
          </Row>
          </Form>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default PropertyDetails;
