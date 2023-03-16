import React from "react";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <Navbar />
        <div className="flex flex-row items-center justify-center align-middle h-full">
          <button
            className="ml-5 mr-5 p-3 pl-5 pr-5 rounded-2xl bg-general text-2xl text-white"
            onClick={() => navigate("/registro")}
          >
            Ingresar nuevo registro
          </button>
          <button
            className="ml-5 mr-5 p-3 pl-5 pr-5 rounded-2xl bg-generalYellow text-2xl text-white"
            onClick={() => navigate("/personas")}
          >
            Modificar registro existente
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
