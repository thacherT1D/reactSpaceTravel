import { link } from 'react-router'
import NavBar from './NavBar'
import React from 'react'
const style = {
  width: 1200,
  margin: 0
};

const Header = React.createClass({

  render() {
    return (
      <header>
        <NavBar />
        <img style={style} src={'http://edge.alluremedia.com.au/m/l/2015/09/Mars-Discovery.jpg'} />
      </header>
    )
  }
});

export default Header;
