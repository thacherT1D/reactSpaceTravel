import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import React from 'react';
import {  } from 'reactstrap';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';

var planetStyle = {
  margin: "100px"
}

const Earth = React.createClass({
  render() {
    return (
        <div>
          <h1>Earth</h1>
          <Container style = {planetStyle}>
            <Button label="earth" default={true} href="/">Thing 1</Button>
            <Button label="moon" primary={true} href="/moon">Thing 2</Button>
            <Button label="mars" secondary={true} href="/mars">Thing 3</Button>
          </Container>
        </div>
    )
  }
});

export default Earth;
