import React, { useState } from "react";
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import AccountMenu from "core/header/accountMenu";
import Notification from "core/header/notification";
import { PiCodepenLogoLight } from "react-icons/pi";
import "./styles.css";

interface sideBar {
  sideBarOpen: boolean;
  setSideBarOpen: (data: boolean) => void;
}

export default function Header({ sideBarOpen, setSideBarOpen }: sideBar) {
  return (
    <header className={`header ${sideBarOpen ? "header-reduced" : null}`}>
      <div className="header-left-side-container">
        <div
          role="button"
          className="side-bar-toggler"
          onClick={() => setSideBarOpen(!sideBarOpen)}
        >
          {sideBarOpen ? <TfiAngleDoubleLeft /> : <TfiAngleDoubleRight />}
        </div>
        {/* <div className="brand-box">
          <PiCodepenLogoLight />
        </div> */}
      </div>
      <div className="header-right-side-container">
        <Notification />
        <AccountMenu />
      </div>
    </header>
  );
}
