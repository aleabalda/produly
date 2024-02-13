import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SidebarData } from "../data/SidebarData";

const Sidebar = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="sidebar">
        <ul className="sidebar-list">
          {SidebarData.map((val, key) => (
            <li
              className="row"
              id={location.pathname === val.path ? "active" : ""}
              key={key}
              onClick={() => handleNavigate(val.path)}
            >
              <div className="icon">{val.icon}</div>
              <div className="row-name">{val.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
