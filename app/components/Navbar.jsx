import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Button } from 'reactstrap';

 const NavBar = React.createClass({
   render() {
     return (
       <div>
         <Navbar color="faded" light>
           <NavbarBrand href="/">reactstrap</NavbarBrand>
           <Nav className="float-right" navbar>
             <NavItem>
               <NavLink href="/components/">Components</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
             </NavItem>
           </Nav>
         </Navbar>
       </div>
     )
   }
 });

export default NavBar;
