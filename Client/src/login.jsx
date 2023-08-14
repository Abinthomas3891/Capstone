import React, { useState , useContext  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button , Alert } from 'react-bootstrap';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import './assets/css/style.css';
import { AuthContext } from './AuthContext.jsx';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';




// Define the GraphQL mutation for the login


const LOGIN_USER= gql`
mutation(
  $loginInput : loginInput
){
  loginUser(
    loginInput: $loginInput
  ){
    username
    email
    Phone
    token
  }
}
`



const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const context= useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [dbErrror,setDbErrors]=useState([]); 

 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const [ loginUser, {loading}] = useMutation(LOGIN_USER,
    {
      
    update(proxy,{data: {loginUser: userData}}){
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
  



  const handleSubmit = async(e) => {
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
     
      try{

        const loginDt={
          email:email,
          Password:password
        }

        loginUser({ variables: { loginInput: loginDt } });
      
      }
      catch(error){
        console.log("catch")
        console.log(error)
      }
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
        {dbErrror.map(function(error){
            return(
              <Alert severity="error">
                {error.message}
                </Alert>
            );
          })}
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
