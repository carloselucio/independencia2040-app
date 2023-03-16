import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { Radio, Select, Option } from "@material-tailwind/react";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import DatosFamiliar from "./datosFamiliar";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-left max-w-4xl w-4/5 lg:w-full mb-12">
        <div className="flex flex-row items-center mt-10">
          <BookOpenIcon className="w-16 mr-5" />
          <div className="text-6xl font-bold">Registro </div>
        </div>

        {/* Datos personales */}
        <div className="mt-8 flex flex-col items-left justify-left">
          <div className="w-full rounded-xl p-4 mt-1 bg-general text-3xl text-white">
            Datos Personales
          </div>

          {/* Nombre */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Nombre</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa tu nombre"
            />
          </div>

          {/* Apellido Paterno */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Apellido Paterno</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa tu apellido paterno"
            />
          </div>

          {/* Apellido Materno */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Apellido Materno</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa tu apellido materno"
            />
          </div>

          {/* Foto */}
          <div className="mt-5">
            <label className="text-2xl font-medium"> Foto</label>
            <div className="flex gap-10 items-center justify-center w-full rounded-lg mt-1 bg-generalYellow">
              <Radio id="foto-si" name="foto" label="SI" color="pink" />
              <Radio id="foto-no" name="foto" label="NO" color="pink" />
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
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
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
              primaryColor={"pink"}
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
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa responsable"
              id="responsable"
            />
          </div>

          {/* Estatus */}
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
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa tu estado"
              id="estado"
            />
          </div>

          {/* Municipio */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Municipio</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa tu municipio"
              id="municipio"
            />
          </div>

          {/* Localidad */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Localidad</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa tu localidad"
              id="localidad"
            />
          </div>

          {/* Colonia */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Colonia</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa tu colonia"
              id="colonia"
            />
          </div>

          {/* Calle */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Calle</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa tu calle"
              id="calle"
            />
          </div>

          {/* Número exterior */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Número interior</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa tu número interior"
              id="numeroInterior"
            />
          </div>

          {/* Número exterior */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Número exterior</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa tu número exterior"
              id="numeroExterior"
            />
          </div>

          {/* CP */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Código Postal</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa tu código postal"
              id="cp"
            />
          </div>
        </div>

        <div className=" mt-14 flex flex-col items-left justify-left">
          <div className="w-full rounded-xl p-4 mt-1 bg-general text-3xl text-white">
            Familia
          </div>

          {/* Estado Civil padres */}
          <div className="mt-5">
            <label className="text-2xl font-medium">
              Estado civil de los padres
            </label>
            <div className="w-full mt-3">
              <Select
                label="Estado civil"
                color="pink"
                id="estado-civil-padres"
              >
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

          {/* Casa */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Casa</label>
            <div className="w-full mt-3">
              <Select label="Casa" color="pink" id="status-casa">
                <Option>Propia</Option>
                <Option>Renta</Option>
                <Option>Prestada</Option>
                <Option>Cohabitada Fam. del padre</Option>
                <Option>Cohabitada Fam. de la madre</Option>
              </Select>
            </div>
          </div>

          {/* No. de hermanos */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Número de hermanos</label>
            <div className="w-full mt-3">
              <Select label="No. Hermanos" color="pink" id="numero-hermanos">
                <Option>1</Option>
                <Option>2</Option>
                <Option>3</Option>
                <Option>4</Option>
                <Option>5+</Option>
              </Select>
            </div>
          </div>

          {/* Registro civil */}
          <div className="mt-5">
            <label className="text-2xl font-medium"> Registro Civil</label>
            <div className="flex gap-10 items-center justify-center w-full rounded-lg  mt-1 bg-generalYellow">
              <Radio
                id="registro-civil-si"
                name="registro-civil"
                label="SI"
                color="pink"
              />
              <Radio
                id="registro-civil-no"
                name="registro-civil"
                label="NO"
                color="pink"
              />
            </div>
          </div>

          {/* Foto acta de nacimiento */}
          <div className="mt-5">
            <label className="text-2xl font-medium">
              Foto acta de nacimiento
            </label>
            <div className="flex gap-10 items-center justify-center w-full rounded-lg  mt-1 bg-generalYellow">
              <Radio
                id="foto-acta-si"
                name="foto-acta"
                label="SI"
                color="pink"
              />
              <Radio
                id="foto-acta-no"
                name="foto-acta"
                label="NO"
                color="pink"
              />
            </div>
          </div>

          {/* Familia de confianza */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Familia de confianza</label>
            <div className="flex gap-10 items-center justify-center w-full rounded-lg  mt-1 bg-generalYellow">
              <Radio
                id="familia-confianza-si"
                name="familia-confianza"
                label="SI"
                color="pink"
              />
              <Radio
                id="familia-confianza-no"
                name="familia-confianza"
                label="NO"
                color="pink"
              />
            </div>
          </div>
        </div>

        <div className=" mt-14 flex flex-col items-left justify-left">
          <div className="w-full rounded-xl p-4 mt-1 bg-general text-3xl text-white">
            Salud
          </div>

          {/* Hospital nacimiento */}
          <div className="mt-5">
            <label className="text-2xl font-medium">
              Hospital de nacimiento
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa hospital de nacimiento"
              id="hospital-nacimiento"
            />
          </div>

          {/* Peso */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Peso</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa el peso"
              id="peso"
            />
          </div>

          {/* Estatura */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Estatura</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa la estatura"
              id="estatura"
            />
          </div>

          {/* Seguro Médico */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Seguro Médico</label>
            <div className="w-full mt-3">
              <Select label="Seguro Médico" color="pink" id="seguro-medico">
                <Option>IMMS</Option>
                <Option>ISSSTE</Option>
                <Option>Magisterio</Option>
                <Option>Seguro Insabi</Option>
                <Option>Seguro Privado</Option>
                <Option>No tiene</Option>
              </Select>
            </div>
          </div>

          {/* Foto cartilla vacunación */}
          <div className="mt-5">
            <label className="text-2xl font-medium">
              Foto cartilla vacunación
            </label>
            <div className="flex gap-10 items-center justify-center w-full rounded-lg  mt-1 bg-generalYellow">
              <Radio
                id="foto-cartilla-si"
                name="foto-cartilla"
                label="SI"
                color="pink"
              />
              <Radio
                id="foto-cartilla-no"
                name="foto-cartilla"
                label="NO"
                color="pink"
              />
            </div>
          </div>

          {/* Vacunas */}
          <div className="mt-5">
            <div className="w-full rounded-xl p-2 mt-1 bg-general text-2xl text-white">
              Vacunas
            </div>

            {/* BGC */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Fecha vacuna BGC</label>
              <Datepicker
                asSingle={true}
                value={value}
                onChange={handleValueChange}
                useRange={false}
                primaryColor={"pink"}
              />
            </div>

            {/* Hepatitis b al nacer */}
            <div className="mt-5">
              <label className="text-2xl font-medium">
                Fecha vacuna Hepatitis B (al nacer)
              </label>
              <Datepicker
                asSingle={true}
                value={value}
                onChange={handleValueChange}
                useRange={false}
                primaryColor={"pink"}
              />
            </div>

            {/* Vacuna auditiva */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Auditiva</label>
              <div className="flex gap-10 items-center justify-center w-full rounded-lg  mt-1 bg-generalYellow">
                <Radio
                  id="vacuna-auditiva-si"
                  name="vacuna-auditiva"
                  label="SI"
                  color="pink"
                />
                <Radio
                  id="vacuna-auditiva-no"
                  name="vacuna-auditiva"
                  label="NO"
                  color="pink"
                />
              </div>
            </div>

            {/* Vacuna Tamiz*/}
            <div className="mt-5">
              <label className="text-2xl font-medium">Tamiz</label>
              <div className="flex gap-10 items-center justify-center w-full rounded-lg  mt-1 bg-generalYellow">
                <Radio
                  id="vacuna-tamiz-si"
                  name="vacuna-tamiz"
                  label="SI"
                  color="pink"
                />
                <Radio
                  id="vacuna-tamiz-no"
                  name="vacuna-tamiz"
                  label="NO"
                  color="pink"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-14 flex flex-col items-left justify-left">
          <div className="w-full rounded-xl p-4 mt-1 bg-general text-3xl text-white">
            Espiritualidad
          </div>

          {/* Espiritualidad */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Religión</label>
            <div className="w-full mt-3">
              <Select label="Religión" color="pink" id="religion">
                <Option>Bautista</Option>
                <Option>Católico</Option>
                <Option>Cristiano</Option>
                <Option>Evangélica Pentecostés</Option>
                <Option>Mormón</Option>
                <Option>Ninguna</Option>
              </Select>
            </div>
          </div>

          {/* Bautizo */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Bautizo</label>
            <div className="flex gap-10 items-center justify-center w-full rounded-lg  mt-1 bg-generalYellow">
              <Radio id="bautizo-si" name="bautizo" label="SI" color="pink" />
              <Radio id="bautizo-no" name="bautizo" label="NO" color="pink" />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center mt-10">
          <div className="rounded-2xl text-xl bg-general mr-5 sm:mr-20 py-3 pl-2 pr-2 text-white hover:cursor-pointer shadow-blue-gray-100 shadow-xl">
            Guardar
          </div>
          <div
            className="rounded-2xl text-xl bg-general ml-5 sm:ml-20 py-3 pl-2 pr-2 text-white hover:cursor-pointer shadow-xl shadow-blue-gray-100"
            onClick={() => navigate("/registro/familiar")}
          >
            Agregar familiar
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
