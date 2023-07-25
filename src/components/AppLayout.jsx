import { useState } from "react";
import Header from "./Layouts/Header";
import SideBar from "./Layouts/SideBar";

import { GiHamburgerMenu } from "react-icons/gi";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="bg-[#5A189A] h-screen">
      <button
        className="inline-flex ip-2 mt-2 ml-3 text-3xl text-gray-500 rounded-lg sm:hidden"
        onClick={() => setOpenMenu(true)}
      >
        <GiHamburgerMenu />
      </button>
      <div
        className={`transition-all w-64 fixed top-0 left-0 h-screen ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 bg-[#240046] rounded-2xl border shadow-lg text-white`}
      >
        <SideBar setOpenMenu={setOpenMenu} />
      </div>
      <div className=" bg-[#240046]  sm:ml-64">
        <div className="bg-[#240046] text-white rounded-lg">
          <Header />
        </div>
        <main className=" bg-[#5A189A] p-3 max-w-[120rem] my-0 mx-auto flex flex-col gap-[3.2rem] h-full text-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
