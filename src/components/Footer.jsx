import { AiOutlineCopyrightCircle } from "react-icons/ai";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full min-[475px]:h-10 h-15 border-t border-slate-400  bg-white">
      <div className="flex flex-col min-[475px]:flex-row justify-center min-[475px]:items-center min-[475px]:justify-between p-2 px-8 text-center">
        <span className="flex justify-center items-center">
          <AiOutlineCopyrightCircle /> {year} Recruitr
        </span>
        <div>
          <span className="border-r border-slate-400 px-4">
            Customer Support
          </span>
          <span className="px-4">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
