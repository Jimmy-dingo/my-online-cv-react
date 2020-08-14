import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import MyOnlineCv from './components/MyOnlineCv';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.css';
import './App.css';

function App() {
  return (
    <Router>

      <div className='App'>

        <Header className="Header" />

        <main className="container-fluid">

          <Switch>

            <Route exact path="/">
              <About />
            </Route>

            <Route exact path="/my-online-cv">
              <MyOnlineCv />
            </Route>

            <Route exact path="/portfolio">
              <Portfolio />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>

          </Switch>

          <ScrollUpButton
          ContainerClassName="scroll-up-container"
          TransitionClassName="scroll-up-transition"
          EasingType="easeOutSine"
        />

        </main>

        <Footer />

      </div>

    </Router>
  );
};

export default App;