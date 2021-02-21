import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import About from './components/About';
import Nav from './components/Nav'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'
import Project from './components/Project'
import Intro from './components/Intro'

function App() {
  return (
  <div>
      <Router>
         <Nav />
         <Intro />
         <Footer />
        <Switch>
          <Route path="/about">
            <>
            <About />
            <Project />
            </>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
         </Switch>
         
        </Router>
        
      </div>


    
  
  );
}

export default App;
