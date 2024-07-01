import React from "react";
import { NavLink } from "react-router-dom";
import { TfiViewGrid, TfiSettings } from "react-icons/tfi";
import "./styles.css";

interface sideBar {
  sideBarOpen: boolean;
}

export default function Sidebar({ sideBarOpen }: sideBar) {
  return (
    <aside className={`side-bar ${sideBarOpen ? "side-bar-open" : null}`}>
      <div className="side-bar-logo-box">
        <div className="brand-box">Logo</div>
      </div>
      <div className="side-bar-navigation">
        <NavLink
          to="/"
          className={`navlink ${sideBarOpen ? "side-text" : null}`}
        >
          <TfiViewGrid />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/2"
          className={`navlink ${sideBarOpen ? "side-text" : null}`}
        >
          <TfiSettings />
          <span>Settings</span>
        </NavLink>
      </div>
    </aside>
  );
}
