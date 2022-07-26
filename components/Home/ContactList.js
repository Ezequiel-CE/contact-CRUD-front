import Link from "next/link";
import ContactImg from "../shared/ContactImg";

const ContactList = ({ contacts }) => {
  if (contacts.length < 1) return <></>;

  return (
    <ul className="  mt-8 rounded-lg flex flex-col gap-3  w-11/12 md:max-w-lg mx-auto ">
      {contacts.map((contact) => {
        const { firstName, lastName, imageUrl, id } = contact;
        return (
          <Link href={`${id}`} key={id}>
            <li className="bg-slate-50 p-5 w-full  rounded-lg flex justify-start  items-center shadow-lg hover:scale-105 transition-all cursor-pointer">
              <ContactImg src={imageUrl} size="sm" />
              <div className="w-full text-center">
                <p className="text-black text-lg font-bold">{`${firstName} ${lastName}`}</p>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default ContactList;
