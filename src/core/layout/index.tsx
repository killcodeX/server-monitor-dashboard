import React, { useState } from "react";
import Header from "core/header";
import Sidebar from "core/sidebar";
import { Outlet } from "react-router-dom";
import "./styles.css";

export default function Layout() {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  return (
    <>
      <div className="layout">
        <Header sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
        <Sidebar sideBarOpen={sideBarOpen} />
        <main className={`main ${sideBarOpen ? "main-reduced" : null}`}>
          <Outlet />
        </main>
      </div>
      ;
    </>
  );
}
