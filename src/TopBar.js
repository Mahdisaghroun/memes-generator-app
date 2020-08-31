import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./TopBar.css";
import { withRouter,NavLink } from "react-router-dom";
function TopBar({ location }) {
  const { pathname } = location;
  return (
    <Navbar expand="lg" variant="dark">
      <Navbar.Brand href="/">Memes Generator App</Navbar.Brand>
      <Navbar.Toggle className="togglee" aria-controls="col" aria-expanded="true" />
      <Navbar.Collapse id="col">
        <Nav className="mr-auto">
          <NavLink to="/home" className="nav-link" activeClassName="nav-link active" >
            Home
          </NavLink>
          <NavLink to="/temp" className="nav-link" activeClassName="nav-link active">
           Memes Templates
          </NavLink>
          <NavLink to="/about"  className="nav-link" activeClassName="nav-link active">
          About
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default withRouter(TopBar);