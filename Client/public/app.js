import "babel-polyfill";
import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";
import Contactus from "./contact.jsx";
import Home from "./home.jsx";
import About from "./aboutus.jsx";
import PostCreation from "./postCreation.jsx";
//import UserPosts from "./userPosts.jsx";
//import ProfileDetails from "./profileDetails.jsx";
import Register from "./register.jsx";
import Dashboard from "./dashboard.jsx";
import Profile from "./profileDetails.jsx";
import MyPosts from "./userPosts.jsx";
import Login from "./login.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
      path: "/",
      element: /*#__PURE__*/React.createElement(Home, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/about",
      element: /*#__PURE__*/React.createElement(About, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/contact",
      element: /*#__PURE__*/React.createElement(Contactus, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/postCreation",
      element: /*#__PURE__*/React.createElement(PostCreation, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/register",
      element: /*#__PURE__*/React.createElement(Register, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/dashboard",
      element: /*#__PURE__*/React.createElement(Dashboard, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/profileDetails",
      element: /*#__PURE__*/React.createElement(Profile, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/userPosts",
      element: /*#__PURE__*/React.createElement(MyPosts, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/login",
      element: /*#__PURE__*/React.createElement(Login, null)
    })));
  }
}
const RouterElement = /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(App, null));
ReactDOM.render(RouterElement, document.getElementById("root"));