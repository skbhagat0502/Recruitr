function Input(props) {
  return (
    <span className={`flex gap-2 flex-col ${props.className}`}>
      <label>{props.label}</label>
      <input
        key={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className="outline-none border border-slate-400 rounded-md h-10 px-2 w-full bg-white"
      />
    </span>
  );
}
export default Input;
