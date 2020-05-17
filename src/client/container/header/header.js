import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import '../../styles/header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-sm">
          <React.Fragment>
            {/* Brand Name */}
            <Link className="navbar-brand" to="/">BA Central</Link>

            {/* Main menu */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/inprogress"}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/inprogress"}>GCO Scorecard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/inprogress"}>Loss Forcasting</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/inprogress"}>Resources</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/inprogress"}>PP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/inprogress"}>Team Event</Link>
              </li>              
            </ul>

            {/* Right profiles icons section */}
            <ul className="nav navbar-nav navbar-right header-icons ml-4">
                <li><Icon.Bell  color="white" size={20} /></li>
                <li><Icon.QuestionCircle color="white" size={20} /></li>
                <li><Icon.Person  color="white" size={20} /></li>
            </ul>
          </React.Fragment>       
        </nav>
      </header>
    );
  }
}

export default Header;
