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
  async function userDetInsert(userData) {
    const query = `mutation {
              addUserDetails(users:{
                      
                      FullName: "${userData.FullName}",
                      Phone: "${userData.Phone}",
                      Email: "${userData.Email}",
                      Password: "${userData.Password}",
              }) {
                
                FullName
                Phone
                Email
                Password
              }}`;
    console.log(userData, "ill");
    const Udata = await graphQLFetch(query, {
      userData
    });
    async function graphQLFetch(query, variables = {}) {
      try {
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
  }
  ;
  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };
  const handleSubmit = async e => {
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
      const userData = {
        FullName: name,
        Phone: phone,
        Email: email,
        Password: password
      };
      await userDetInsert(userData);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "register-page contact-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "register"
  }, /*#__PURE__*/React.createElement("h2", null, "Register"), /*#__PURE__*/React.createElement(Form, {
    name: "reg",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(Form.Group, {
    controlId: "name"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    type: "text",
    placeholder: "Enter your full name",
    value: name,
    onChange: handleNameChange,
    isInvalid: !!errors.name,
    name: "fullname"
  }), errors.name && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, errors.name)), /*#__PURE__*/React.createElement(Form.Group, {
    controlId: "phone"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    type: "tel",
    placeholder: "Enter your phone number",
    value: phone,
    onChange: handlePhoneChange,
    isInvalid: !!errors.phone,
    name: "phone"
  }), errors.phone && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, errors.phone)), /*#__PURE__*/React.createElement(Form.Group, {
    controlId: "email"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    type: "email",
    placeholder: "Enter your email",
    value: email,
    onChange: handleEmailChange,
    isInvalid: !!errors.email,
    name: "email"
  }), errors.email && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, errors.email)), /*#__PURE__*/React.createElement(Form.Group, {
    controlId: "password"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    type: "password",
    placeholder: "Enter your password",
    value: password,
    onChange: handlePasswordChange,
    isInvalid: !!errors.password,
    name: "pwd"
  }), errors.password && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, errors.password)), /*#__PURE__*/React.createElement(Button, {
    className: "primary-btn btn",
    type: "submit"
  }, "Register"), /*#__PURE__*/React.createElement("div", {
    className: "login-link"
  }, /*#__PURE__*/React.createElement("span", null, "Already have an account?"), /*#__PURE__*/React.createElement(Link, {
    to: "/login"
  }, "Login"))))), /*#__PURE__*/React.createElement(Footer, null));
};
export default RegisterPage;