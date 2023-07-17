import Modal from "../UI/Modal";
import Heading from "./Heading";
import { BiRupee } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import Button from "@mui/material/Button";
function SubscriptionDetails(props) {
  return (
    <Modal>
      <div className="flex flex-col items-start justify-between gap-3 px-4 w-full h-full p-3">
        <i className="absolute top-0 right-0 p-4 text-3xl text-black cursor-pointer">
          <RxCross1 onClick={props.onClose} />
        </i>
        <Heading>Subscription Details</Heading>
        <div className="flex flex-col justify-start gap-5">
          <div className="w-full gap-2 flex flex-col">
            <p className="text-xl font-semibold">Existing Plan</p>
            <div className="w-full h-max border-2 border-blue-500 rounded-md p-2 gap-2 flex flex-col">
              <p className="text-xl font-semibold">
                Recruitr Fresher Candidate
              </p>
              <p className="text-[12px] text-slate-500">
                Purchased on 27th Mar 2023
              </p>
              <p className="text-[12px] text-slate-500">
                Valid Till: 27th June 2023
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <p className="text-xl font-semibold">Upgrade your Plan to</p>
            <div className="flex flex-col border-2 border-yellow-600 p-3 rounded-md">
              <label className="flex justify-start items-center gap-4">
                <input type="radio" className="scale-[2]" />
                <span className="flex flex-col">
                  <p className="text-xl font-semibold">
                    Recruitr Gold Candidate
                  </p>
                  <p className="flex gap-2">
                    <span className="flex justify-center items-center text-blue-800 font-semibold">
                      <BiRupee />
                      200
                    </span>
                    <span className="flex justify-center items-center text-slate-500 line-through">
                      <BiRupee />
                      400
                    </span>
                    <span className="bg-blue-500 flex justify-center items-center py-[2px] px-3 text-white rounded-2xl text-[12px]">
                      50% off
                    </span>
                  </p>
                </span>
              </label>
              <p className="text-[14px] font-semibold border-t-2 border-yellow-500 mt-2 pt-2">
                Get a chance to Apply Jobs which asking experience
              </p>
              <p className="text-[14px] text-slate-500">
                Using our Gold subscription package, one can also Apply to the
                jobs which asking Experienced Candidates.
              </p>
              <p className="text-[14px] text-slate-400 w-full text-center">
                View less
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col border-2 border-blue-500 px-3 py-2 rounded-md">
            <label className="flex gap-4">
              <input type="radio" className="scale-[2]" />
              <span>
                <p className="text-xl font-semibold flex flex-col">
                  Recruitr Diamond Candidate
                </p>
                <p className="flex gap-2">
                  <span className="flex justify-center items-center text-blue-800 font-semibold">
                    <BiRupee />
                    400
                  </span>
                  <span className="flex justify-center items-center text-slate-500 line-through">
                    <BiRupee />
                    800
                  </span>
                  <span className="bg-blue-500 flex justify-center items-center py-[2px] px-3 text-white rounded-2xl text-[12px]">
                    50% off
                  </span>
                </p>
              </span>
            </label>
            <p className="w-full text-center text-slate-400 text-[14px]">
              View more
            </p>
          </div>
        </div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#232323",
            "&:hover": {
              backgroundColor: "#000",
            },
            textAlign: "center",
            width: "100%",
            position: "relative",
            bottom: "-25px",
          }}
        >
          Upgrade Subscription
        </Button>
      </div>
    </Modal>
  );
}
export default SubscriptionDetails;
