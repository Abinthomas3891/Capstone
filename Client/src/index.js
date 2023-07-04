import React from 'react';
import './assets/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
