import { useState } from "react";
import {
  UserGroupIcon,
  BookOpenIcon,
  SparklesIcon,
  HomeIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-gray-300 py-2 bg-general">
      <div className="flex items-center justify-between xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
        <img
          src={require("../assets/images/logo-general.png")}
          alt="Logo"
          className="w-48 lg:"
        />

        <Bars3Icon
          className="lg:hidden block h-6 w-6 cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        />

        <nav
          className={`${
            open ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="text-base text-gray-900 lg:flex lg:justify-between">
            <li className="lg:flex lg:flex-row">
              <a className=" cursor-pointer lg:px-5 py-2 lg:flex lg:flex-col hover:text-yellow-500 font-semibold flex flex-row items-center ">
                <UserGroupIcon className="w-14 sm:mr-2 lg:mr-0" />
                <div className="">Personas</div>
              </a>

              <a className=" cursor-pointer lg:px-5 py-2 lg:flex lg:flex-col hover:text-yellow-500 font-semibold flex flex-row items-center ">
                <BookOpenIcon className="w-14 sm:mr-2 lg:mr-0" />
                <div className="">Registro</div>
              </a>
              <a className=" cursor-pointer lg:px-5 py-2 lg:flex lg:flex-col hover:text-yellow-500 font-semibold flex flex-row items-center">
                <SparklesIcon className="w-14 sm:mr-2 lg:mr-0" />
                <div className="">Acompañamiento</div>
              </a>
              <a className="cursor-pointer lg:px-5 py-2 lg:flex lg:flex-col hover:text-yellow-500 font-semibold flex flex-row items-center">
                <HomeIcon className="w-14 sm:mr-2 lg:mr-0" />
                <div className="">Visitas</div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
