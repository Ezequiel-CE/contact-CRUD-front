import { HiPlus } from "react-icons/hi";
import Link from "next/link";

const BtnSection = () => {
  return (
    <div className="my-8 flex space-x-2 justify-center">
      <div>
        <Link href={"/new"}>
          <button
            type="button"
            className=" px-6 py-3 rounded-md  flex justify-center items-center gap-2  bg-blue-600 text-white font-medium text-xs  uppercase shadow-md hover:bg-blue-700 hover:shadow-lg  "
          >
            Add contact
            <HiPlus />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BtnSection;
