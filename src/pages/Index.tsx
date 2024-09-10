import "./styles/Index.css";
import { Carouselbrands } from '../components/Carouselbrands';

export const Index = () => {
  return (
    <>
      <div className="container__content bg-stone-900">
        <div className="bannerfoto1 h-screen bg-cover">
          <div className="flex justify-center items-center h-full">
            <div className="w-2/3 lg:w-2/4">
              <p className="text-white text-center text-5xl lg:text-6xl py-5">
                ¡Explora unmundo lleno de modas!
              </p>
              <input
                className="p-3 w-full outline-0 rounded-xl active:"
                placeholder="Buscar producto..."
              />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 gap-3 px-3">
          <div className="py-4">
          <Carouselbrands/>
          </div>
        </div> 
      </div>
    </>
  );
};
