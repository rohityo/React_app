import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,Nav } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';


class   Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="black" dark expand="md">
        <MDBNavbarBrand>
          <strong className="green-text">Blog bar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/allblog">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Addblog">Add Blog</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/getblog">My Blog</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>                                                                                                                            
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="github" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="linkedin" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBNavItem>
              <MDBNavLink color="blue" to="/logout">Log out</MDBNavLink>
            </MDBNavItem>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
