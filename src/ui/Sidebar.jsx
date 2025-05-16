import NavLinks from "./NavLinks";

function Sidebar() {
  return (
    <div className="bg-[#161D2F] row-[1] rounded-2xl flex flex-col items-center py-5 justify-between  ">
      <div className="flex-col flex gap-[3rem]">
        <img src="/assets/logo.svg" />
        <NavLinks />
      </div>
      <div className=" w-[30px] flex items-center ">
        <img src="/assets/image-avatar.png" />
      </div>
    </div>
  );
}

export default Sidebar;
