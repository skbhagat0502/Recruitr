import Modal from "../UI/Modal";
import Heading from "./Heading";
import Search from "./Search";
import { RxCross1 } from "react-icons/rx";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

function Drawer(props) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const item = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedItems((prevItems) => [...prevItems, item]);
    } else {
      setSelectedItems((prevItems) =>
        prevItems.filter((prevItem) => prevItem !== item)
      );
    }
  };

  const handleRemoveItem = (item) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem !== item)
    );
  };

  const isItemChecked = (item) => {
    return selectedItems.includes(item);
  };

  return (
    <Modal>
      <div className="flex flex-col items-start justify-start gap-3 px-4 p-3">
        <i className="absolute top-0 right-0 p-4 text-3xl text-black cursor-pointer">
          <RxCross1 onClick={props.onClose} />
        </i>
        <Heading>Your Job Preferences</Heading>
        <Search />
        <p className="text-xl font-semibold">Popular Job Titles</p>
        <FormGroup sx={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={<Checkbox />}
            label="UI/UX Designer"
            value="UI/UX Designer"
            checked={isItemChecked("UI/UX Designer")}
            onChange={handleCheckboxChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Product Manager"
            value="Product Manager"
            checked={isItemChecked("Product Manager")}
            onChange={handleCheckboxChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Sales Executive"
            value="Sales Executive"
            checked={isItemChecked("Sales Executive")}
            onChange={handleCheckboxChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Human Resource Manager"
            value="Human Resource Manager"
            checked={isItemChecked("Human Resource Manager")}
            onChange={handleCheckboxChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Java Developer"
            value="Java Developer"
            checked={isItemChecked("Java Developer")}
            onChange={handleCheckboxChange}
          />
        </FormGroup>
        <p className="text-xl font-semibold">Your Preferences</p>
        <div className="flex flex-wrap justify-start items-center">
          {selectedItems.map((item) => (
            <p
              key={item}
              className="bg-blue-100 text-black h-6 flex justify-center items-center m-1 p-4 rounded-2xl border-blue-400 shadow-sm gap-3 text-[13px] font-semibold border-2"
            >
              {item}
              <i
                className="cursor-pointer"
                onClick={() => handleRemoveItem(item)}
              >
                <RxCross1 />
              </i>
            </p>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default Drawer;
