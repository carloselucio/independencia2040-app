import Navbar from "../components/navbar";
import React, { useState, useEffect } from "react";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import FilterCard from "../components/filterCard";
import SearchCard from "../components/searchCard";

const Personas = () => {
  const [endpointData, setEndpointData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/get_people/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEndpointData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleChange = (e) => {
    fetch("http://localhost:8000/api/get_people/" + e.target.value, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEndpointData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col bg-blue-gray-50">
        <Navbar />
        <div className="flex items-center justify-center border-4">
          <div className="flex flex-col ml-5 w-4/5 xl:w-full mb-12 border-4 ">
            <div className="flex flex-row items-center mt-10 mb-10">
              <UserGroupIcon className="w-16 mr-5" />
              <div className="text-3xl font-bold">Personas </div>
            </div>
            <div className="flex flex-col xl:flex-row">
              <div className="flex flex-col items-left w-full xl:w-2/6">
                <div className="mt-5 flex flex-col sm:flex-row justify-left">
                  <input
                    className="border-2 rounded-xl p-4 w-full shadow-md"
                    placeholder="Ingresa el nombre a buscar"
                    onChange={handleChange}
                  />
                </div>
                <FilterCard />
              </div>
              <SearchCard filteredPersons={endpointData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personas;
