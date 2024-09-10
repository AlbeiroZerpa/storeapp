import { FormEvent, useState } from "react";
import appFirebase from "../../credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(appFirebase);

export const Login = () => {
  const [registrando, setRegistrando] = useState(false);

  const auntetication = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;
    const password = (
      e.currentTarget.elements.namedItem("password") as HTMLInputElement
    ).value;

    try {
      if (registrando) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.error("Error de autenticación:", error.message);
      const errorCode = (error as firebase.auth.AuthError).code;
      if (errorCode === "auth/email-already-in-use") {
        alert(
          "El correo electrónico ya está en uso. Por favor, intenta con otro."
        );
      }
    }
  };

  return (
    <div className="flex justify-center container__content">
      <div className="w-full content-center max-w-xs">
        <form
          onSubmit={auntetication}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">Cambiar Contraseña</p>
          </div>
          <div className="flex flex-col items-start justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {registrando ? "Regístrate" : "Iniciar Sesión"}
            </button>

            <a
              className="inline-block align-baseline font-bold text-sm mt-2 text-blue-500 hover:text-blue-800"
              onClick={() => setRegistrando(!registrando)}
              href="#"
            >
              {registrando
                ? "Si ya tienes cuenta, inicia sesión"
                : "No tienes cuenta, regístrate"}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
