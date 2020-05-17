import React, { Component } from 'react';
import Filters from '../../components/filters';
import Dashboard from '../../components/dashboard';
import '../../styles/main.css';

class Main extends Component {
  render() {    
    return (       
      <main> {/* Common main container for all pages */}
        {/* Filters */}
        <Filters></Filters>

        {/* Dashboard Content Included */}
        <Dashboard></Dashboard>
      </main>
    );
  }
}

export default Main;
