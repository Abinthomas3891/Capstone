import React from "react";
import Header from "./header";
import { Container, Row, Col, Card} from 'react-bootstrap';
import './style.css';
import Footer from "./footer.jsx";



class Blogdetail extends React.Component{
    render(){


        const posts = [
     
            {
              title : ' Tips for Finding the Perfect Vacation Rental',
              content: 'We had an amazing time at our vacation rental! The location was perfect, and the house had all the amenities we needed. Highly recommended!.I love this service. I have stayed in some really wonderful apartments over the years and all the host have been fabulous. The apartments have been in the best neighborhood, affordable and walking distance to everything and I love the fact that I can easily book right from the comfort of my home.',
              content:'The Great Blue Hole in Belize is probably one of the most famous travel photos ever. It’s also the biggest underwater sinkhole in the world, and it looks even more amazing if you see it in person! Touring the Blue Hole is one of the top ‘bucket list’ things to do in Central America. You can enjoy a scenic flight over the reef in a small plane or helicopter, and take photos of it from above, or hop on a boat and go scuba diving inside the sinkhole itself.I got a chance to fly over the Great Blue Hole in a little prop plane recently, and it was an amazing experience! We circled the Blue Hole several times at low altitude to see what it looks like up close, and then flew over some other sights in the Caribbean Sea. This travel blog will share my experience with the Blue Hole Belize flight, which company to use, flight costs and safety thoughts, and everything else you need to know before you go. Then, I’ll share some fun facts about this natural wonder in the Caribbean!',
              author: 'Nithin Jose',
              date: 'July 1, 2023',
            },
        ];  
        return(
            <>
            <Header />
            <div className='about-banner'>
              <div className="overlay"></div>
              <h1>Blogs</h1>
            </div>
               
            <Container className="pt-2 pb-2">
          <Row className="justify-content-center">
              <Col md={6} className="blog">
              {/* <h1>My Blog</h1> */}
      <div className="container">
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>By {post.author} - {post.date}</p>
          </div>
        ))}
      </div>
              </Col>
          </Row>
        </Container>


            <div className="container-fluid bg-light">
            <Container className="pb-2">
                <Row className="justify-content-center">
                    
                    <Col md={6} className='contact-form justify-content-center d-flex flex-column p-md-5'>
                        <h1>Mission</h1>
                        <p>Our mission is to deliver excellent client service and to improve the environment and people's lives thus making a difference and adding value</p>
                        <h1 className="pt-3">Vision</h1>
                        <p>Our vision is bringing together passion, people, technology, and real estate to revolutionise the property management industry. We set the bar for excellent customer service.</p>
                        
                    </Col>
                    <Col md={6} className='contact-form'>
                        <img src="../images/mission-vision.jpg" alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer />
      </>
    );
  }
}
 
export default Blogdetail;               