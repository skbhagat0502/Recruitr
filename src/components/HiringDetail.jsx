import Modal from "../UI/Modal";
import Heading from "./Heading";
import img from "../assets/image.png";
import { RxCross1 } from "react-icons/rx";

function HiringDetails(props) {
  return (
    <Modal>
      <div className="flex flex-col items-center justify-start gap-3 w-full h-screen bg-gradient-to-b from-[#F6F9FF] to-[#5197FF]">
        <i className="absolute top-0 right-0 p-4 text-3xl text-black cursor-pointer">
          <RxCross1 onClick={props.onClose} />
        </i>
        <span className="px-4 py-1 w-full text-start">
          <Heading>Highring Process in Detail</Heading>
        </span>
        <div className="h-[30%] px-3 flex w-full flex-col justify-end gap-3 items-center">
          <img src={img} className="w-[100px] text-center" />
          <p className="font-semibold">
            Get Job with our Simplest Hiring Process
          </p>
          <p className="text-center text-[12px] text-slate-600 w-[90%] mx-auto">
            We provide you a very user Friendly process so that no Employee &
            Employer waste to much time in Hiring Process, Our Simplest Process
            Will Work according to you.
          </p>
        </div>
        <div className="w-full bg-white rounded-t-xl flex flex-col justify-start items-center overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-track-[#ccc] scrollbar-thumb-blue-500 pb-10 relative before:content-[''] before:h-[365px] before:my-16 before:p-[1px] before:bg-blue-500  before:absolute before:left-5">
          <div className="relative w-[90%] h-[100px] border border-slate-400 bg-white shadow-md mx-auto mt-5 rounded-md px-3 py-2 before:content-['1'] before:absolute before:left-[-15px] before:bg-blue-600 before:rounded-full before:w-7 before:h-7 before:flex before:justify-center before:items-center before:text-white before:top-[36%]">
            <p className="font-semibold">Job Posting & Application Phase</p>
            <p className="text-[12px] text-slate-500">
              Every Employer Post a Job from there side, after all verification
              the Job will be Active on Recruitr which will be visible to
              Applicants just within few minutes.
            </p>
          </div>
          <div className="w-[90%] h-[100px] border border-slate-400 bg-white shadow-md mx-auto mt-5 rounded-md px-3 py-2 before:content-['2'] before:absolute  before:bg-blue-600 before:rounded-full before:w-7 before:h-7 before:flex before:justify-center before:items-center before:text-white before:top-[36%] before:left-[-15px] relative">
            <p className="font-semibold">Shortlisting Phase for Employers</p>
            <p className="text-[12px] text-slate-500">
              After receiving Applications within a Month Employer will short-
              list all Applicants according to there needs and Move them to next
              Phase of Assessment.
            </p>
          </div>
          <div className="w-[90%] h-[100px] border border-slate-400 bg-white shadow-md mx-auto mt-5 rounded-md px-3 py-2 before:content-['3'] before:absolute before:left-[-15px] before:bg-blue-600 before:rounded-full before:w-7 before:h-7 before:flex before:justify-center before:items-center before:text-white before:top-[36%] relative">
            <p className="font-semibold">Assessment Phase</p>
            <p className="text-[12px] text-slate-500">
              After Shortlist/Screen in Employer will send Assessment to all the
              Candidates with 1-2 Days of Screen in, Assessment will be submit
              from Employer on first Phase itself for easy process.
            </p>
          </div>
          <div className="w-[90%] h-[100px] border border-slate-400 bg-white shadow-md mx-auto mt-5 rounded-md px-3 py-2 before:content-['4'] before:absolute before:left-[-15px] before:bg-blue-600 before:rounded-full before:w-7 before:h-7 before:flex before:justify-center before:items-center before:text-white before:top-[36%] relative">
            <p className="font-semibold">Interview Phase</p>
            <p className="text-[12px] text-slate-500">
              After Shortlisting the Assessment candidates will be Moved to
              Interview Phase & Interview will be Conducted within 4-5 Days.
              Note: Interviews can be more than one.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default HiringDetails;
