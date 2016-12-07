import { link } from 'react-router'
import NavBar from './NavBar'
import React from 'react'


const Header = React.createClass({
  render() {
    return (
      <header style ={
        { backgroundImage: "url('http://3.bp.blogspot.com/-cz-NIkHxpbs/TxkzC4mu9VI/AAAAAAAADGA/3wcKTMUYt-o/s1600/HD+WALLPAPER+DOWNLOAD+FREE%2528%2528thewallpaperdb.blogspot+%252886%2529.jpg')",
        height: 500,
        backgroundSize: 'cover',
        }}>
        <NavBar />
      </header>
    )
  }
});

export default Header;
