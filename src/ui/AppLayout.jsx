import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-cols-[70px_1fr] grid-rows-[auto_1fr] gap-3 m-auto h-[100vh] py-3 px-4">
      <Sidebar />
      <div className="px-5 max-w-[120rem]   ">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
