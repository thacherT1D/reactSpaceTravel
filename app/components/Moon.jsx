import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const Moon = React.createClass({
  render() {
    return (
      <main>
      <h1>Moon</h1>
      <FlatButton label="earth" default={true} href="/"/>
      <FlatButton label="moon" primary={true} href="/moon"/>
      <FlatButton label="mars" secondary={true} href="/mars"/>
      </main>
    )
  }
});

export default Moon;
