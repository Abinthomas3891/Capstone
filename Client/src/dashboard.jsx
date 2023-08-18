import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import Header from "./userheader.jsx";
import Header from './header.jsx';
import Footer from "./footer.jsx";
import './assets/css/style.css';
// import post1 from './assets/images/post4.jpg';
// import post2 from './assets/images/post2.jpg';
// import post3 from './assets/images/post3.jpg';
// import post1 from './assets/images/p1.jpg';
// import post2 from './assets/images/post4.jpg';
// import post3 from './assets/images/post2.jpg';
// import post4 from './assets/images/post3.jpg';
import { useEffect ,useContext,useState} from 'react';
import { AuthContext } from './AuthContext.jsx';
const Dashboard = () => {
  // Sample data for house rentals
  
  const Message = [
    { id: 1, name: 'John', message: 'Hi, is this still available?'},
    { id: 2, name: 'Nithin', message: 'Hello, is this the final price?' }
  ];

  const [rentals,setRental] = useState([]);
  const [userData,setUser] = useState([]);
  const userContext=useContext(AuthContext);

  const getSingleUser = async (id) => {
    const query = `
  query getSingleUser($id: String!) {
    getSingleUser(id: $id) {
      id
      username
      Phone
      email
    }
  }
`;


const variables = { id: id };

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

    // console.log("user is - ",UserId);
    // console.log("type - ",typeof(UserId));
    const resdata = await response.json();

    console.log("UserRes ----",resdata);
    if (resdata.errors) {
      console.log(resdata.errors, "error");
    } else {
       console.log(resdata.data.getSingleUser);
       setUser(resdata.data.getSingleUser);
       console.log("hi---",resdata.data);
      
    }
  };


  

  const usff=useEffect(()=>{
    getSingleUser(userContext.user.user_id);
    getPostByUser(userContext.user.user_id);
  },[]);



  const getPostByUser = async (UserId) => {
    const query = `
  query GetPostByUser($UserId: String!) {
    getPostByUser(UserId: $UserId) {
      id
      Title
      UserId
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


const variables = { UserId: UserId };

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

    // console.log("user is - ",UserId);
    // console.log("type - ",typeof(UserId));
    const resdata = await response.json();

    console.log("resdata ----",resdata);
    if (resdata.errors) {
      console.log(resdata.errors, "error");
    } else {
       console.log("success-working");
       console.log(resdata.data.getPostByUser);
       setRental(resdata.data.getPostByUser);
       console.log("hi---",resdata.data);
      
    }
  };
  
  return (
    <>
      <Header />
      <div className='container-fluid bg-light p-5'>
        <Container>
          
          <div className='card-view p-5 dash-head'>
            <h1>Hello! {userData.username} <span>Welcome to your dashboard.</span> </h1>
          </div>
          <Row className='user-view'>
              <Col md={4} sm={12} >
                <div className='card-view'>
                  <h4>User Information</h4>
                  <hr/>
                  <Row className='user-view'>
                    <Col md={12} sm={12} >
                      <Card>
                        <Card.Body>
                        <Row className='user-view'>
                          <Col md={4} sm={4} className='user-label'>
                        <p>Name</p>
                        <h6>{userData.username}</h6>
                    </Col>
                    <Col md={4} sm={4} className='user-label'>
                        <p>Email</p>
                        <h6>{userData.email}</h6>
                    </Col>
                    <Col md={4} sm={4} className='user-label'>
                        <p>Phone</p>
                        <h6>{userData.Phone}</h6>
                    </Col>
                        </Row>   
                        </Card.Body>
                      </Card>
                    </Col>
                    
                  </Row>
                </div>
              </Col>
              <Col md={8} sm={12}>
                  <div className='card-view'>
                  <h4>Messages</h4>
                  <hr/>
                  <Row className='user-view saved'>
                    <Col md={12} sm={12} >
                    {Message.map((rental) => (
                      <>
                      <Row className='card-view-home' key={rental.id}>
                        {/* <Col md={2}>
                          <div className='pimg'>
                          <Card.Img variant="top" src={rental.image} />
                          </div>
                        </Col> */}
                        <Col md={5}>
                          <h3>{rental.name}</h3>
                          <p className='location'>{rental.message}</p>
                          
                          
                        </Col>
                        <Col md={4}>
                          <Link to="/postView" className='btn-login btn nav-link mt-3'>View Property</Link>
                        </Col>
                        <Col md={3}>
                          <Button className='btn-login btn btn-outline  mt-3' type="submit">Delete</Button>
                        </Col>
                        
                      </Row>
                      <hr></hr>
                      </>
                    ))}
                    </Col>
                    
                  </Row>
                </div>
              </Col>
            </Row>
          <div className='card-view'>
            <div className='head-link'>
                <h4>My Rental Properties</h4>
                <Link to="/userPosts">View All</Link>
            </div>
            <hr/>
            <Link to="/postCreation" className='primary-btn btn'>
              <i className="fas fa-plus"></i> Add Property
            </Link>
            <Row>
              {rentals.map((rental) => (
                <Col key={rental.id} md={4} sm={4} className='pb-4'>
                  <Card>
                    <Card.Img variant="top" src={`data:image/jpeg;base64,${rental.image}`} />
                    <Card.Body>
                      
                      <Card.Text>{rental.location}</Card.Text>
                      <Card.Text>{rental.price}</Card.Text>
                      <Card.Title>{rental.title}</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
              ))}
            </Row>
          </div>

          <div className='card-view'>
            <div className='head-link'>
                <h4>My Saved Properties</h4>
               
            </div>
            <hr/>
            
            <Row>
              {rentals.map((rental) => (
                <Col key={rental.id} md={4} sm={4} className='pb-4'>
                  <Card>
                    <div className='img-h'>
                      <Card.Img variant="top" src={`data:image/jpeg;base64,${rental.image}`} />
                    </div>
                    <Card.Body>
                      <Card.Title>{rental.title}</Card.Title>
                      <Card.Text>{rental.location}</Card.Text>
                      <Card.Text>{rental.price}</Card.Text>
                      <Button className='btn-login btn btn-outline' type="submit">Delete</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
         

        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;