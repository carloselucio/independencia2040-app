import React from "react";
import Navbar from "../components/navbar";
import Form from "../components/form";
import { useParams } from "react-router";

const Registro = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Navbar />
      {id ? <Form id={id} /> : <Form />}
    </>
  );
};

export default Registro;
