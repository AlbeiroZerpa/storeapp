// importar modulos de firebase
import appFirebase from "../../credenciales";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

import { useState } from "react";
import { Login } from "../Auth/Login";

export const ProfileConfig = () => {
  const [usuario, setUsuario] = useState(null);

  const auth = getAuth(appFirebase);
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUsuario(userFirebase);
    } else {
      setUsuario(null);
    }
  });
  return (
    <div className="container__content">
      {usuario ? (
        <>
          <div className="flex flex-col justify-center items-center container__content">
            <div className="w-80">
              <h1> Bienvenido {usuario.email} </h1>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => signOut(auth)}
                type="button"
              >
                Logout
              </button>
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};
