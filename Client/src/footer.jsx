import React from 'react';
import './footer.css';
import fb from './assets/fb.png';
import twitter from './assets/twitter.png';
import linkdin from './assets/linkdin.png';
import insta from './assets/insta.jpg';

const Footer = () => {
    return (
        <div className="footer">
           
            <h3>About</h3>
            <p className="footerp">On The Go is a top online house  or apartment provider services in the world, it is famous with it's wide variety of choices. On The Go always keeps customer satisfaction and quality services at affordable price.</p>
                <div className="footerlinks">
            <div className="categories">
                <h4>Categories</h4>
                <a href=""><p>House</p></a>
                <a href=""><p>Apartment & Unit</p></a>
                <a href=""><p>Townhouse</p></a>
                <a href=""><p>Villa</p></a>
            </div>
            <div className="qlinks">
                <h4>Quick Links</h4>
                <a href=""><p>Home</p></a>
                <a href=""><p>About</p></a>
                <a href=""><p>Contact</p></a>
                <a href=""><p>Blog</p></a>
            </div>
            <div className="popular">
                <h4>Popular</h4>
                <a href=""><p>Two Bedroom House</p></a>
                <a href=""><p>One Bedroom House</p></a>
                <a href=""><p>Townhouses</p></a>
                <a href=""><p>Apartments</p></a>
            </div>
            <div className='social'>
                <h4>Social Media:</h4>
                <div className='socialmedia'>
                    <a href = "https://www.facebook.com/"><p><img src={fb} alt="facebook" /></p></a>
                    <a href = "https://twitter.com/"><p><img src={twitter} alt="twitter" /></p></a>
                    <a href = "https://www.linkedin.com/"><p><img src={linkdin} alt="linkdin" /></p></a>
                    <a href = "https://www.instagram.com/"><p><img src={insta} alt="instagram" /></p></a>
                   
                </div>
            </div>
            </div>
            
            <hr></hr>
            <div className="copy">
                <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by <a href="/">ONTHEGO</a>.
                </p>
            </div>
        </div >
    );
};

export default Footer;