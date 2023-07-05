import React from "react";
import Header from "./header";
import { Container, Row, Col, Card} from 'react-bootstrap';
import './style.css';
import Footer from "./footer.jsx";



class Blogs extends React.Component{
  render(){
    // constructor()
    //  {
    //   super();
    //   this.setActiveTab = this.setActiveTab.bind(this)
    //   this.state = {
    //      currentPage: '',
    //   }
    //  }
    const posts = [
      {
        
        title : ' Tips for Finding the Perfect Vacation Rental',
        content: 'We had an amazing time at our vacation rental! The location was perfect, and the house had all the amenities we needed. Highly recommended!.',
        author: 'Nithin Jose',
        date: 'July 1, 2023',
      },
      {
        title: 'Top Destinations for Family-Friendly Rentals',
        content: 'Our family had a fantastic stay at the rental property. The kids loved the swimming pool, and the nearby attractions kept us entertained throughout the vacation..',
        author: 'Nimisha Tomy',
        date: 'July 1, 2023',
      
      },
      {
        title: 'Perfect home for us',
        content: 'OnTheGo provided numerous great experiences for my family and me. The hosts are usually quite friendly and very helpful, and the dwellings fit the style of where you are traveling to; rustic in the mountains, modern in the city, little bungalows near the beach, etc. One time, the house was not quite ready and was untidy, but the host was so helpful and gave us a free hotel, and a voucher for the duration of our stay..',
        author: 'Seeniya Thankachan',
        date: 'July 2, 2023',
      
      },
      {
        title: 'Got our dream Home',
        content: 'Always found the vacation properties clean and adequately furnished. Properties were always in good neighbourhoods and easy to find. This is indeed a very useful way for families and friends who want to travel and stay together in a homely environment..',
        author: 'Gautham',
        date: 'July 3, 2023',
      
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
            <h2><a href="blogdetail1">{post.title}</a></h2>
            <p>{post.content}</p>
            <p>By {post.author} - {post.date}</p>
            <p>{post.a}</p>
          </div>
        ))}
      </div>
              </Col>
          </Row>
        </Container>
  
        

        
        
        <Footer />
      </>
    );
  }
}
 
export default Blogs;