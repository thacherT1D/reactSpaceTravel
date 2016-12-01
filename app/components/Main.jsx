import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import React from 'react';

const style = {
  color: 'green'
};

const Main = React.createClass({
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <Grid fluid>
        <Row>
        <Col style={style} xs={6} md={3}>Main What world!</Col>
        <Col xs={6} md={3}>Main What world!</Col>
        <Col xs={6} md={3}>Main What world!</Col>
        <Col xs={6} md={3}>Main What world!</Col>
        </Row>
        </Grid>
        </div>
      </MuiThemeProvider>
    )
  }
});

export default Main;
