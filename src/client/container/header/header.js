import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';
import '../../styles/header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-sm">
          <a className="navbar-brand" href="/">BA Central</a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">GCO Scorecard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Loss Forcasting</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Resources</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">PP</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Team Event</a>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right header-icons ml-4">
              <li><Icon.Bell  color="white" size={20} /></li>
              <li><Icon.QuestionCircle color="white" size={20} /></li>
              <li><Icon.Person  color="white" size={20} /></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
