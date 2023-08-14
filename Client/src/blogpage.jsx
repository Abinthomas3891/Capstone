import React from "react";
import Header from "./header.jsx";
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import './assets/css/style.css'
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
        </Container>
        <Footer />
      </>
    );
  }
}
 
export default blogpage