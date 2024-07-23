import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { RiToothLine } from "react-icons/ri";
import "../App.css";
export default function NavbarFinal() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const content = (
    <>
      <div className="sm:hidden block absolute top-20 w-full left-0 right-0 bg-gray-900 transition">
        <ul className="flex flex-col space-y-2 p-14 pt-10 text-center text-xl bg-verdeBase border-t-2 border-gray-200 border-opacity-50">
          <li>
            <NavLink
              spy="true"
              smoth="true"
              to="/acerca-de"
              className={({ isActive }) => {
                let baseStyles =
                  "my-2 py-4 list-item border-b border-verdeBase-600 hover:bg-verdeBase-300 hover:bg-opacity-55 hover:rounded";

                let activeStyles =
                  "bg-verdeBase-300 bg-opacity-55 text-white rounded";

                return isActive ? `${baseStyles} ${activeStyles}` : baseStyles;
              }}
            >
              Acerca de
            </NavLink>
          </li>
          <li>
            <NavLink
              spy="true"
              smoth="true"
              to="/contactos"
              className={({ isActive }) => {
                let baseStyles =
                  "my-2 py-4 list-item border-b border-verdeBase-600 hover:bg-verdeBase-300 hover:bg-opacity-55 hover:rounded";

                let activeStyles =
                  "bg-verdeBase-300 bg-opacity-55 text-white rounded";

                return isActive ? `${baseStyles} ${activeStyles}` : baseStyles;
              }}
            >
              Contactos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className="my-2 py-4 list-item border-b border-verdeBase-600 hover:bg-verdeBase-300 hover:bg-opacity-55 hover:rounded"
            >
              Cita
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <nav className="h-full bg-verdeBase py-2 sm:bg-gray-100 2xl:py-3 max-sm:py-5">
      <div className="h-10vh flex justify-between z-50 text-white px-16 lg:py-2 md:py-1">
        <div className="flex items-end flex-1">
          <Link to="/">
            <RiToothLine className="text-white text-7xl max-sm:text-5xl mr-1 sm:text-white sm:bg-verdeBase sm:rounded-full sm:p-1 2xl:text-[80px]"></RiToothLine>
          </Link>

          <div className="flex flex-col items-center justify-center 2xl:pb-2 lg:pb-1 md:pb-2 sm:pb-2 max-sm:pb-0">
            <span className="logo-text text-3xl font-light text-white sm:text-verdeBase leading-4 border-b border-white sm:border-black lg:text-4xl lg:leading-4 2xl:text-7xl 2xl:leading-10">
              SmilePerfect
            </span>
            <span className=" text-sm font-light text-white sm:text-verdeBase lg:text-base 2xl:text-3xl">
              ODONTOLOGY
            </span>
          </div>
        </div>
        <div className="lg:flex md:flex sm:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-2xl">
              <li>
                <NavLink
                  to="/acerca-de"
                  className={({ isActive }) => {
                    let baseStyles =
                      "text-gray-600 hover:text-verdeBase transition hover:border-b-2 hover:border-verdeBase cursor-pointer 2xl:text-[25px] font-medium text-opacity-60";

                    let activeStyles =
                      "border-b-2 border-verdeBase text-verdeBase lg:text-opacity-100";

                    return isActive
                      ? `${baseStyles} ${activeStyles}`
                      : baseStyles;
                  }}
                >
                  Acerca de
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactos"
                  className={({ isActive }) => {
                    let baseStyles =
                      "text-gray-600 hover:text-verdeBase transition hover:border-b-2 hover:border-verdeBase cursor-pointer 2xl:text-[25px] font-medium text-opacity-60";

                    let activeStyles =
                      "border-b-2 border-verdeBase text-verdeBase lg:text-opacity-100";

                    return isActive
                      ? `${baseStyles} ${activeStyles}`
                      : baseStyles;
                  }}
                >
                  Contactos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cita"
                  className={({ isActive }) => {
                    let baseStyles =
                      "text-gray-600 hover:text-verdeBase transition hover:border-b-2 hover:border-verdeBase cursor-pointer 2xl:text-[25px] font-medium text-opacity-60";

                    let activeStyles =
                      "border-b-2 border-verdeBase text-verdeBase lg:text-opacity-100";

                    return isActive
                      ? `${baseStyles} ${activeStyles}`
                      : baseStyles;
                  }}
                >
                  Cita
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button
          className="block sm:hidden transition"
          onClick={handleClick}
          aria-label={click ? "Close menu" : "Open menu"}
        >
          {click ? (
            <IoCloseOutline className="text-3xl" />
          ) : (
            <LuMenu className="text-3xl" />
          )}
        </button>
      </div>
    </nav>
  );
}
