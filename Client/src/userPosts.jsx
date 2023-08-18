import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from "./userheader.jsx";
import Footer from "./footer.jsx";
import './assets/css/style.css';
import post1 from './assets/images/post4.jpg';
import post2 from './assets/images/post2.jpg';
import post3 from './assets/images/post3.jpg';
import { useEffect ,useContext,useState} from 'react';
import { AuthContext } from './AuthContext.jsx';

const Dashboard = () => {
  // Sample data for house rentals
  const [rentals,setRental] = useState([]);
  const user=useContext(AuthContext);

  const usff=useEffect(()=>{
    getPostByUser(user.user.user_id);
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
          
          <div className='card-view'>
            <div className='head-link'>
                <h4>My Rental Properties</h4>
                
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
                      <Card.Title>{rental.Title}</Card.Title>
                      <Card.Text>{rental.Location}</Card.Text>
                      <Card.Text>{rental.price}</Card.Text>
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
