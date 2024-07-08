import React from "react";
import { NavLink } from "react-router-dom";
import {
  TfiViewGrid,
  TfiCalendar,
  TfiClipboard,
  TfiSettings,
} from "react-icons/tfi";
import { PiCodepenLogoLight } from "react-icons/pi";
import "./styles.css";

interface sideBar {
  sideBarOpen: boolean;
}

export default function Sidebar({ sideBarOpen }: sideBar) {
  return (
    <aside className={`side-bar ${sideBarOpen ? "side-bar-open" : null}`}>
      <div className="side-bar-logo-box">
        <div className="brand-box">
          <PiCodepenLogoLight />
        </div>
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
          to="/schedules"
          className={`navlink ${sideBarOpen ? "side-text" : null}`}
        >
          <TfiCalendar />
          <span>Schedules</span>
        </NavLink>
        <NavLink
          to="/reports"
          className={`navlink ${sideBarOpen ? "side-text" : null}`}
        >
          <TfiClipboard />
          <span>Reports</span>
        </NavLink>
        <NavLink
          to="/settings"
          className={`navlink ${sideBarOpen ? "side-text" : null}`}
        >
          <TfiSettings />
          <span>Settings</span>
        </NavLink>
      </div>
    </aside>
  );
}
