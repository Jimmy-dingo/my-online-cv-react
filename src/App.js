import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import Footer from './components/Footer/Footer';
import MyOnlineCv from './components/MyOnlineCv/MyOnlineCv.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main className="container-fluid">
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/my-online-cv">
              <MyOnlineCv />
            </Route> 
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;