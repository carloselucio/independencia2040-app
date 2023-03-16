import React from "react";
import { Link } from "react-router-dom";

const IndividualPerson = ({ data }) => {
  return (
    <>
      <div className="flex justify-center items-center w-1/5">{data.id}</div>
      <div className="flex justify-center items-center w-1/5">
        {data.first_name}
      </div>
      <div className="flex justify-center items-center w-1/5">
        {data.paternal_surname}
      </div>
      <div className="flex justify-center items-center w-1/5">
        {data.maternal_surname}
      </div>
      <div className="flex justify-center items-center w-1/5">
        {data.person_2040}
      </div>
    </>
  );
};

export default IndividualPerson;
