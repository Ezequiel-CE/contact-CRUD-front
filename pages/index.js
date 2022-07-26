import axios from "axios";
import ContactList from "../components/Home/ContactList";
import BtnSection from "../components/Home/BtnSection";

const Home = ({ contacts }) => {
  return (
    <>
      <ContactList contacts={contacts}></ContactList>
      <BtnSection />
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
  const { contacts } = data;

  return {
    props: { contacts },
  };
}

export default Home;
