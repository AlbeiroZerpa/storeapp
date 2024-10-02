import { useEffect, useState } from "react";
import "./ShoppingCart.css";
import { MdShoppingCart } from "react-icons/md";

export const ShoppingCart = () => {
  const [buttonCart, setButtonCart] = useState(false);
  const handleCart = () => {
    setButtonCart(!buttonCart);
  };

  useEffect(() => {
    if (buttonCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [buttonCart]);

  return (
    <div>
      <button>
        <MdShoppingCart
          className="size-8 text-white hover:text-gray-300 transition ease-in-out delay-50 active:text-gray-500"
          onClick={handleCart}
        />
      </button>
      <div
        className={`absolute inset-0 w-full z-20 transition linear duration-300 cartbg ${
          buttonCart ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`bg-slate-200 h-full w-full lg:max-w-[400px] absolute right-0 transition-all duration-400 ${
            buttonCart ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <button className="p-3 bg-red-800 text-white" onClick={handleCart}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
