import { useContext } from "react";
import AppContex from "../../store/app-context";
import OverlayDelete from "../contactPage/OverlayDelete";
import OverlayUpdate from "../contactPage/OverlayUpdate";

const Modal = ({ contact }) => {
  const { showModal, closeModal, modalType } = useContext(AppContex);

  return (
    <div className={showModal ? "relative z-10" : "hidden"}>
      <div className=" fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex justify-center items-center">
        {modalType === "delete" && (
          <OverlayDelete close={closeModal} id={contact.id} />
        )}
        {modalType === "edit" && (
          <OverlayUpdate close={closeModal} id={contact.id} />
        )}
      </div>
    </div>
  );
};

export default Modal;
