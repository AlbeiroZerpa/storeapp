import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "./ShoppingCart";
import { Profile } from "./Profile";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrollValue, setscrollValue] = useState(0);

  const handleToggle = (): void => {
    setToggle(!toggle);
  };

  window.onscroll = function () {
    if (window.scrollY >= 100) {
      setscrollValue(window.scrollY);
    } else {
      setscrollValue(window.scrollY);
    }
  };
  return (
    <>
      <nav
        className={`${
          scrollValue >= 100 ? "fixed bg-stone-900" : "absolute bg-transparent"
        } transition-all ease-in-out	duration-100 w-full z-20 flex items-center justify-between flex-wrap p-6`}
      >
        <div className="flex items-center  text-white lg:mr-6">
          <img
            src="../../public/logo.png"
            className="fill-current h-8 w-28 mr-2"
          />
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
          <div className="flex">
            <ShoppingCart />
            <Profile />
          </div>
        </div>
      </nav>
    </>
  );
};
