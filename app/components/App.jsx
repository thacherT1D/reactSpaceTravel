import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import Main from './Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const style = {
  color: 'red'
};

const Home = React.createClass({
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
        <Main />
        <Grid fluid>
        <Row>
        <Col style={style} xs={6} md={3}>Hello, world!</Col>
        <Col xs={6} md={3}>Hello, world!</Col>
        <Col xs={6} md={3}>Hello, world!</Col>
        <Col xs={6} md={3}>Hello, world!</Col>
        </Row>
        </Grid>
        </div>
      </MuiThemeProvider>
    )
  }
});

export default Home;
