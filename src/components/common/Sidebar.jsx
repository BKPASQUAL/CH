import React, { useState } from 'react';
import { Sidenav, Nav } from "rsuite";
import { Link } from "react-router-dom";
import "../../assets/scss/Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [isButtonHovered, setButtonHovered] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    setButtonHovered(false); // Reset the button hover state when another button is clicked
  };

  const handleButtonHover = () => {
    setButtonHovered(true);
  };

  const handleButtonBlur = () => {
    setButtonHovered(false);
  };

  return (
    <div className={`sidebar`}>
      <div style={{ width: collapsed ? 80 : 240, transitionDuration: '500ms', backgroundColor: "#ffffff" }}>
        <Sidenav defaultOpenKeys={["3", "4"]}>
          <Sidenav.Body>
            <button
              className={`btn btn-dark collapse-btn ${isButtonHovered ? 'hovered' : ''}`}
              onClick={toggleCollapsed}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonBlur}
            >
              <FontAwesomeIcon icon={collapsed ? faBars : faBars} />
            </button>
            <Nav>
              <Link to="Items" className="sidebar-items selected">
                {collapsed ? (
                  <FontAwesomeIcon icon={faLayerGroup} />
                ) : (
                  <>
                    <FontAwesomeIcon icon={faLayerGroup} style={{ paddingRight: "25px" }} />
                    {collapsed ? null : 'Items'} {/* Conditionally render 'Items' text */}
                  </>
                )}
              </Link>
              <Link to="supliers" className="sidebar-items">
                {collapsed ? (
                  <FontAwesomeIcon icon={faLayerGroup} />
                ) : (
                  <>
                    <FontAwesomeIcon icon={faLayerGroup} style={{ paddingRight: "25px" }} />
                    {collapsed ? null : 'Suppliers'} {/* Conditionally render 'Items' text */}
                  </>
                )}
              </Link>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </div>
  );
}

export default Sidebar;
