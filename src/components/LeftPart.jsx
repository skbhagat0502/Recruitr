import ProfileCard from "./ProfileCard";
import LeftMenuButton from "./LeftMenuButton";
import LeftMenuButtonDetails from "./LeftMenuButtonDetails";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function CreateButton(LeftMenuButtonDetail) {
  return (
    <>
      <hr />
      <LeftMenuButton
        key={LeftMenuButtonDetail.id}
        btn={LeftMenuButtonDetail.btn}
        btnText={LeftMenuButtonDetail.btnText}
        icon={LeftMenuButtonDetail.icon}
        location={LeftMenuButtonDetail.location}
      />
      <hr />
    </>
  );
}
function LeftPart() {
  return (
    <div className="flex flex-col md:w-[40%] w-full items-start md:overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-track-[#ccc] scrollbar-thumb-blue-500 md:pr-2">
      <ProfileCard />
      <div className="w-full">
        <h2 className="text-xl my-1">Build Resume With Recruitr</h2>
        <p className="text-slate-500 text-[15px]">
          Update these details for better chances of selection.These information
          can be viewed by the Hiring Teams.
        </p>
        {LeftMenuButtonDetails.map(CreateButton)}
        <hr />
      </div>
    </div>
  );
}
export default LeftPart;
