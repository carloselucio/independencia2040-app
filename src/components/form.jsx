import React from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { Radio, Select, Option } from "@material-tailwind/react";

import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-left max-w-4xl w-full">
        <div className="text-6xl font-bold mt-5"> Registro </div>

        {/* Datos personales */}
        <div className="mt-8 flex flex-col items-left justify-left">
          <div className="w-full rounded-xl p-4 mt-1 bg-general text-3xl text-white">
            Datos Personales
          </div>

          {/* Nombre */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Nombre</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa tu nombre"
            />
          </div>

          {/* Apellido Paterno */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Apellido Paterno</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa tu apellido paterno"
            />
          </div>

          {/* Apellido Materno */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Apellido Materno</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa tu apellido materno"
            />
          </div>

          {/* Foto */}
          <div className="mt-5">
            <label className="text-2xl font-medium"> Foto</label>
            <div className="flex gap-10 items-center justify-center w-full rounded-lg mt-1 bg-generalYellow">
              <Radio id="photo-yes" name="photo" label="SI" color="pink" />
              <Radio id="photo-no" name="photo" label="NO" color="pink" />
            </div>
          </div>

          {/* Sexo */}
          <div className="mt-5">
            <label className="text-2xl font-medium"> Sexo</label>
            <div className="flex gap-10 items-center justify-center w-full rounded-lg mt-1 bg-generalYellow">
              <Radio id="sex-m" name="sex" label="Masculino" color="pink" />
              <Radio id="sex-f" name="sex" label="Femenino" color="pink" />
            </div>
          </div>

          {/* Persona 2040 */}
          <div className="mt-5">
            <label className="text-2xl font-medium"> Persona2040</label>
            <div className="flex flex-col gap-10 items-center justify-center w-full rounded-lg sm:flex-row mt-1 bg-generalYellow">
              <Radio
                id="persona2040-P2040"
                name="persona2040"
                label="P2040"
                color="pink"
              />
              <Radio
                id="persona2040-F2040"
                name="persona2040"
                label="F2040"
                color="pink"
              />
              <Radio
                id="persona2040-R2040"
                name="persona2040"
                label="R2040"
                color="pink"
              />
              <Radio
                id="persona2040-C2040"
                name="persona2040"
                label="C2040"
                color="pink"
              />
            </div>
          </div>

          {/* TEL */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Teléfono</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa tu número telefónico"
            />
          </div>

          {/* Fecha de nacimiento */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Fecha de Nacimiento</label>
            <Datepicker
              asSingle={true}
              value={value}
              onChange={handleValueChange}
              useRange={false}
              primaryColor={"rose"}
            />
          </div>

          {/* Fecha Tentativa de nacimiento */}
          <div className="mt-5">
            <label className="text-2xl font-medium"> ¿Es tentativa?</label>
            <div className="flex flex-col gap-10 items-center justify-center w-full rounded-lg sm:flex-row mt-1 bg-generalYellow">
              <Radio
                id="ft-es-tentativa"
                name="tentativa-nacimiento"
                label="Fecha tentativa de nacimiento"
                color="pink"
              />
              <Radio
                id="ft-es-exacta"
                name="tentativa-nacimiento"
                label="Fecha exacta de nacimiento"
                color="pink"
              />
            </div>
          </div>

          {/* Estado Civil (No aplica P2040) */}
          <div className="mt-5">
            <label className="text-2xl font-medium">
              Estado civil (No aplica 2040)
            </label>
            <div className="w-full mt-3">
              <Select label="Estado civil" color="pink" id="estado-civil">
                <Option>Casados</Option>
                <Option>Divorciados</Option>
                <Option>Madre soltera</Option>
                <Option>Padre</Option>
                <Option>Separados</Option>
                <Option>Soltero(a)</Option>
                <Option>Unión Libre</Option>
                <Option>Viudo(a)</Option>
              </Select>
            </div>
          </div>

          {/* ¿Cómo te enteraste del plan? */}
          <div className="mt-5">
            <label className="text-2xl font-medium">
              {" "}
              ¿Cómo te enteraste del plan?
            </label>
            <div className="flex flex-col gap-10 items-center justify-center w-full rounded-lg sm:flex-row mt-1 bg-generalYellow">
              <Radio
                id="enterado-plan-boca"
                name="enterado-plan"
                label="Boca a boca"
                color="pink"
              />
              <Radio
                id="enterado-plan-busco"
                name="enterado-plan"
                label="El plan me buscó"
                color="pink"
              />
              <Radio
                id="enterado-plan-conocido"
                name="enterado-plan"
                label="Recomendación de un conocido"
                color="pink"
              />
            </div>
          </div>
        </div>

        {/* Acompañamiento */}
        <div className=" mt-14 flex flex-col items-left justify-left">
          <div className="w-full rounded-xl p-4 mt-1 bg-general text-3xl text-white">
            Acompañamiento
          </div>

          {/* Responsable */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Responsable</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa responsable"
              id="responsable"
            />
          </div>

          {/* Foto */}
          <div className="mt-5">
            <label className="text-2xl font-medium"> Estatus </label>
            <div className="flex flex-col sm:flex-row gap-10 items-center justify-center w-full rounded-lg mt-1 bg-generalYellow">
              <Radio
                id="estatus-acompanamiento-activo"
                name="estatus-acompanamiento"
                label="Activo"
                color="pink"
              />
              <Radio
                id="estatus-acompanamiento-inactivo"
                name="estatus-acompanamiento"
                label="Inactivo"
                color="pink"
              />
              <Radio
                id="estatus-acompanamiento-contactar"
                name="estatus-acompanamiento"
                label="Por contactar"
                color="pink"
              />
              <Radio
                id="estatus-acompanamiento-fallecido"
                name="estatus-acompanamiento"
                label="Fallecido"
                color="pink"
              />
            </div>
          </div>
        </div>

        <div className=" mt-14 flex flex-col items-left justify-left">
          <div className="w-full rounded-xl p-4 mt-1 bg-general text-3xl text-white">
            Ubicación
          </div>

          {/* Estado */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Estado</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa tu estado"
              id="estado"
            />
          </div>

          {/* Municipio */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Municipio</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa tu municipio"
              id="municipio"
            />
          </div>

          {/* Localidad */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Localidad</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa tu localidad"
              id="localidad"
            />
          </div>

          {/* Colonia */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Colonia</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa tu colonia"
              id="colonia"
            />
          </div>

          {/* Calle */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Calle</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa tu calle"
              id="calle"
            />
          </div>

          {/* Número exterior */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Número interior</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa tu número interior"
              id="numeroInterior"
            />
          </div>

          {/* Número exterior */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Número exterior</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa tu número exterior"
              id="numeroExterior"
            />
          </div>

          {/* CP */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Código Postal</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa tu código postal"
              id="cp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
