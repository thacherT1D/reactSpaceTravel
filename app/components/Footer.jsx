import React from 'react'

var footerStyle = {
  background: "#eee",
  padding: "20px",
  width: "100%",
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  bottom: "0px",
};

const Footer = React.createClass({
  render() {
    return (

      <footer style ={footerStyle}>
        &copy; Space is Rad! 🚀
      </footer>
    )
  }
});

export default Footer;
