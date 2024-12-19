import Navigation from "../Navigation";

import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";

export default function Header() {
  return (
    <header className="flex items-center bg-white px-10 py-5">
      <div className="flex-1">
        <Navigation />
      </div>
      <div>
        <div className="flex items-center gap-7">
          <div className="flex items-center gap-5">
            <IoMdHelpCircleOutline className="size-6" />
            <div className="relative">
              <FaRegBell className="size-6" />
              <div className="absolute -top-2 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#c1c7ab] p-2 rounded-xl">
              <AiOutlineUser className="size-6 text-white" />
            </div>
            <div className="flex items-center flex-col text-xs">
              <span className="font-semibold">Hardeep</span>
              <span className="font-medium text-gray-400">STAFF</span>
            </div>
          </div>
          <div>
            <IoIosLogOut className="size-6" />
          </div>
        </div>
      </div>
    </header>
  );
}
