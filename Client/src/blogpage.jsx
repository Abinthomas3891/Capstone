import React from "react";
import Header from "./header.jsx";
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import './style.css';
import Footer from "./footer.jsx";

class blogpage extends React.Component{
  render(){
    return(
        <>
        <Header />
        <div className='blog-banner'>
          <div className="overlay"></div>
          <h1>Blogs</h1>
        </div>
        <Container className="pt-2 pb-2">
            <Row className="justify-content-center">
                <Col md={6} className='contact-form'>
                    <img src="../images/about1.jpg" alt=""/>
                </Col>
                <Col md={6} className='contact-form justify-content-center d-flex flex-column p-md-5'>
                <h1 >Blogs</h1>
                <p>"Welcome to Our Rental Home Blog: Inspiring Spaces and Memorable Stays".</p>

                <div>
             <div className="posts">
                 {posts.map(post => (
             <div className="post" key={post.id}>
             <h2>{post.title}</h2>
             <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>

                </Col>
            </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
 
export default blogpage