import axios from "axios";
import ContactCard from "../components/contactPage/ContactCard";
import Modal from "../components/ui/Modal";
import { useState } from "react";

const ContactPage = ({ contact }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const setModalDelete = () => {
    setModalType("delete");
  };

  const setModalEdit = () => {
    setModalType("edit");
  };

  return (
    <>
      <ContactCard contact={contact} showModal={openModalHandler} />
      <Modal
        show={showModal}
        contact={contact}
        closeModal={closeModalHandler}
        set
      />
    </>
  );
};

export async function getServerSideProps(context) {
  const { contactId } = context.params;
  const { data } = await axios.get(
    `http://localhost:4000/api/contacts/${contactId}`
  );
  const { contact } = data;

  return {
    props: { contact },
  };
}

export default ContactPage;
