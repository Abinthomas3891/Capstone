import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import './assets/css/style.css';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useNavigate } from 'react-router-dom';

// Define the GraphQL mutation for the login

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    console.log("handle");
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
      try {
        console.log("try");
        const {
          data
        } = await login({
          variables: {
            email,
            password
          }
        });
        console.log(data);
        console.log(token);
        console.log("success");
        if (data) {
          navigate('/');
        }
      } catch (error) {
        console.log("catch");
        console.log(error);
      }
    }
    login = async (Email, Password) => {
      const query = `
      query login($Email: String!, $Password: String!) {
        login(Email: $Email, Password: $Password) {
          id
          FullName
          Phone
          Email
          Password
        }
      }
    `;
      const response = await fetch("http://localhost:4500/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query,
          variables
        })
      });
    };
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "register-page contact-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "register"
  }, /*#__PURE__*/React.createElement("h2", null, "Login"), /*#__PURE__*/React.createElement(Form, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(Form.Group, {
    controlId: "email"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    type: "email",
    placeholder: "Enter your email",
    value: email,
    onChange: handleEmailChange,
    isInvalid: !!errors.email
  }), errors.email && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, errors.email)), /*#__PURE__*/React.createElement(Form.Group, {
    controlId: "password"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    type: "password",
    placeholder: "Enter your password",
    value: password,
    onChange: handlePasswordChange,
    isInvalid: !!errors.password
  }), errors.password && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, errors.password)), /*#__PURE__*/React.createElement(Button, {
    className: "primary-btn btn",
    type: "submit"
  }, "Login"), /*#__PURE__*/React.createElement("div", {
    className: "login-link"
  }, /*#__PURE__*/React.createElement("span", null, "New User? "), /*#__PURE__*/React.createElement(Link, {
    to: "/register"
  }, "Register"))))), /*#__PURE__*/React.createElement(Footer, null));
};
export default LoginPage;