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

function App() {
  return (
  <div>
               <Router>
               <Nav />
               <About />
     <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/contact">
            <Contact />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </Router>
      </div>


    
  
  );
}

export default App;
