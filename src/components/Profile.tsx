import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

export const Profile = () => {
  const [iconProfile, setIconProfile] = useState(false);
  const [buttondisabled, setButtondisabled] = useState(true);

  const handleProfile = (): void => {
    setIconProfile(!iconProfile);
    setButtondisabled(!buttondisabled);
  };

  const offButtonProfile = (): void => {
    if (buttondisabled == false) {
      setIconProfile(!iconProfile);
      setButtondisabled(!buttondisabled);
    }
  };

  window.addEventListener("scroll", offButtonProfile);

  return (
    <div>
      <MdAccountCircle
        className="size-8 text-white hover:text-gray-300 transition ease-in-out delay-50 active:text-gray-500"
        onClick={handleProfile}
      />
      <div
        className={`absolute overflow-hidden rounded-md transition ease-in-out delay-75 ${
          iconProfile == false
            ? "max-h-0 opacity-0 translate-y-0"
            : "max-h-96 opacity-100 z-10 translate-y-2"
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
  );
};
