import { RxDashboard } from "react-icons/rx";
import { TbBriefcase } from "react-icons/tb";
import { BsCheck2Circle } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { BsFillCaretDownFill } from "react-icons/bs";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Dropdown from "./Dropdown";
import { useState } from "react";
import PhoneNav from "./PhoneNav";
import Search from "./Search";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [DropDownIsShown, SetDropDownIsShown] = useState(false);
  const [iconUp, setIconUp] = useState(false);
  const handleClick = () => {
    SetDropDownIsShown(!DropDownIsShown);
    setIconUp(!iconUp);
  };
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header className="w-full min-[530px]:px-10 border-b border-slate-300 shadow-md">
        <nav className="flex items-center justify-evenly  mx-auto min-[515px]:h-15 min-[530px]:p-0 p-2 w-full">
          <i className="min-[1160px]:hidden px-4 text-2xl absolute z-10 left-0">
            <MenuOutlinedIcon onClick={handleShowMenu} />
          </i>
          <div className="min-[530px]:flex hidden justify-center align-center flex-col mx-auto mr-8 cursor-pointer">
            <h1 className="text-[#1363DF] text-3xl font-bold">Recruitr</h1>
            <p className="text-[10px] text-slate-600">
              Your gateway to success!
            </p>
          </div>
          <Search />
          <ul className="min-[1160px]:flex hidden justify-around min-w-[450px]">
            <li>
              <a className="flex px-2 items-center text-slate-500 cursor-pointer hover:text-slate-950">
                <i className="p-2 text-xl">
                  <RxDashboard className="text-slate-500 hover:text-slate-950" />
                </i>
                Dashboard
              </a>
            </li>
            <li>
              <a className="flex px-2 items-center text-slate-500 cursor-pointer hover:text-slate-950">
                <i className="p-2 text-xl">
                  <TbBriefcase className="text-slate-500 hover:text-slate-950" />
                </i>
                Find Jobs
              </a>
            </li>
            <li>
              <a className="flex px-2 items-center text-slate-500 cursor-pointer hover:text-slate-950">
                <i className="p-2 text-xl">
                  <BsCheck2Circle className="text-slate-500 hover:text-slate-950" />
                </i>
                Applied Jobs
              </a>
            </li>
          </ul>
          <div className="flex justify-evenly mx-auto ml-2">
            <i className="min-[1200px]:flex hidden text-2xl items-center mx-2 border-l border-slate-300 pl-4 cursor-pointer">
              <AiOutlineMessage />
            </i>
            <i className="min-[1200px]:flex hidden text-2xl items-center border-r border-slate-300 mx-2 pr-4 cursor-pointer">
              <GoBell />
            </i>
            <button
              className="flex items-center gap-2 bg-[#DFE6EB] border rounded-lg px-1"
              onClick={handleClick}
            >
              <i className="text-4xl">
                <CgProfile />
              </i>
              <span className="min-[635px]:flex hidden text-blue-500 font-semibold">
                Sandeep
              </span>
              <i className={`text-blue-500 ${iconUp && "rotate-180"}`}>
                <BsFillCaretDownFill />
              </i>
            </button>
          </div>
        </nav>
      </header>
      {DropDownIsShown && <Dropdown />}
      <PhoneNav
        classes={`w-full h-full p-4 flex flex-col absolute top-0 bg-[#f5f5f5] justify-between transition-all ease-in-out duration-500
        ${showMenu && "left-0"} ${!showMenu && "left-[-100%]"}`}
      />
    </>
  );
}
export default Navbar;
