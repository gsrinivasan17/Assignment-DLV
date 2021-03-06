import React, { Component } from 'react';
import '../styles/barchart.css';

class Barchart extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    let chartDimension = {
        width: this.props.chartWidth,
        height: '10px',
    };

    return (<span>
      <svg style={chartDimension}>
        <defs>
          <linearGradient id="chart">
            <stop offset="0%" stopColor="#e9dcee" />
            <stop offset="100%" stopColor="#decbe6" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url('#chart')" />
      </svg>
    </span>);
  }
}

export default Barchart;
