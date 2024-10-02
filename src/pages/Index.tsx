import "./styles/Index.css";
import { CiSearch } from "react-icons/ci";
import { IoStar } from "react-icons/io5";
import { Products } from "../data/data";

export const Index = () => {
  return (
    <>
      <div className="bannerfoto1 h-screen bg-cover">
        <div className="flex justify-center items-center h-full">
          <div className="w-2/3 lg:w-2/4">
            <p className="text-white text-center text-4xl lg:text-6xl py-5">
              Calidad para tu entrenamiento.
            </p>
            <div className="mt-3 input-wrapper relative">
              <input
                className="p-3 w-full outline-0 rounded-xl"
                placeholder="Buscar..."
              />
              <CiSearch
                size={20}
                className="icon-input absolute top-[15px] right-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-12">
        <h1 className="text-center text-3xl my-4">
          Zapatillas mas vendidas de la semana
        </h1>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-4">
          {Products &&
            Products.map((productText, index) => (
              <div key={index} className="rounded-lg shadow-xl p-4 mx-4">
                <img
                  className="rounded-lg"
                  src={`../../public/${productText.image}.jpg`}
                />
                <h1 className="mt-2 text-md font-semibold text-start">
                  {productText.name}
                </h1>
                <div className="mt-1 grid grid-cols-2">
                  <div>
                    <h1 className="flex items-center text-2xl font-semibold">
                      {productText.price}
                    </h1>
                  </div>
                  <div className="flex justify-center items-center">
                    {Array.from({ length: productText.stars }).map((_, i) => (
                      <IoStar key={i} className="text-yellow-300" />
                    ))}
                    <div className="bg-yellow-300 mx-1 px-1">
                      {productText.stars}
                    </div>
                  </div>
                </div>
                <button className="mt-4 text-white p-2 w-full rounded-lg bg-stone-800 hover:bg-stone-700 transition-all">
                  Comprar Ahora
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
