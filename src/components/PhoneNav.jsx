import { RxDashboard } from "react-icons/rx";
import { TbBriefcase } from "react-icons/tb";
import { BsCheck2Circle } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { RiUserLine } from "react-icons/ri";
import { HiOutlineDocumentAdd, HiOutlinePencil } from "react-icons/hi";
import { TbDetails } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { BiUserPlus } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { GoBell } from "react-icons/go";
function PhoneNav(props) {
  return (
    <div className={props.classes}>
      <div className="flex flex-col cursor-pointer mb-5 ml-7 mt-[-10px]">
        <h1 className="text-[#1363DF] text-3xl font-bold">Recruitr</h1>
        <p className="text-[10px] text-slate-500">Your gateway to success!</p>
      </div>
      <div className="flex flex-col h-full gap-4">
        <li className="list-none flex justify-start items-center gap-2  text-slate-500 text-xl">
          <i className="text-2xl">
            <RiUserLine />
          </i>
          Profile
        </li>
        <li className="list-none flex justify-start items-center gap-2 text-slate-500 text-xl">
          <i className="text-2xl">
            <HiOutlinePencil />
          </i>
          Update Job Preference
        </li>
        <li className="list-none flex justify-start items-center gap-2 text-slate-500 text-xl">
          <i className="text-2xl">
            <HiOutlineDocumentAdd />
          </i>
          Update documents
        </li>
        <li className="list-none flex justify-start items-center gap-2 text-slate-500 text-xl">
          <i className="text-2xl">
            <TbDetails />
          </i>
          Hiring Process Detail
        </li>
        <li className="list-none flex justify-start items-center gap-2 text-slate-500 text-xl">
          <i className="text-2xl">
            <AiOutlineMessage />
          </i>
          Message
        </li>
        <li className="list-none flex justify-start items-center gap-2 text-slate-500 text-xl">
          <i className="text-2xl">
            <GoBell />
          </i>
          Notification
        </li>
        <li className="list-none flex justify-start items-center gap-2 text-slate-500 text-xl">
          <i className="text-2xl">
            <RxDashboard />
          </i>
          Dashboard
        </li>
        <li className="list-none flex justify-start items-center gap-2 text-slate-500 text-xl">
          <i className="text-2xl">
            <TbBriefcase />
          </i>
          Find Jobs
        </li>
        <li className="list-none flex justify-start items-center gap-2 text-slate-500 text-xl">
          <i className="text-2xl">
            <BsCheck2Circle />
          </i>
          Applied Jobs
        </li>
        <li className="list-none flex justify-start items-center gap-2 text-slate-500 text-xl">
          <i className="text-2xl">
            <BsFillStarFill className="text-yellow-500" />
          </i>
          Subscription Details
        </li>
        <li className="list-none flex justify-start items-center gap-2 text-slate-500 text-xl">
          <i className="text-2xl">
            <BiUserPlus />
          </i>
          Refer to Friends
        </li>
        <li className="list-none flex justify-start items-center gap-2 text-xl text-red-500 pt-2">
          <i className="text-2xl">
            <LuLogOut />
          </i>
          Log Out
        </li>
      </div>
    </div>
  );
}
export default PhoneNav;
