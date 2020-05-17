import React, { Component } from 'react';
import Header from '../header';
import Main from '../main';
import '../../styles/home.css';

class Home extends Component {
  render() {
    return (
      <div className="wrapper"> {/* Home container */}
      {/* Header */}
      <Header></Header>
      
      <Main></Main> {/* Main page container */}
    </div>
    );
  }
}

export default Home;
