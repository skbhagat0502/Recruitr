import { NavLink } from "react-router-dom";
function LeftMenuButton(props) {
  return (
    <NavLink
      to={`${props.location}`}
      className="flex justify-between bg-white hover:bg-[#232323] active:bg-[#232323] hover:text-white active:text-white my-2 p-1 rounded-md items-center cursor-pointer"
    >
      <span>
        <p className="text-lg">{props.btn.substring(0, 35) + "..."}</p>
        <p className="text-slate-500 text-[15px]">
          {props.btnText.substring(0, 40) + "..."}
        </p>
      </span>
      {props.icon}
    </NavLink>
  );
}
export default LeftMenuButton;
