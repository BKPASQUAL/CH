import React from "react";
import { Navbar, Nav } from "rsuite";
import CogIcon from "@rsuite/icons/legacy/Cog";
import { NavLink, Link, Outlet } from "react-router-dom"; // Use NavLink
import "../../assets/scss/Navbar.css";

function Navbars() {
  return (
    <div>
      <Navbar className="navbar-con">
        <Link className="navbar-con-title">
             Champika Hardware
        </Link>
        <div className="nav-flex"></div>
        <Nav  className="navbar-con-items">
          <Link to="" className="nav-items">Home</Link>
        </Nav>
        {/* <Nav>
          <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
        </Nav> */}
      </Navbar>
    </div>
  );
}

export default Navbars;
