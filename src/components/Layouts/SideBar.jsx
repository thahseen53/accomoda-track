import { GrClose } from "react-icons/gr";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { TbLayoutDashboard, TbSettingsPlus } from "react-icons/tb";
import { BsCardChecklist } from "react-icons/bs";
import { LuHotel } from "react-icons/lu";
import { AiOutlineUserAdd } from "react-icons/Ai";

const SideBar = ({ setOpenMenu }) => {
  return (
    <>
      <div className=" flex flex-col items-center gap-4 h-full w-full">
        <div
          onClick={() => setOpenMenu(false)}
          className="sm:hidden text-2xl font-bold ml-auto p-3 hover:bg-gray-200 cursor-pointer"
        >
          <GrClose />
        </div>
        <div className="w-7/12 p-2">
          <img className="w-full h-full rounded-full" src={Logo} alt="" />
        </div>

        <NavLink
          to="/"
          className="hover:bg-[#5A189A] w-full p-2 text-center cursor-pointer"
        >
          <div className="flex items-center gap-2 justify-center">
            {" "}
            <span>
              <TbLayoutDashboard />
            </span>
            <h3 className="text-[1rem] font-bold p-1">Dashboard</h3>
          </div>
        </NavLink>

        <NavLink
          to="bookingsPage"
          className="hover:bg-[#5A189A] w-full p-2 text-center cursor-pointer"
        >
          <div className="flex items-center gap-2 justify-center">
            <span>
              <BsCardChecklist />
            </span>
            <h3 className="text-[1rem] font-bold p-1">Bookings Page</h3>
          </div>
        </NavLink>

        <NavLink
          to="cabins"
          className="hover:bg-[#5A189A] w-full p-2 text-center cursor-pointer"
        >
          <div className="flex items-center gap-2 justify-center">
            <span>
              <LuHotel />
            </span>
            <h3 className="text-[1rem] font-bold p-1">Cabins</h3>
          </div>
        </NavLink>

        <NavLink
          to="users"
          className="hover:bg-[#5A189A] w-full p-2 text-center cursor-pointer"
        >
          <div className="flex items-center gap-2 justify-center">
            <span>
              <AiOutlineUserAdd />
            </span>
            <h3 className="text-[1rem] font-bold p-1">Users</h3>
          </div>
        </NavLink>

        <NavLink
          to="settings"
          className="hover:bg-[#5A189A] w-full p-2 text-center cursor-pointer"
        >
          <div className="flex items-center gap-2 justify-center">
            <span>
              <TbSettingsPlus />
            </span>
            <h3 className="text-[1rem] font-bold p-1">Settings</h3>
          </div>
        </NavLink>

        <NavLink
          to="accounts"
          className="hover:bg-[#5A189A] w-full p-2 text-center cursor-pointer"
        >
          <div className="flex items-center gap-2 justify-center">
            <span>
              <BsCardChecklist />
            </span>
            <h3 className="text-[1rem] font-bold p-1">Accounts</h3>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default SideBar;
