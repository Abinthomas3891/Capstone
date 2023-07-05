import React from 'react';
import Contactus from './contact';
import Home from './home';
import About from './aboutus';
import PostCreation from "./postCreation.jsx";
import Register from './register';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Profile from './profileDetails';
import MyPosts from './userPosts';
import Login from './login';
import Blog from './blogpage';
import BlogDetail from './blogdetail1';

const App = () => {
  return (
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
      <Route path="/blogpage" element={<Blog />} />
      <Route path="/blogdetail1" element={<BlogDetail />} />
      
        
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
