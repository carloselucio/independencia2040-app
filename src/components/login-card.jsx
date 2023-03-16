import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import accounts from "../assets/jsons/accounts.json";

const LoginCard = () => {
  const navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);
  const [aprooved, setaprooved] = useState(0);

  const handleSubmit = () => {
    accounts.forEach((obj) => {
      if (
        obj.email == username.current.value &&
        obj.password == password.current.value
      ) {
        navigate("/home");
        setaprooved(1);
        console.log("autenticado");
      } else {
        setaprooved(2);
      }
    });
  };

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
      <h1 className="text-5xl font-semibold"> Bienvenido</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Por favor ingrese sus credenciales.
      </p>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Ingresa tu email"
            ref={username}
          />
        </div>
        <div>
          <label className="text-lg font-medium">Contraseña</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Ingresa tu email"
            type="password"
            ref={password}
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 font-medium text-base" for="remember">
              Recordarme
            </label>
          </div>
          <button className="font-medium text-base text-general">
            Olvidé mi contraseña
          </button>
        </div>

        {aprooved === 2 && (
          <div className="font-medium text-base text-center mt-6 text-red-700">
            Usuario o contraseña no válidos
          </div>
        )}

        <div className="mt-8 flex flex-col gap-y-4">
          <button
            className="active:scale-[.98] active:duration-100 hover:scale-[1.02] ease-in-out transition-all py-3 rounded-xl bg-general text-white text-lg font-bold"
            onClick={handleSubmit}
          >
            Ingresar
          </button>
          <button className=" flex items-center justify-center border-2 border-gray-200 py-3 rounded-xl active:scale-[.98] active:duration-100 hover:scale-[1.02] ease-in-out transition-all">
            Registrarme
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
