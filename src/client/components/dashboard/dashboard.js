import React, { Component } from 'react';
import Barchart from '../../utilities/barchart.js';
import * as utils from '../../utilities/common.js';
import data from '../../../server/data.json';
import baseLineData from '../../../server/baseline.json';
import '../../styles/dashboard.css';

const dataList = data;
const dataBaseLineList = baseLineData;

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="grid-container mt-4">
          <div>
            <div><h3>TXN <br/>MONTH</h3></div>
            <div><h3>JAN 19</h3></div>
          </div>
          <div>
            <div><h4>GROSS LOSS</h4></div>
            <div><h5>57.53 <small>bps</small></h5></div>
          </div>
          <div>
            <div><h4>NET LOSS</h4></div>
            <div><h5>12.81 <small>bps</small></h5></div>
          </div>
          <div className="grid50">
            <div className="colspan text-center p-0"><h4>NEGATIVE BALANCE</h4></div>
            <div className="lborder">
              <span className="sub-text">CREATION</span>
              <span><h5>9.45 <small>bps</small></h5></span>
            </div>
            <div className="lborder">
              <span className="sub-text">RECOVERED</span>
              <span><h5>2.36 <small>bps</small></h5></span>
            </div>
          </div>
          <div className="grid50">
            <div className="colspan text-center p-0"><h4>DIRECT PAYOUT</h4></div>
            <div className="lborder">
              <span className="sub-text">CREDIT</span>
              <span><h5>0.45 <small>bps</small></h5></span>
            </div>
            <div className="lborder">
              <span className="sub-text">DEBIT</span>
              <span><h5>0.55 <small>bps</small></h5></span>
            </div>
          </div>
        </div>

        <div className="grid-container baseline mt-2">
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
        </div>

        <div className="main-grid mt-2">
          { dataList.map((row, i) => {
              return (
                <div className="grid-row" key={i}>
                  <div><span>{utils.getWidth(row.txn_mth)}</span></div>
                  <div>
                    <span>{row.GROSS}</span>
                    <Barchart chartInput={row.GROSS}></Barchart>
                  </div>
                  <div>
                    <span>{row.net}</span>
                    <Barchart></Barchart>
                  </div>
                  <div>
                    <span>{row.nbc}</span>
                    <Barchart></Barchart>
                  </div>
                  <div>
                    <span>{row.nbr}</span>
                    <Barchart></Barchart>
                  </div>
                  <div>
                    <span>{row.credit}</span>
                    <Barchart></Barchart>
                  </div>
                  <div>
                    <span>{row.debit}</span>
                    <Barchart></Barchart>
                  </div>
                </div>
              );
            })
          }
        </div>

      </div>
    );
  }
}

export default Dashboard;