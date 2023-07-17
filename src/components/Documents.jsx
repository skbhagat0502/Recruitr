import Modal from "../UI/Modal";
import Heading from "./Heading";
import { RxCross1 } from "react-icons/rx";
import FileInput from "../UI/FileInput";
function Documents(props) {
  return (
    <Modal>
      <div className="flex flex-col items-start justify-start gap-3 px-4 p-3">
        <i className="absolute top-0 right-0 p-4 text-3xl text-black cursor-pointer">
          <RxCross1 onClick={props.onClose} />
        </i>
        <Heading>Update Documents</Heading>
        <span>
          <p className="text-xl font-semibold">Document Details</p>
          <p className="text-sm text-slate-500">
            Upload These Necessary Documents, Company will ask to Upload During
            Document verification Process.
          </p>
        </span>
        <div className="flex flex-col gap-4 w-full">
          <FileInput label="Upload PAN Card" />
          <FileInput label="Upload Blank Cheque" />
          <FileInput label="Reliving Letter(Previous Company)" />
          <FileInput label="Resignation(Previous Company)" />
          <FileInput label="Upload Driving Licence" />
        </div>
        <p>Note:Contact Customer Support to upload other documents.</p>
      </div>
    </Modal>
  );
}
export default Documents;
