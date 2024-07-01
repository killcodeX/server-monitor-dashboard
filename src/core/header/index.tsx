import React from "react";
import { useDispatch } from "react-redux";
import { setLogout } from "../../redux/slices/auth";
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import "./styles.css";

interface sideBar {
  sideBarOpen: boolean;
  setSideBarOpen: (data: boolean) => void;
}

export default function Header({ sideBarOpen, setSideBarOpen }: sideBar) {
  const dispatch = useDispatch();
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
        <div className="brand-box">Logo</div>
      </div>
      <div className="header-right-side-container">
        <button onClick={() => dispatch(setLogout())}>Logout</button>
      </div>
    </header>
  );
}
