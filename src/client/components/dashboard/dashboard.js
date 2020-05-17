import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';
import Barchart from '../../utilities/barchart.js';
import * as utils from '../../utilities/common.js';

import data from '../../../server/data.json';
import baseLineData from '../../../server/baseline.json';

import '../../styles/dashboard.css';

//Import Dashboard data
const dataList = data;
const dataBaseLineList = baseLineData;

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  //Getting chart width & manupulations
  get _getWidth() {
    const MIN_VALUE = 20;
    const MAX_VALUE = 100;
    return Math.round(MIN_VALUE + Math.random() * (MAX_VALUE - MIN_VALUE)) + '%';
  };

  render() {
    return (
      <section>
        {/* Top section */}
        <article className="grid-container mt-4">
          <div>
            <div><h3>TXN <br/>MONTH</h3></div>
            <div><h3>JAN 19</h3></div>
          </div>
          <div>
            <div><h4>GROSS LOSS</h4></div>
            <div><h5>57.53 <small>bps</small><Icon.ArrowDown  color="#d20000" size={20} /></h5></div>
          </div>
          <div>
            <div><h4>NET LOSS</h4></div>
            <div><h5>12.81 <small>bps</small><Icon.ArrowUp  color="#299976" size={20} /></h5></div>
          </div>
          <div className="grid50">
            <div className="colspan text-center p-0"><h4>NEGATIVE BALANCE</h4></div>
            <div className="lborder">
              <span className="sub-text">CREATION</span>
              <span><h5>9.45 <small>bps</small><Icon.ArrowUp  color="#299976" size={20} /></h5></span>
            </div>
            <div className="lborder">
              <span className="sub-text">RECOVERED</span>
              <span><h5>2.36 <small>bps</small><Icon.ArrowUp  color="#299976" size={20} /></h5></span>
            </div>
          </div>
          <div className="grid50">
            <div className="colspan text-center p-0"><h4>DIRECT PAYOUT</h4></div>
            <div className="lborder">
              <span className="sub-text">CREDIT</span>
              <span><h5>0.45 <small>bps</small><Icon.ArrowUp  color="#299976" size={20} /></h5></span>
            </div>
            <div className="lborder">
              <span className="sub-text">DEBIT</span>
              <span><h5>0.55 <small>bps</small><Icon.ArrowUp  color="#299976" size={20} /></h5></span>
            </div>
          </div>
        </article>

        {/* Baseline Difference */}
        <article className="grid-container baseline mt-2">
          <div>Baseline <br />Difference</div>
          { dataBaseLineList.map((row, i) => {
              return (
                <div key={i}>
                  <span>{row.col}</span>
                  <span className={row.status?row.status:''}>{row.value ? row.value : '-'}</span>
                </div>
              );
            })
          }
        </article>

          {/* Main grid content */}
        <article className="main-grid mt-2">
          { dataList.map((row, i) => {
              return (
                <div className="grid-row" key={i}>
                  <div><span>{utils.getTxnMonth(row.txn_mth)}</span></div>
                  <div>
                    <span>{row.GROSS}</span>
                    <Barchart chartWidth={this._getWidth}></Barchart>
                  </div>
                  <div>
                    <span>{row.net}</span>
                    <Barchart chartWidth={this._getWidth}></Barchart>
                  </div>
                  <div>
                    <span>{row.nbc}</span>
                    <Barchart chartWidth={this._getWidth}></Barchart>
                  </div>
                  <div>
                    <span>{row.nbr}</span>
                    <Barchart chartWidth={this._getWidth}></Barchart>
                  </div>
                  <div>
                    <span>{row.credit}</span>
                    <Barchart chartWidth={this._getWidth}></Barchart>
                  </div>
                  <div>
                    <span>{row.debit}</span>
                    <Barchart chartWidth={this._getWidth}></Barchart>
                  </div>
                </div>
              );
            })
          }
        </article>
        
        {/* Download icons */}
        <aside className="download-icons">
          <ul>
            <li><Icon.Download  color="white" size={20} /></li>
            <li><Icon.FileText color="white" size={20} /></li>
            <li><Icon.Camera  color="white" size={20} /></li>
          </ul>
        </aside>
      </section>
    );
  }
}

export default Dashboard;
