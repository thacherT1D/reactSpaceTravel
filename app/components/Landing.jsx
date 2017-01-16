import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import { Container, Button } from 'reactstrap';

import React from 'react';

var landingStyle = {
  margin: "20px"
}

const Landing = React.createClass({
  render() {
    return (
      <div>
        <Container style = {landingStyle}>
          <h1>Landing</h1>
          <p>Land on your next vacation planet</p>
        </Container>
        {/* <Grid fluid>
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
        </Grid> */}
      </div>

    )
  }
});

export default Landing;
