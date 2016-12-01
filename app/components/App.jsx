import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Main from './Main';
import NavBar from './NavBar';
import Mars from './Mars';

const Home = React.createClass({
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
        <NavBar />
        {/* <Main /> */}
        <Mars />
        </div>
      </MuiThemeProvider>
    )
  }
});

export default Home;
