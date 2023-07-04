import "babel-polyfill";
import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";
import Contactus from "./contact.jsx";
import Home from "./home.jsx";
import About from "./aboutus.jsx";
import PostCreation from "./postCreation.jsx";
import Register from "./register.jsx";
import Dashboard from "./dashboard.jsx";
import Profile from "./profileDetails.jsx";
import MyPosts from "./userPosts.jsx";
import Login from "./login.jsx";
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
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profileDetails" element={<Profile />} />
        <Route path="/userPosts" element={<MyPosts />} />
        <Route path="/login" element={<Login />} />
        
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
