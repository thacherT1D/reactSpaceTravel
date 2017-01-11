import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import React from 'react';
import { Button } from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Earth = React.createClass({
  render() {
    return (
        <div>
        <Button color="danger">Danger!</Button>
          <h1>Earth</h1>
          <div>
            <Button label="earth" default={true} href="/"/>
            <Button label="moon" primary={true} href="/moon"/>
            <Button label="mars" secondary={true} href="/mars"/>
          </div>
        </div>
    )
  }
});

export default Earth;
