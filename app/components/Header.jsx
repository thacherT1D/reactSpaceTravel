import { link } from 'react-router'
import NavBar from './NavBar'
import React from 'react'

const Header = React.createClass({
  render() {
    return (
      <header>
        <NavBar />
      </header>
    )
  }
});

export default Header;
