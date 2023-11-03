import React from "react";
import Sidebar from "../components/common/Sidebar";
import Navbars from "../components/common/Navbars";
import { Outlet } from "react-router-dom"; // Import Outlet from react-router-dom

function Home() {
  return (
    <div style={{width:"100%"}}>
      <Navbars />
      <div style={{display:"flex" ,width:"100%"}} className="hello">
      <Sidebar />
      <Outlet /> {/* Render nested routes inside Home */}
      </div>
    
    </div>
  );
}

export default Home;
