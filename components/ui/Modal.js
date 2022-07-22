import OverlayDelete from "../contactPage/OverlayDelete";

const Modal = ({ show, closeModal, contact }) => {
  const styles = show ? "relative z-10" : "hidden";
  return (
    <div className={styles}>
      <div className=" fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex justify-center items-center">
        <OverlayDelete close={closeModal} id={contact.id} />
      </div>
    </div>
  );
};

export default Modal;
