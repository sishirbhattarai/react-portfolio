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

function App() {
  return (
  <div>
      <Router>
         <Nav />
         
        <Switch>
          <Route path="/about">
            <About />
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
