import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import { Match, Miss } from 'react-router';


import Earth from './Earth';
import Mars from './Mars';
import Moon from './Moon';
import NotFound from './NotFound';

import React from 'react';

const style = {
  color: 'green'
};

const Main = React.createClass({
  render() {
    return (
        <div>
        {/* <Grid fluid>
        <Row>
        <Col style={style} xs={6} md={3}>Main What world!</Col>
        <Col xs={6} md={3}>Main What world!</Col>
        <Col xs={6} md={3}>Main What world!</Col>
        <Col xs={6} md={3}>Main What world!</Col>
        </Row>
        </Grid> */}
          <Match pattern="/" exactly component={Earth} />
          <Match pattern="/moon" component={Moon} />
          <Match pattern="/mars" component={Mars} />
          <Miss component={NotFound} />
        </div>
    )
  }
});

export default Main;
