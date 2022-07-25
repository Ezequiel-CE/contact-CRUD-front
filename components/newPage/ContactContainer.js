import ContactForm from "./ContactForm";

const ContactContainer = () => {
  return (
    <div className=" flex flex-row justify-center items-center">
      <div className="relative bg-white rounded-lg shadow ">
        <div className="py-6 px-6 lg:px-8">
          <h3 className="mb-2 py-3 text-2xl font-medium text-gray-500 ">
            Add contact information!
          </h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
