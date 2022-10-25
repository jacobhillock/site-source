import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from './App';
import Anagram from './games/anagram';
import NotFound from './not-found';
import Contact from './contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/site-source/">
          <Route index element={ <App /> } />
          <Route path="games/">
            <Route path="anagram/" element={ <Anagram /> }>
              <Route path=":size" element={ <Anagram /> } />
            </Route>
          </Route>
          <Route path="contact" element={ <Contact /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
