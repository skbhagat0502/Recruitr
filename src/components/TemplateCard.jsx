import { useState } from "react";

function TemplateCard(props) {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedImage(selectedValue === selectedImage ? "" : selectedValue);
  };

  return (
    <label className="flex flex-col bg-[#f5f5f5] justify-center items-center p-3 rounded-xl border border-slate-400 shadow-md">
      <img src={props.img} alt="format" />
      <input
        type="radio"
        name="template"
        value={props.img}
        checked={selectedImage === props.img}
        onChange={handleImageChange}
        className="scale-150"
      />
    </label>
  );
}

export default TemplateCard;
