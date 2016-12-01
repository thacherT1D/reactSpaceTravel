import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

const Mars = React.createClass({
  getInitialState() {
    return {
      open: false,
    }
  },
  handleOpen() {
    this.setState({open: true});
  },
  handleClose() {
    this.setState({open: false});
  },
  handleOpenSecond() {
    this.setState({open2: true});
  },
  handleCloseSecond() {
    this.setState({open2: false});
  },
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];
    const actionsSecond = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleCloseSecond}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleCloseSecond}
      />,
    ];
    return (
      <main>
        <h1>Mars</h1>
        <FlatButton label="Modal Dialog" onClick={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Only actions can close this dialog.
        </Dialog>
        <FlatButton label="Second Modal Dialog" onClick={this.handleOpenSecond} />
        <Dialog
          title="Dialog With Actions"
          actions={actionsSecond}
          modal={true}
          open={this.state.open2}
        >
          Only actions can close this dialog SECOND.
        </Dialog>
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
