import React, { Component } from 'react';
import Dashboard from '../../components/dashboard';

import '../../styles/main.css';

class Main extends Component {
  render() {    
    return (
      //Common main container for all pages
      <div className="main">
        {/* Dashboard Content Included */}
        <Dashboard></Dashboard>
      </div>
    );
  }
}

export default Main;
