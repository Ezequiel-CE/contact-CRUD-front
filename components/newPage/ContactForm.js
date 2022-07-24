import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const router = useRouter();

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    mail: "",
    adress: "",
    description: "",
    imageUrl: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitContactHandler = async () => {
    try {
      await axios.post(`http://localhost:4000/api/contacts`, formState);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const {
    firstName,
    lastName,
    phoneNumber,
    mail,
    adress,
    description,
    imageUrl,
  } = formState;

  return (
    <div className=" flex flex-row justify-center items-center">
      <div className="relative bg-white rounded-lg shadow ">
        <div className="py-6 px-6 lg:px-8">
          <h3 className="mb-2 py-3 text-2xl font-medium text-gray-500 ">
            Add contact information!
          </h3>
          <div>
            <img
              className="w-32 h-32 mx-auto rounded-full  "
              src={imageUrl}
              alt={"contact pic"}
              onError={(e) => {
                e.target.src = "/defaultAvatar.png";
                e.onerror = null;
              }}
            />
          </div>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Image URL:
              </label>
              <input
                type="text"
                name="imageUrl"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={onChangeHandler}
                value={imageUrl}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                First name:
              </label>
              <input
                type="text"
                name="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
                onChange={onChangeHandler}
                value={firstName}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Last name:
              </label>
              <input
                type="text"
                name="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
                onChange={onChangeHandler}
                value={lastName}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Phone number:
              </label>
              <input
                type="text"
                name="phoneNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
                onChange={onChangeHandler}
                value={phoneNumber}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                E-mail:
              </label>
              <input
                type="email"
                name="mail"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
                onChange={onChangeHandler}
                value={mail}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Adress:
              </label>
              <input
                type="text"
                name="adress"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={onChangeHandler}
                value={adress}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Description:
              </label>
              <input
                type="text"
                name="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={onChangeHandler}
                value={description}
              />
            </div>
            <div className="flex justify-between ">
              <button
                className=" bg-blue-600 text-white  focus:ring-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                onClick={(e) => {
                  e.preventDefault();
                  submitContactHandler();
                }}
              >
                Yes, Im sure
              </button>
              <button
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                }}
              >
                No, cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
