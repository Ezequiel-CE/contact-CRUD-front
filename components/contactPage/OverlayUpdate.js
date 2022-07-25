import { ImCross } from "react-icons/im";
import { useContext, useState, useEffect } from "react";
import AppContex from "../../store/app-context";
import axios from "axios";
import { useRouter } from "next/router";
import UpdateForm from "./UpdateForm";

const OverlayUpdate = ({ close, id }) => {
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
        <UpdateForm id={id} />
      </div>
    </div>
  );
};

export default OverlayUpdate;
