import axios from "axios";
import ContactCard from "../components/contactPage/ContactCard";
import Modal from "../components/shared/Modal";
import { useContext, useEffect } from "react";
import AppContex from "../store/app-context";

const ContactPage = ({ contact }) => {
  const { setCurrentContact } = useContext(AppContex);

  useEffect(() => {
    setCurrentContact({
      firstName: contact.firstName,
      lastName: contact.lastName,
      phoneNumber: contact.phoneNumber,
      mail: contact.mail,
      adress: contact.adress,
      description: contact.description,
      imageUrl: contact.imageUrl,
    });
  }, [setCurrentContact, contact]);

  return (
    <>
      <ContactCard contact={contact} />
      <Modal contact={contact} />
    </>
  );
};

export async function getServerSideProps(context) {
  const { contactId } = context.params;
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/${contactId}`
  );
  const { contact } = data;

  return {
    props: { contact },
  };
}

export default ContactPage;
