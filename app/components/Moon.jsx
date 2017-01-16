import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import { Container, Button } from 'reactstrap';

import React from 'react';

var planetStyle = {
  margin: "20px"
}

const Moon = React.createClass({
  render() {
    return (
      <div>
        <Container style = {planetStyle}>
          <h1>Moon</h1>
          <p>The Moon is great</p>
          <Button label="" secondary={true} href="/mars">Buy Ticket to Mars</Button>
        </Container>
      </div>
    )
  }
});

export default Moon;
