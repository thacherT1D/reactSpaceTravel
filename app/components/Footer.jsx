import React from 'react'

var divStyle = {
  background: "#eee",
  padding: "20px",
  width: "100%",
  display: 'flex',
  justifyContent: 'center'
};

const Footer = React.createClass({
  render() {
    return (

      <footer style ={divStyle}>
        &copy; Space is Rad! 🚀
      </footer>
    )
  }
});

export default Footer;
