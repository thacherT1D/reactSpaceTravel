import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import { Container, Button } from 'reactstrap';

import React from 'react';

var planetStyle = {
  margin: "20px"
}

const Mars = React.createClass({
  render() {
    return (
      <div>
        <Container style = {planetStyle}>
          <h1>Mars</h1>
          <p>Mars is great</p>
          <Button label="" secondary={true} href="/mars">Buy Ticket to Mars</Button>
        </Container>
      </div>
    )
  }
});

export default Mars;
