import React from "react";
import Datepicker from "react-tailwindcss-datepicker";
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
          <div className="w-full rounded-xl p-4 mt-1 bg-generalYellow text-3xl">
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
            <ul className="items-center w-full bg-general rounded-lg sm:flex mt-1">
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="photo-yes"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="photo"
                  />
                  <label
                    for="photo-yes"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    Si
                  </label>
                </div>
              </li>
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="photo-no"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="photo"
                  />
                  <label
                    for="photo-no"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    No
                  </label>
                </div>
              </li>
            </ul>
          </div>

          {/* Sexo */}
          <div className="mt-5">
            <label className="text-2xl font-medium"> Sexo</label>
            <ul className="items-center w-full bg-general rounded-lg sm:flex mt-1">
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="sex-m"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="sex"
                  />
                  <label
                    for="sex-m"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    Masculino
                  </label>
                </div>
              </li>
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="sex-f"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="sex"
                  />
                  <label
                    for="sex-f"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    Femenino
                  </label>
                </div>
              </li>
            </ul>
          </div>

          {/* Persona2040 */}
          <div className="mt-5">
            <label className="text-2xl font-medium"> Persona 2040</label>
            <ul className="items-center w-full bg-general rounded-lg sm:flex mt-1">
              {/* P2040 */}
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="persona-2040-P2040"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="person2040"
                  />
                  <label
                    for="persona-2040-P2040"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    P2040
                  </label>
                </div>
                {/* F2040 */}
              </li>
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="persona-2040-F2040"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="person2040"
                  />
                  <label
                    for="persona-2040-F2040"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    F2040
                  </label>
                </div>
              </li>
              {/* R2040 */}
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="persona-2040-R2040"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="person2040"
                  />
                  <label
                    for="persona-2040-R2040"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    R2040
                  </label>
                </div>
              </li>
              {/* C2040 */}
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="persona-2040-C2040"
                    type="radio"
                    value=""
                    name="person2040"
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                  />
                  <label
                    for="persona-2040-C2040"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    C2040
                  </label>
                </div>
              </li>
            </ul>
          </div>

          {/* CURP */}
          <div className="mt-5">
            <label className="text-2xl font-medium">CURP</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa tu CURP"
            />
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

          {/* Fecha tentativa de nacimiento */}
          <div className="mt-5">
            <label className="text-2xl font-medium"> ¿Es tentativa? </label>
            <ul className="items-center w-full bg-general rounded-lg sm:flex mt-1">
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="ft-es-tentativa"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="tentativa-nacimiento"
                  />
                  <label
                    for="ft-es-tentativa"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    Fecha tentativa de nacimiento
                  </label>
                </div>
              </li>
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="ft-es-exacta"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="tentativa-nacimiento"
                  />
                  <label
                    for="ft-es-exacta"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    Fecha exacta de nacimiento
                  </label>
                </div>
              </li>
            </ul>
          </div>

          {/* Estado Civil (No aplica P2040) */}
          <div className="mt-5">
            <label className="text-2xl font-medium">
              Estado civil (No aplica 2040)
            </label>
            <ul className="items-center w-full bg-general rounded-lg sm:flex mt-1">
              {/* Casados */}
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="ec-casados"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="estadocivil"
                  />
                  <label
                    for="ec-casados"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    Casados
                  </label>
                </div>
              </li>

              {/* Divorciados */}
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="ec-divorciados"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="estadocivil"
                  />
                  <label
                    for="ec-divorciados"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    Divorciados
                  </label>
                </div>
              </li>

              {/* Madre Soltera */}
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="ec-madre-soltera"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="estadocivil"
                  />
                  <label
                    for="ec-madre-soltera"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    Madre Soltera
                  </label>
                </div>
              </li>

              {/* Padre */}
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="ec-padre"
                    type="radio"
                    value=""
                    name="estadocivil"
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                  />
                  <label
                    for="ec-padre"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    Padre
                  </label>
                </div>
              </li>

              {/* Separados */}
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="ec-separados"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="estadocivil"
                  />
                  <label
                    for="ec-separados"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    Separados
                  </label>
                </div>

                {/* Soltero(a) */}
              </li>
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="ec-soltero"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="estadocivil"
                  />
                  <label
                    for="ec-soltero"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    Soltero(a)
                  </label>
                </div>
              </li>

              {/* Union Libre */}
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="ec-union-libre"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="estadocivil"
                  />
                  <label
                    for="ec-union-libre"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    Unión Libre
                  </label>
                </div>
              </li>

              {/* Viudo(a) */}
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="ec-viudo"
                    type="radio"
                    value=""
                    name="estadocivil"
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                  />
                  <label
                    for="ec-viudo"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    Viudo(a)
                  </label>
                </div>
              </li>
            </ul>
          </div>

          {/* ¿Cómo te enteraste del plan? */}
          <div className="mt-5">
            <label className="text-2xl font-medium">
              {" "}
              ¿Cómo te enteraste del plan?{" "}
            </label>
            <ul className="items-center w-full bg-general rounded-lg sm:flex mt-1">
              {/* Boca a boca */}
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="enterado-plan-boca"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="enterado-plan"
                  />
                  <label
                    for="enterado-plan-boca"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    Boca a boca
                  </label>
                </div>
              </li>

              {/* El plan me buscó */}
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="enterado-plan-busco"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="enterado-plan"
                  />
                  <label
                    for="enterado-plan-busco"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    El plan me buscó
                  </label>
                </div>
              </li>

              {/* Recomendación de un conocido */}
              <li className="w-full border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="enterado-plan-conocido"
                    type="radio"
                    value=""
                    className="w-4 h-4 border-gray-300 focus:ring-generalYellow"
                    name="enterado-plan"
                  />
                  <label
                    for="enterado-plan-conocido"
                    className="w-full py-3 ml-2 text-sm font-medium text-white"
                  >
                    Recomendación de un conocido
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Datos personales */}
        <div className="mt-10 flex flex-col items-left justify-left">
          <div className="w-full rounded-xl p-4 mt-1 bg-generalYellow text-3xl">
            Acompañamiento
          </div>

          {/* Nombre */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Nombre</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa tu nombre"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
