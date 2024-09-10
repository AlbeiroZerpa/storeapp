import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [iconProfile, setIconProfile] = useState(false);

  const handleToggle = (): void => {
    setToggle(!toggle);
  };

  const handleProfile = (): void => {
    setIconProfile(!iconProfile);
  };

  return (
    <>
      <nav className="absolute w-full z-20 flex items-center justify-between flex-wrap bg-transparent p-6">
        <div className="flex items-center  text-white lg:mr-6">
          <img
            src="../../public/logo.png"
            className="fill-current h-8 w-20 mr-2"
          />
        </div>
        <div className="block lg:hidden">
          <MdAccountCircle className="size-8 text-white hover:text-gray-300 transition ease-in-out delay-50 active:text-gray-500" />
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-400 hover:text-white hover:border-white"
            onClick={handleToggle}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full overflow-hidden transition-all ease-in-out delay-50 ${
            toggle == false
              ? "max-h-0 opacity-0 translate-y-0"
              : "max-h-96 opacity-100 translate-y-2"
          } lg:max-h-96 lg:opacity-100 flex lg:flex-row lg:w-auto`}
        >
          <div>
            <Link
              to="/"
              className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-gray-400 transition ease-in-out delay-50 mr-4"
            >
              Inicio
            </Link>
            <Link
              to="shop"
              className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-gray-400 transition ease-in-out delay-50 mr-4"
            >
              Tienda
            </Link>
            <Link
              to="soporte"
              className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-gray-400 transition ease-in-out delay-50"
            >
              Soporte
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative group">
            <div>
              <MdAccountCircle
                className="size-8 text-white hover:text-gray-300 transition ease-in-out delay-50 active:text-gray-500"
                onClick={handleProfile}
              />
            </div>
            <div
              className={`absolute overflow-hidden rounded-md transition ease-in-out delay-75 ${
                iconProfile == false
                  ? "max-h-0 opacity-0 translate-y-0"
                  : "max-h-96 opacity-100 z-20 translate-y-2"
              } bg-gray-200 right-0 group-hover:block`}
            >
              <div className="dropdown-menu w-40">
                <ul className="list-none text-center py-2 hover:bg-stone-700 hover:rounded-md hover:text-white hover:transition ease-in-out delay-75">
                  <Link to="ProfileConfig">
                    <button onClick={handleProfile}>Iniciar Sesión</button>
                  </Link>
                </ul>
                <ul className="list-none text-center py-2 hover:bg-stone-700 hover:rounded-md hover:text-white hover:transition ease-in-out delay-75">
                  <Link to="/">
                    <button onClick={handleProfile}>Salir</button>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
