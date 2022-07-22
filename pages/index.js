import axios from "axios";
import ContactList from "../components/ContactList";

const Home = ({ contacts }) => {
  return (
    <>
      <ContactList contacts={contacts}></ContactList>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:4000/api/contacts");
  const { contacts } = data;

  return {
    props: { contacts },
  };
}

export default Home;
