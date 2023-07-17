import React from "react";
import Modal from "../UI/Modal";
import Heading from "./Heading";
import { PiCopySimple } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import Instagram from "../UI/instagram.svg";
import Facebook from "../UI/facebook.svg";
import Whatsapp from "../UI/whatsapp.svg";
import Reddit from "../UI/reddit.svg";
import Slack from "../UI/slack.svg";
import CopyToClipboard from "./CopyToClipboard";
import { copiedText } from "./CopyToClipboard";

function Refer(props) {
  const handleShare = (platform) => {
    let sharingUrl = "";

    switch (platform) {
      case "reddit":
        sharingUrl = "https://www.reddit.com/submit?url=";
        break;
      case "instagram":
        sharingUrl = "https://www.instagram.com/sharer.php?u=";
        break;
      case "facebook":
        sharingUrl = "https://www.facebook.com/sharer/sharer.php?u=example.org";
        break;
      case "whatsapp":
        sharingUrl = "https://api.whatsapp.com/send?text=";
        break;
      case "slack":
        sharingUrl = "https://slack.com/intents/share?text=";
        break;
      default:
        break;
    }

    const encodedText = encodeURIComponent(copiedText);
    const url = sharingUrl + encodedText;
    window.open(url, "_blank");
  };

  return (
    <Modal>
      <div className="flex flex-col items-center justify-start gap-3 px-4 p-3">
        <i className="absolute top-0 right-0 p-4 text-3xl text-black cursor-pointer">
          <RxCross1 onClick={props.onClose} />
        </i>
        <Heading>Refer to your friends</Heading>
        <div className="w-full h-max border border-slate-400 rounded-md p-2">
          <p className="text-[16px]">{copiedText}</p>
        </div>
        <p className="flex gap-2 justify-center items-center text-blue-500 font-semibold">
          <i>
            <CopyToClipboard />
            Copy
          </i>
        </p>
        <div className="flex justify-evenly items-center w-full text-3xl my-10">
          <span className="flex flex-col" onClick={() => handleShare("reddit")}>
            <img className="w-8 cursor-pointer" src={Reddit} alt="Reddit" />
            <p className="text-sm">Reddit</p>
          </span>
          <span
            className="flex flex-col justify-center items-center"
            onClick={() => handleShare("instagram")}
          >
            <img
              className="w-8 cursor-pointer"
              src={Instagram}
              alt="Instagram"
            />
            <p className="text-sm">Instagram</p>
          </span>
          <span
            className="flex flex-col justify-center items-center"
            onClick={() => handleShare("facebook")}
          >
            <img className="w-8 cursor-pointer" src={Facebook} alt="Facebook" />
            <p className="text-sm">Facebook</p>
          </span>
          <span
            className="flex flex-col justify-center items-center"
            onClick={() => handleShare("whatsapp")}
          >
            <img className="w-8 cursor-pointer" src={Whatsapp} alt="WhatsApp" />
            <p className="text-sm">WhatsApp</p>
          </span>
          <span
            className="flex flex-col justify-center items-center"
            onClick={() => handleShare("slack")}
          >
            <img className="w-8 cursor-pointer" src={Slack} alt="Slack" />
            <p className="text-sm">Slack</p>
          </span>
        </div>
      </div>
    </Modal>
  );
}

export default Refer;
