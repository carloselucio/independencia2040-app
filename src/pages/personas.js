import Navbar from "../components/navbar";
import React, { useState } from "react";
import people from "../assets/jsons/people.json";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import FilterCard from "../components/filterCard";
import SearchCard from "../components/searchCard";

const Personas = () => {
  const [searchField, setSearchField] = useState("");

  const filteredPersons = people.filter((person) => {
    return (
      person.first_name.toLowerCase().includes(searchField.toLowerCase()) ||
      person.paternal_surname.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    console.log(e.target.value);
  };

  function searchPeople() {
    return <SearchCard filteredPersons={filteredPersons} />;
  }

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
              {searchPeople()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personas;
