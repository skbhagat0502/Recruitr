import Heading from "./Heading";
import Input from "./Input";
import RightPart from "./RightPart";
function WorkExp() {
  return (
    <RightPart>
      <Heading>Add Experience</Heading>
      <div className="w-full items-start flex flex-col justify-between">
        <form className="min-[865px]:grid flex flex-col min-[865px]:grid-cols-2 min-[865px]:grid-rows-5 gap-10 w-full justify-start">
          <Input label="Job Title" type="text" placeholder="Example:Google" />
          <Input
            label="Company Name"
            type="text"
            placeholder="Example:Product Manager"
          />
          <span className="flex gap-2 flex-col">
            <label>Employement Type</label>
            <select className="border border-slate-400 rounded-md h-10 px-2 w-full bg-white outline-none">
              <option>Select One</option>
              <option>Part Time</option>
              <option>Full Time</option>
              <option>Internships</option>
              <option>Contractual</option>
            </select>
          </span>
          <span className="flex gap-2 flex-col">
            <label>Working Status</label>
            <select className="border border-slate-400 rounded-md h-10 px-2 w-full bg-white outline-none">
              <option>Select One</option>
              <option>Currently Working</option>
            </select>
          </span>
          <Input
            label="Work Location"
            type="text"
            placeholder="Example:London-Work form home"
          />
          <Input
            label="Add C.T.C"
            type="number"
            placeholder="#only figure entry in salary"
          />
          <Input
            label="Starting Date"
            type="date"
            placeholder="#only figure entry in salary"
          />
          <Input label="Ending Date" type="date" />
          <Input
            label="Description"
            type="text"
            placeholder="Description about you"
            className="col-span-2"
          />
        </form>
      </div>
    </RightPart>
  );
}
export default WorkExp;
