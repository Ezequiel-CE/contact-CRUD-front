import axios from "axios";
import ContactCard from "../components/contactPage/ContactCard";
import Modal from "../components/shared/Modal";

const ContactPage = ({ contact }) => {
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
    `http://localhost:4000/api/contacts/${contactId}`
  );
  const { contact } = data;

  return {
    props: { contact },
  };
}

export default ContactPage;
