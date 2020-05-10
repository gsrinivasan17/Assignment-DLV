import React, { Component } from 'react';
import Dashboard from '../../components/dashboard';
import '../../styles/main.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Dashboard></Dashboard>
      </div>
    );
  }
}

export default Main;
