import { CiSearch } from "react-icons/ci";

function Search(props) {
  return (
    <div className="flex w-full">
      <input
        placeholder="Search Jobs..."
        className="h-8 rounded-l-lg p-5 border-y border-l border-slate-300 outline-none min-[530px]:w-56 w-40 grow ml-10 min-[530px]:ml-0"
      />
      <button className="h-8 rounded-r-lg bg-[#fff] p-5 border-y border-r border-slate-300 align-middle flex items-center text-xl text-slate-600 mr-2">
        <i>
          <CiSearch />
        </i>
      </button>
    </div>
  );
}
export default Search;
