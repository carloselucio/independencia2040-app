import React from "react";
import IndividualPerson from "./individualPerson";
import { Link } from "react-router-dom";

const SearchCard = ({ filteredPersons }) => {
  return (
    <div className="w-full xl:w-3/4 bg-white rounded-3xl mt-5 xl:mt-0 ml-0 xl:ml-5 pl-5 overflow-x-scroll lg:overflow-hidden">
      <div className="flex flex-col">
        <div className="flex flex-row border-2 mt-3 rounded-xl bg-blue-gray-100 h-14 align-middle mr-3 w-[700px] lg:w-auto ">
          <div className=" flex justify-center items-center w-1/5 "> Id </div>
          <div className="flex justify-center items-center w-1/5"> Nombre </div>
          <div className="flex justify-center items-center w-1/5">
            Apellido paterno
          </div>
          <div className="flex justify-center items-center w-1/5">
            Apellido materno
          </div>
          <div className="flex justify-center  items-center w-1/5">
            Persona2040
          </div>
        </div>
        {filteredPersons.map((data, key) => {
          return (
            <Link
              key={key}
              className="flex flex-row border-2 mt-3 bg-blue-gray-50 h-14 align-middle mr-3 overflow-auto mb-2 w-[700px] lg:w-auto"
            >
              <IndividualPerson data={data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchCard;
