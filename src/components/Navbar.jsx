import { Link } from "react-router-dom";
import { GiPalmTree } from "react-icons/gi";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineContacts,
} from "react-icons/ai";
import { MdOutlinePriceChange } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="p-5 absolute top-0 left-0 w-full">
      <nav className="p-3 border-gray-200 rounded-lg bg-green-50/80">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to={"/"} className="flex items-center">
            <GiPalmTree
              size={25}
              style={{ color: "green", marginRight: ".5rem" }}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-green-500 dark:text-white">
              Wonderlust
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-green-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col mt-4 rounded-lg bg-green-200/80 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
              <Link
                to={"/"}
                className="flex gap-1 items-center py-2 pl-3 pr-4 text-green-800 md:text-green-500 font-bold rounded hover:bg-green-300 md:p-2 duration-500"
              >
                <AiOutlineHome />
                <span aria-current="page">Home</span>
              </Link>
              <Link
                to={"services"}
                className="flex gap-1 items-center py-2 pl-3 pr-4 text-green-800 md:text-green-500 font-bold rounded hover:bg-green-300 md:border-0 md:p-2 duration-500"
              >
                <AiOutlineInfoCircle />
                <span>Services</span>
              </Link>
              <Link
                to={"pricing"}
                className="flex gap-1 items-center py-2 pl-3 pr-4 text-green-800 md:text-green-500 font-bold rounded hover:bg-green-300 md:border-0 md:p-2 duration-500"
              >
                <MdOutlinePriceChange />
                <span>Pricing</span>
              </Link>
              <Link
                to={"contact"}
                className="flex gap-1 items-center py-2 pl-3 pr-4 text-green-800 md:text-green-500 font-bold rounded hover:bg-green-300 md:border-0 md:p-2 duration-500 "
              >
                <AiOutlineContacts />
                <span>Contact</span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
