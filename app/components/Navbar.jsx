import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Button } from 'reactstrap';

 const NavBar = React.createClass({

   render() {
     return (
       <div>
         <Navbar color="faded" light>
           <NavbarBrand href="/">SpaceTravel</NavbarBrand>
           <Nav className="float-right" navbar>
             <NavItem>
               <NavLink href="/moon">Moon</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href="/mars">Mars</NavLink>
             </NavItem>
           </Nav>
         </Navbar>
       </div>
     )
   }
 });

export default NavBar;
