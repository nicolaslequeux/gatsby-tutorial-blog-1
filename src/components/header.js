import React, { useState } from 'react'
import { Link } from 'gatsby'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import iconJeep from "../images/icon-jeep.png"

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

      <Navbar fixed="top" light expand="md">

        <div className="container">

          <Link to="/">
            <img src={iconJeep} style={{ maxHeight: "42px", maxWidth: "42px", marginRight: "25px" }} alt="Icon Jeep" />
          </Link>

          <NavbarBrand href="/">{props.siteTitle}</NavbarBrand>

          <NavbarToggler onClick={toggle} />
          
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/team/">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tags/">Tags</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        
        </div>

      </Navbar>

  );
}


export default Header;
