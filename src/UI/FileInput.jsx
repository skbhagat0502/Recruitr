import { FiUpload } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";

function FileInput(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedFormats = ["application/pdf", "image/jpeg", "image/png"];
      const isFormatAllowed = allowedFormats.includes(file.type);
      if (isFormatAllowed) {
        setSelectedFile(file);
        setShowDeleteIcon(true);
      } else {
        setSelectedFile(null);
        setShowDeleteIcon(false);
        alert(
          "Invalid file format. Please select a PDF, JPG, JPEG, or PNG file."
        );
      }
    }
  };

  const handleDelete = () => {
    setSelectedFile(null);
    setShowDeleteIcon(false);
  };

  return (
    <div className="flex flex-col gap-[1px]">
      <p className="font-semibold">{props.label}</p>
      <label
        htmlFor={`dropzone-file-${props.label}`}
        className="flex flex-col items-center justify-between w-full border-2 border-gray-300 rounded-md cursor-pointer bg-white px-2 py-2"
      >
        <div className="w-full flex justify-between items-center">
          <p>
            {selectedFile ? selectedFile.name : "Upload only jpg/pdf/jpeg/png"}
          </p>
          <span className="text-2xl">
            {selectedFile && showDeleteIcon ? (
              <AiOutlineDelete
                onClick={handleDelete}
                className="text-red-500"
              />
            ) : (
              <FiUpload />
            )}
          </span>
        </div>
        <input
          id={`dropzone-file-${props.label}`}
          type="file"
          className="hidden"
          accept="application/pdf, image/jpeg, image/png"
          onChange={handleFileChange}
        />
      </label>
      <p className="text-sm text-slate-400">
        Note: PDF file only | 2-5 MB file size maximum
      </p>
    </div>
  );
}

export default FileInput;
