import React, { Component } from 'react';
import '../../styles/filters.css';

class Filters extends Component {
  render() {
    return (
      // Top filters content starts
      <div className="filters">
        <div className="wrapper">

          {/* Title with Breadcrumb */}
          <div className="d-flex align-items-center">
            <div className="column">
              <h2>Daily Loss Vintage - Actuals</h2>
              <ul className="breadcrumb">
                <li>BA Central</li>
                <li>Tools</li>
                <li>DLV</li>
              </ul>
            </div>

            {/* Right chart/pivot button group */}
            <div className="column text-right">
              <span className="text mr-5">Date Cut-off: 15 Jan 2019</span>
              <span className="text mr-4">View</span>
              <div className="btn-group btn-group-sm">
                <button type="button" className="btn btn-primary active">Chart</button>
                <button type="button" className="btn btn-primary">Pivot</button>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center">

            {/* Left bps/dollar/count button group */}
            <div className="column">
              <div className="btn-group btn-group-sm">
                <button type="button" className="btn btn-primary active">bps</button>
                <button type="button" className="btn btn-primary">dollar</button>
                <button type="button" className="btn btn-primary">count</button>
              </div>
            </div>

            {/* Right filters dropdowns */}
            <div className="column text-right">
              <div className="filter dropdown mr-5">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="arrivalDay" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Arrival Day (13)
                  </button>
                <div className="dropdown-menu" aria-labelledby="arrivalDay">
                  <div className="radio-container">
                    <h6>TYPE</h6>
                    <label className="radio">Arrival Day
                      <input type="radio" defaultChecked name="arrivalday" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="radio">Business Arrival Day
                      <input type="radio" name="arrivalday" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="radio-container mt-4">
                    <h6>MONTHS</h6>
                    <label className="radio">Jan 19 (13)
                      <input type="radio" defaultChecked name="businessarrivalday" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="radio">Dec 18 (32)
                      <input type="radio" name="businessarrivalday" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="radio">Nov 18 (45)
                      <input type="radio" name="businessarrivalday" />
                      <span className="checkmark"></span>
                    </label>
                  </div>                  
                </div>
              </div>

              <div className="filter dropdown mr-5">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="momCamparison" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  MoM Camparison
                </button>
                <div className="dropdown-menu" aria-labelledby="momCamparison">
                  <div className="radio-container">
                    <h6>BASELINE</h6>
                    <label className="radio">3 Months (Default)
                      <input type="radio" defaultChecked name="momcomparison" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="radio">6 Months
                      <input type="radio" name="momcomparison" />
                      <span className="checkmark"></span>
                    </label>
                  </div>

                  <div className="checkbox-container pt-0">
                    <h6>MONTHS</h6>
                    <label className="checkbox">Dec 18
                      <input type="checkbox" defaultChecked name="months" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="checkbox">Nov 18
                      <input type="checkbox" defaultChecked name="months" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="checkbox">Oct 18
                      <input type="checkbox" name="months" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="filter dropdown">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="filters" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Filters
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="filters">
                  <div className="radio-container">
                    <h6>FILTERS CONTENT HERE</h6>
                  </div>
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
