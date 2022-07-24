import { ImCross } from "react-icons/im";
import { useContext, useState, useEffect } from "react";
import AppContex from "../../store/app-context";
import axios from "axios";

const OverlayUpdate = ({ close, id }) => {
  const { currectContact, setCurrentContact } = useContext(AppContex);

  const [contactState, setInputs] = useState({});

  useEffect(() => {
    setInputs(currectContact);
  }, [currectContact]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const updateContactHandler = async (id) => {
    try {
      await axios.put(`http://localhost:4000/api/contacts/${id}`, contactState);
      setCurrentContact(contactState);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    firstName,
    lastName,
    phoneNumber,
    mail,
    description,
    adress,
    imageUrl,
  } = contactState;

  return (
    <div className="relative bg-white rounded-lg shadow ">
      <button
        onClick={close}
        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  "
      >
        <ImCross />
        <span className="sr-only">Close modal</span>
      </button>
      <div className="py-6 px-6 lg:px-8">
        <h3 className="mb-2 py-3 text-lg font-medium text-gray-500 ">
          Update your contact information
        </h3>
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
              className="text-white bg-blue-600   focus:ring-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={(e) => {
                e.preventDefault();
                updateContactHandler(id);
                close();
              }}
            >
              Yes, Im sure
            </button>
            <button
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
              onClick={(e) => {
                e.preventDefault();
                close();
              }}
            >
              No, cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OverlayUpdate;
