import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import React from 'react';
import {  } from 'reactstrap';
// import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { Container, Button } from 'reactstrap';

var planetStyle = {
  margin: "20px"
}

const Earth = React.createClass({
  render() {
    return (
        <div>
        <Container style = {planetStyle}>
          <h1>Earth</h1>
          <p>Earth is great</p>
          <Button label="" secondary={true} href="/mars">Buy Ticket to Mars</Button>
        </Container>
        </div>
    )
  }
});

export default Earth;
