import React from 'react';
import Contactus from './contact';
import Home from './home';
import About from './aboutus';
import PostCreation from "./postCreation.jsx";
import UserPosts from "./userPosts.jsx";
import ProfileDetails from "./profileDetails.jsx";
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/postCreation" element={<PostCreation />} />
        <Route path="/userPosts" element={<UserPosts />} />
        <Route path="/profileDetails" element={<ProfileDetails />} />
    </Routes>
  );
};

export default App;




// import './App.css';
// import Header from './header';
// import Home from './home';

// function App() {
//   return (
//     <div className="App">
//       <div>
//       <Header />
//       <Home />
      
//     </div>
//     </div>
//   );
// }

// export default App;
