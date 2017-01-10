import { BrowserRouter } from 'react-router'

import Main from './Main';
import Header from './Header';
import Mars from './Mars';
import Footer from './Footer';
import Navbar from './Navbar';
import React from 'react';



const Home = React.createClass({
  render() {
    return (
      <BrowserRouter>
          <div>
          <Navbar />
          <Header />
          <Main />
          <Footer />
          </div>
      </BrowserRouter>
    )
  }
});

export default Home;
