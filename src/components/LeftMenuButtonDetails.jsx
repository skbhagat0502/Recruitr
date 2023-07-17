import { AiOutlinePlusCircle } from "react-icons/ai";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };
const LeftMenuButtonDetails = [
  {
    id: "1",
    btn: "Work Experience & Skills",
    btnText: "Add all your Internships,Work Details.",
    icon: <AiOutlinePlusCircle className="text-2xl" />,
    location: "/",
  },
  {
    id: "2",
    btn: "Qualifications",
    btnText: "Highlight your Education in the eye of recruiters",
    icon: <AiOutlinePlusCircle className="text-2xl" />,
    location: "/qualifications",
  },
  {
    id: "3",
    btn: "Highlights,Sports",
    btnText: "Show your Highlights & sports etc to recruiting teams",
    icon: <AiOutlinePlusCircle className="text-2xl" />,
    location: "/highlights",
  },
  {
    id: "4",
    btn: "Recommendations",
    btnText: "Provide Recommendations,get Recommendations",
    icon: <AiOutlinePlusCircle className="text-2xl" />,
    location: "/recommendations",
  },
  {
    id: "5",
    btn: "Upload Video Resume",
    btnText: "Now share your details in video form to Employers",
    icon: <AiOutlinePlusCircle className="text-2xl" />,
    location: "/upload-video-resume",
  },
  {
    id: "6",
    btn: "Download Resume",
    btnText: "All data will be combined in a format.You can download",
    icon: <AiOutlinePlusCircle className="text-2xl" />,
    location: "/download-resume",
  },
  {
    id: "7",
    btn: "Are you still looking for Jobs/Internship",
    btnText: "Update your status for better reach.",
    icon: <Switch checked />,
    location: "/update-status",
  },
];

export default LeftMenuButtonDetails;
