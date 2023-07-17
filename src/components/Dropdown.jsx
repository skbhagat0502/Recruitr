import { RiUserLine } from "react-icons/ri";
import { HiOutlineDocumentAdd, HiOutlinePencil } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { TbDetails } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { BiUserPlus } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import Drawer from "./Drawer";
import { useState } from "react";
import Refer from "./Refer";
import Documents from "./Documents";
import HiringDetails from "./HiringDetail";
import SubscriptionDetails from "./Subscription";

function Dropdown() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showRefer, setShowRefer] = useState(false);
  const [showHiring, setShowHiring] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);

  const handleToggle = (setState) => {
    setState((prevState) => !prevState);
  };

  return (
    <div className="w-56 border-2 border-slate-400 rounded-xl p-4 flex flex-col gap-3 absolute z-1 right-0 m-2 bg-white">
      <span className="list-none flex justify-start items-center gap-2 cursor-pointer">
        <i>
          <RiUserLine />
        </i>
        Profile
      </span>
      <span
        onClick={() => handleToggle(setShowDrawer)}
        className="list-none flex justify-start items-center gap-2 cursor-pointer"
      >
        <i>
          <HiOutlinePencil />
        </i>
        Update Job Preference
      </span>
      <span
        onClick={() => handleToggle(setShowDocuments)}
        className="list-none flex justify-start items-center gap-2 cursor-pointer"
      >
        <i>
          <HiOutlineDocumentAdd />
        </i>
        Update documents
      </span>
      <span
        onClick={() => handleToggle(setShowHiring)}
        className="list-none flex justify-start items-center gap-2 cursor-pointer"
      >
        <i>
          <TbDetails />
        </i>
        Hiring Process Detail
      </span>
      <span
        onClick={() => handleToggle(setShowSubscription)}
        className="list-none flex justify-start items-center gap-2 cursor-pointer"
      >
        <i>
          <BsFillStarFill className="text-yellow-500" />
        </i>
        Subscription Details
      </span>
      <span
        onClick={() => handleToggle(setShowRefer)}
        className="list-none flex justify-start items-center gap-2 cursor-pointer"
      >
        <i>
          <BiUserPlus />
        </i>
        Refer to Friends
      </span>
      <span className="list-none flex justify-start items-center gap-2 text-red-500 border-t-2 border-slate-300 pt-2 cursor-pointer">
        <i>
          <LuLogOut />
        </i>
        Log Out
      </span>
      {showDrawer && <Drawer onClose={() => handleToggle(setShowDrawer)} />}
      {showRefer && <Refer onClose={() => handleToggle(setShowRefer)} />}
      {showDocuments && (
        <Documents onClose={() => handleToggle(setShowDocuments)} />
      )}
      {showHiring && (
        <HiringDetails onClose={() => handleToggle(setShowHiring)} />
      )}
      {showSubscription && (
        <SubscriptionDetails
          onClose={() => handleToggle(setShowSubscription)}
        />
      )}
    </div>
  );
}

export default Dropdown;
