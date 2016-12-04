import { link } from 'react-router'
import NavBar from './NavBar'
import React from 'react'
// const styles = {
//   // backgroundImage: `url(${Background})`,
//   width : 1000,
//   height: auto
// };


const Header = React.createClass({
  render() {
    return (
      <header>
        <NavBar />
        <img src="http://3.bp.blogspot.com/-cz-NIkHxpbs/TxkzC4mu9VI/AAAAAAAADGA/3wcKTMUYt-o/s1600/HD+WALLPAPER+DOWNLOAD+FREE%2528%2528thewallpaperdb.blogspot+%252886%2529.jpg" />
      </header>
    )
  }
});

export default Header;
