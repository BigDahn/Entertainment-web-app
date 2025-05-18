import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import { useEntertainment } from "../context/Entertainment";
import Loading from "./Loading";

function AppLayout() {
  const { isLoading } = useEntertainment();

  return (
    <div className="grid grid-cols-[70px_1fr] grid-rows-[40rem_1fr] gap-3 m-auto h-[100vh] py-3 px-4 overflow-hidden max-w-[120rem]">
      <Sidebar />
      <div
        className={`${
          isLoading
            ? "px-5 max-w-[120rem]  m-auto"
            : "px-5 max-w-[120rem] overflow-y-scroll "
        }`}
      >
        {isLoading ? <Loading /> : <Outlet />}
      </div>
    </div>
  );
}

export default AppLayout;
