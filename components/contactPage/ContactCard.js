import { useContext } from "react";
import AppContex from "../../store/app-context";

const ContactCard = () => {
  const { openModal, changeModalType, currectContact } = useContext(AppContex);

  const {
    firstName,
    lastName,
    imageUrl,
    mail,
    phoneNumber,
    adress,
    description,
  } = currectContact;

  const openDeleteModal = () => {
    changeModalType("delete");
    openModal();
  };

  const openEditModal = () => {
    changeModalType("edit");
    openModal();
  };

  return (
    <div className=" pt-16 flex flex-row justify-center items-center">
      <div className="card w-96 mx-auto rounded-lg  bg-white  shadow-xl p-6">
        <img
          className="w-32 h-32 mx-auto rounded-full -mt-20 border-8 border-white"
          src={imageUrl}
          alt={lastName}
          onError={(e) => {
            e.target.src = "/defaultAvatar.png";
            e.onerror = null;
          }}
        />
        <h2 className="text-center mt-2 mb-4 text-3xl font-medium">{`${firstName} ${lastName}`}</h2>
        <p className="font-normal text-lg">Phone Number:</p>
        <p className="px-6 text-center my-2  text-base">{phoneNumber}</p>
        <p className="font-normal text-lg">E-mail:</p>
        <p className="px-6 text-center my-2  text-base">{mail}</p>
        {adress?.length > 0 && (
          <>
            <p className="font-normal text-lg">Adress:</p>
            <p className="px-6 text-center my-2  text-base">{adress}</p>
          </>
        )}
        {description?.length > 0 && (
          <>
            <p className="font-normal text-lg">Description:</p>
            <p className="px-6 text-center my-2  text-base">{description}</p>
          </>
        )}

        <hr className="mt-8" />
        <div className="flex p-4">
          <div className="w-1/2 text-center">
            <button
              className=" text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
              onClick={openEditModal}
            >
              Edit
            </button>
          </div>
          <div className="w-0 border border-gray-300"></div>
          <div className="w-1/2 text-center">
            <button
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={openDeleteModal}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
