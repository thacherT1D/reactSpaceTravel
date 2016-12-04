import { BrowserRouter } from 'react-router'

import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Main from './Main';
import Header from './Header';
import Mars from './Mars';
import Footer from './Footer';

import React from 'react';



const Home = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div>
          <Header />
          <Main />
          <Footer />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
});

export default Home;
