import "babel-polyfill";
import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";
import Contactus from "./contact.jsx";
import Home from "./home.jsx";
import About from "./aboutus.jsx";
import PostCreation from "./postCreation.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/postCreation" element={<PostCreation />} />
        
        </Routes>
      </>
    );
  }
}

const RouterElement = (
  <Router>
    <App />
  </Router>
);
ReactDOM.render(RouterElement, document.getElementById("root"));
