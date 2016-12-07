import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {grey800, cyan700} from 'material-ui/styles/colors';

 const NavBar = React.createClass({
   getInitialState() {
     return {
       open: false
     }
   },
   handleToggle() {
     this.setState({open: !this.state.open});
   },
   render() {
     return (
       <div>
         <AppBar
         onLeftIconButtonTouchTap={this.handleToggle}
         />
         <div>
           <Drawer
             width={200}
             open={this.state.open}>
             <MenuItem href="/">Earth</MenuItem>
             <MenuItem href="/moon">Moon</MenuItem>
             <MenuItem href="/mars">Mars</MenuItem>
             <MenuItem onClick={this.handleToggle}>Close</MenuItem>
           </Drawer>
         </div>
       </div>
     )
   }
 });

export default NavBar;
