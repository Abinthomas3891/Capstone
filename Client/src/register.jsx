import React, { useState , useContext  } from 'react';
import { AuthContext } from './AuthContext.jsx';
import { Link ,useNavigate } from 'react-router-dom';
import { Form, Button , Alert } from 'react-bootstrap';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import './assets/css/style.css';

import { useMutation } from '@apollo/client';
import {gql} from 'graphql-tag';


const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [dbErrror,setDbErrors]=useState([]);
  const context= useContext(AuthContext);
  let navigate = useNavigate();


  const REGISTER_USER= gql`
    mutation(
      $registerInput : registerInput
    ){
      registerUser(
        registerInput: $registerInput
      ){
        username
        email
        Phone
        token
      }
    }
  `

    // function Register(userData){
    //   };

  // async function userDetInsert (userData) {
  //   const query = `mutation {
  //             addUserDetails(users:{
                      
  //                     FullName: "${userData.FullName}",
  //                     Phone: "${userData.Phone}",
  //                     Email: "${userData.Email}",
  //                     Password: "${userData.Password}",
  //             }) {
                
  //               FullName
  //               Phone
  //               Email
  //               Password
  //             }}`;

  //             console.log(userData,"ill");
  //   const Udata = await graphQLFetch(query, {
  //     userData,
  //   });
  //   async function graphQLFetch(query, variables = {}) {
  //     try {
  //       const response = await fetch("http://localhost:4500/graphql", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           query,
  //           variables,
  //         }),
  //       });
  //       const res = await response.text();
  //       const resResult = JSON.parse(res);
  //       console.log(resResult, "result");
  //       if (resResult.errors) {
  //         const resError = resResult.errors[0];
  //         if (resError.extensions.code === "BAD_USER_INPUT") {
  //           const errDetails = resError.extensions.exception.errors.join("\n ");
  //           alert(`${resError.message}:\n ${errDetails}`);
  //         } else {
  //           alert(`${resError.extensions.code}: ${resError.message}`);
  //         }
  //       }
  //       return resResult.data;
  //     } catch (err) {
  //       alert(`sending data to server failed: ${err.message}`);
  //     }
  //   }
  // };

 
  const [ registerUser, {loading}] = useMutation(REGISTER_USER,
    {
      
    update(proxy,{data: {registerUser: userData}}){
      console.log('udata', userData);
      context.login(userData)
      navigate('/');
      console.log('logged in');

    },
      onError({ graphQLErrors}){
        setDbErrors(graphQLErrors);
        console.log("eror",graphQLErrors);
      }
    })

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

  const handleSubmit = async(e) => {
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

      const userDt = {
        username: name, 
        email: email,
        Phone: phone,
        Password: password,
      };

      console.log("inside" , userDt);
      
      registerUser({ variables: { registerInput: userDt } });
    }
  };

  return (
    <>
    <Header />
    <div className="register-page contact-form">
      <div className='register'>
      <h2>Register</h2>
      <Form name="reg" onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={handleNameChange}
            isInvalid={!!errors.name}
            name="fullname"
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
            name="phone"
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
            name="email"
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
            name="pwd"
          />
          {errors.password && <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>}
        </Form.Group>
        
        

        <Button className='primary-btn btn' type="submit">Register</Button>
        <div className="login-link">
          {dbErrror.map(function(error){
            return(
              <Alert severity="error">
                {error.message}
                </Alert>
            );
          })}
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
