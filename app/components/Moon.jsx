import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import React from 'react';

const Moon = React.createClass({
  render() {
    return (
      <div>
        <h1>Moon</h1>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={6} md={3}>
                Lorem ipsum dolor.
            </Col>
            <Col xs={12} sm={6} md={3}>
                Lorem ipsum dolor.
            </Col>
            <Col xs={12} sm={6} md={3}>
                Lorem ipsum dolor.
            </Col>
            <Col xs={12} sm={6} md={3}>
                Lorem ipsum dolor.
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
});

export default Moon;
