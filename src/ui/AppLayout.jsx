import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="h-[100vh] max-w-[60rem] m-auto px-5">
      <Outlet />
    </div>
  );
}

export default AppLayout;
