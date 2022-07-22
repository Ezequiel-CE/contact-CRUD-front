import { ImCross } from "react-icons/im";
import axios from "axios";
import { useRouter } from "next/router";

const OverlayDelete = ({ close, id }) => {
  const router = useRouter();

  const deleteContactHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/contacts/${id}`);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative bg-white rounded-lg shadow ">
        <button
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          onClick={close}
        >
          <ImCross />
          <span className="sr-only">Close modal</span>
        </button>
        <div className="p-6 text-center">
          <h3 className="mb-5 py-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this contact?
          </h3>
          <button
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            onClick={() => {
              deleteContactHandler(id);
            }}
          >
            Yes, Im sure
          </button>
          <button
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
            onClick={close}
          >
            No, cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default OverlayDelete;
