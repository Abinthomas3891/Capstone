import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import './assets/css/style.css';


const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [errors, setErrors] = useState({});

 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};
   
    if (!email) {
      validationErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Please enter a valid email';
    }
    if (!password) {
      validationErrors.password = 'Please enter a password';
    }
    
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
     
      
      setEmail('');
      setPassword('');
      
    }
  };

  return (
    <>
    <Header />
    <div className="register-page contact-form">
      <div className='register'>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        
        <Form.Group controlId="email">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            isInvalid={!!errors.email}
          />
          {errors.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            isInvalid={!!errors.password}
          />
          {errors.password && <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>}
        </Form.Group>

        

        <Button className='primary-btn btn' type="submit">Login</Button>
        <div className="login-link">
          <span>New User? </span>
          <Link to="/register">Register</Link>
        </div>
      </Form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LoginPage;
