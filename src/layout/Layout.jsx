import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="bg-neutral-50 font-Inter">
      <NavBar />
      <div className="p-5 md:py-10 md:px-10 overflow-hidden">
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
