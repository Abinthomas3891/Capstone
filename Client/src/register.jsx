import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import './assets/css/style.css';


const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};
    if (!name) {
      validationErrors.name = 'Please enter your name';
    }
    if (!email) {
      validationErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Please enter a valid email';
    }
    if (!password) {
      validationErrors.password = 'Please enter a password';
    }
    if (!phone) {
      validationErrors.phone = 'Please enter your phone number';
    }
    setErrors(validationErrors);

    // Perform registration logic if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      // Registration logic
      // You can send the registration data to your backend server

      // Clear form fields after registration
      setName('');
      setEmail('');
      setPassword('');
      setPhone('');
    }
  };

  return (
    <>
    <Header />
    <div className="register-page contact-form">
      <div className='register'>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={handleNameChange}
            isInvalid={!!errors.name}
          />
          {errors.name && <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>}
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={handlePhoneChange}
            isInvalid={!!errors.phone}
          />
          {errors.phone && <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>}
        </Form.Group>
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

        

        <Button className='primary-btn btn' type="submit">Register</Button>
        <div className="login-link">
          <span>Already have an account?</span>
          <Link to="/login">Login</Link>
        </div>
      </Form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default RegisterPage;
