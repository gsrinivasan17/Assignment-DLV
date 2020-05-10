import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css';

import Header from '../src/client/container/header';
import Filters from '../src/client/components/filters';
//import Footer from '../src/client/container/footer';
import Main from '../src/client/container/main';
import './App.css';

function App() {
  return (
    <div className="wrapper"> {/* App conatiner */}
      <Header></Header> {/* Header & Navigation */}
      <Filters></Filters>
      <Main></Main> {/* Main page conatiner */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
