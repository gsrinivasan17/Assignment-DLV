import React, { Component } from 'react';
import '../../styles/filters.css';

class Filters extends Component {
  render() {
    return (
      // Top filters content starts
      <div className="filters">
        <div className="wrapper">
          <div className="d-flex align-items-center">
            <div className="column">
              <h2>Daily Loss Vintage - Actuals</h2>
              <ul className="breadcrumb">
                <li>BA Central</li>
                <li>Tools</li>
                <li>DLV</li>
              </ul>
            </div>
            <div className="column text-right">
              <span className="text mr-5">Date Cut-off: 15 Jan 2019</span>
              <span className="text mr-4">View</span>
              <div className="btn-group btn-group-sm">
                <button type="button" className="btn btn-primary">Chart</button>
                <button type="button" className="btn btn-primary">Pivot</button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="column">
              <div className="btn-group btn-group-sm">
                <button type="button" className="btn btn-primary">bps</button>
                <button type="button" className="btn btn-primary">dollar</button>
                <button type="button" className="btn btn-primary">count</button>
              </div>
            </div>
            <div className="column text-right">
            <div className="filter dropdown mr-5">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Arrival Day (13)
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="/">Option 1</a>
                  <a className="dropdown-item" href="/">Option 2</a>
                  <a className="dropdown-item" href="/">Option 3</a>
                </div>
              </div>
            <div className="filter dropdown mr-5">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  MoM Camparison
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="/">Option 1</a>
                  <a className="dropdown-item" href="/">Option 2</a>
                  <a className="dropdown-item" href="/">Option 3</a>
                </div>
              </div>
              <div className="filter dropdown">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Filters
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="/">Option 1</a>
                  <a className="dropdown-item" href="/">Option 2</a>
                  <a className="dropdown-item" href="/">Option 3</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
