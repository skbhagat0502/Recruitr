import ReactDOM from "react-dom";
import { RxCross1 } from "react-icons/rx";
import "../css/modal.css";
import { NavLink } from "react-router-dom";
const portalElement = document.getElementById("overlay");
function BackDrop(props) {
  return (
    <div className="h-[100vh] w-full fixed left-0 top-0 z-12 bg-[#000] bg-opacity-75">
      {props.children}
    </div>
  );
}
function ModalOverLay(props) {
  return (
    <div className="fixed right-0 w-full min-[475px]:w-[425px] h-full top-0 bg-white shadow-md z-20 modal">
      <div>{props.children}</div>
    </div>
  );
}
function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </>
  );
}
export default Modal;
