import React from 'react';
import { Link } from "react-router-dom";
import '../styles/indexstyle.css'
import '../styles/contactstyle.css'
import '../styles/portfoliostyle.css'

function Nav() {
    return (
        <header>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark" >
          <a className="navbar-brand" href=" ">Sishir Bhattarai</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
              <Link to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="portfolio.html">Resume</a>
              </li>
  
              <li className="nav-item">
                <a className="nav-link" href="index.html">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
          );
        }

export default Nav;