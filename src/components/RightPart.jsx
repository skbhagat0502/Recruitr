function RightPart(props) {
  return (
    <div className="p-4 md:w-[60%] w-full items-start md:overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-track-[#ccc] scrollbar-thumb-blue-500">
      {props.children}
    </div>
  );
}
export default RightPart;
