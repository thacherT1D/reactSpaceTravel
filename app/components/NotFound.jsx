import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const Mars = React.createClass({
  render() {
    return (
      <main>
        <h1>NOT FOUND 404</h1>
        <div>
          <FlatButton label="earth" default={true} href="/"/>
          <FlatButton label="moon" primary={true} href="/moon"/>
          <FlatButton label="mars" secondary={true} href="/mars"/>
        </div>
      </main>
    )
  }
});

export default Mars;
