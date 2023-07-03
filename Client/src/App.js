import React from 'react';
import Contactus from './contact';
import Home from './home';
import About from './aboutus';
import DisplayUser from "./DisplayData"
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, ApolloLink, InMemoryCache,createHttpLink } from "@apollo/client";
import { Routes, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: "http://localhost:4500",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </ApolloProvider>
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
