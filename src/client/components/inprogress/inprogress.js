import React, { Component } from 'react';
import Header from '../../container/header';
import '../../styles/inprogress.css';

class Inprogress extends Component {
  render() {
    return (
      <div className="wrapper"> {/* Page container */}
        {/* Header */}
        <Header></Header>

        <main>
          <h3 className="inprogress">Page In Progress</h3>
        </main>
      </div>
      );
  }
}

export default Inprogress;
