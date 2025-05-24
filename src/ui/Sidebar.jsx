import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

function Sidebar() {
  return (
    <div className="bg-[#161D2F] rounded-2xl flex  lg:flex-col items-center px-3 py-3 md:py-5 justify-between  ">
      <div className="lg:flex-col flex gap-[3rem] items-center ">
        <Link to="home">
          <img src="/assets/logo.svg" />
        </Link>
        <div className="hidden lg:flex">
          <NavLinks />
        </div>
      </div>
      <div className="lg:hidden">
        <NavLinks />
      </div>
      <div className=" w-[30px] flex items-center ">
        <img src="/assets/image-avatar.png" />
      </div>
    </div>
  );
}

export default Sidebar;
