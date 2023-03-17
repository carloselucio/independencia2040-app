import React from "react";
import { Radio, Select, Option } from "@material-tailwind/react";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";

const DatosFamiliar = () => {
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
        <div className="mt-14 flex flex-col items-left justify-left">
          <div className="w-full rounded-xl p-4 mt-1 bg-general text-3xl text-white">
            Datos Familiar
          </div>

          {/* Nombre */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Nombre</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa tu nombre"
              id="nombre-madre"
            />
          </div>

          {/* Apellido Paterno */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Apellido Paterno</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa tu apellido paterno"
              id="apellido-paterno-madre"
            />
          </div>

          {/* Apellido Materno */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Apellido Materno</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa tu apellido materno"
              id="apellido-materno-madre"
            />
          </div>

          {/* Foto */}
          <div className="mt-5">
            <label className="text-2xl font-medium"> Foto</label>
            <div className="flex gap-10 items-center justify-center w-full rounded-lg mt-1 bg-generalYellow">
              <Radio
                id="foto-madre-si"
                name="foto-madre"
                label="SI"
                color="pink"
              />
              <Radio
                id="foto-madre-no"
                name="foto-madre"
                label="NO"
                color="pink"
              />
            </div>
          </div>

          {/* Sexo */}
          <div className="mt-5">
            <label className="text-2xl font-medium"> Sexo</label>
            <div className="flex gap-10 items-center justify-center w-full rounded-lg mt-1 bg-generalYellow">
              <Radio
                id="sex-madre-m"
                name="sex-madre"
                label="Masculino"
                color="pink"
              />
              <Radio
                id="sex-madre-f"
                name="sex-madre"
                label="Femenino"
                color="pink"
              />
            </div>
          </div>

          {/* Persona 2040 */}
          <div className="mt-5">
            <label className="text-2xl font-medium"> Persona2040</label>
            <div className="flex flex-col gap-10 items-center justify-center w-full rounded-lg sm:flex-row mt-1 bg-generalYellow">
              <Radio
                id="persona2040-madre-P2040"
                name="persona2040-madre"
                label="P2040"
                color="pink"
              />
              <Radio
                id="persona2040-madre-F2040"
                name="persona2040-madre"
                label="F2040"
                color="pink"
              />
              <Radio
                id="persona2040-madre-R2040"
                name="persona2040-madre"
                label="R2040"
                color="pink"
              />
              <Radio
                id="persona2040-madre-C2040"
                name="persona2040-madre"
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
              id="tel-madre"
            />
          </div>

          {/* Fecha de nacimiento madre */}
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

          {/* Estado Civil madre */}
          <div className="mt-5">
            <label className="text-2xl font-medium">Estado civil</label>
            <div className="w-full mt-3">
              <Select label="Estado civil" color="pink" id="estado-civil-madre">
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

          {/* Acompañamiento */}
          <div className="mt-5">
            <div className="w-full rounded-xl p-2 mt-1 bg-general text-2xl text-white">
              Acompañamiento
            </div>

            {/* Estatus */}
            <div className="mt-5">
              <label className="text-2xl font-medium"> Estatus </label>
              <div className="flex flex-col sm:flex-row gap-10 items-center justify-center w-full rounded-lg mt-1 bg-generalYellow">
                <Radio
                  id="estatus-acompanamiento-madre-activo"
                  name="estatus-acompanamiento-madre"
                  label="Activo"
                  color="pink"
                />
                <Radio
                  id="estatus-acompanamiento-madre-inactivo"
                  name="estatus-acompanamiento-madre"
                  label="Inactivo"
                  color="pink"
                />
                <Radio
                  id="estatus-acompanamiento-madre-contactar"
                  name="estatus-acompanamiento-madre"
                  label="Por contactar"
                  color="pink"
                />
                <Radio
                  id="estatus-acompanamiento-madre-fallecido"
                  name="estatus-acompanamiento-madre"
                  label="Fallecido"
                  color="pink"
                />
              </div>
            </div>
          </div>

          {/* Salud madre */}
          <div className="mt-5">
            <div className="w-full rounded-xl p-2 mt-1 bg-general text-2xl text-white">
              Salud
            </div>

            {/* Seguro Médico Madre*/}
            <div className="mt-5">
              <label className="text-2xl font-medium">Seguro Médico</label>
              <div className="w-full mt-3">
                <Select
                  label="Seguro Médico"
                  color="pink"
                  id="seguro-medico-madre"
                >
                  <Option>IMMS</Option>
                  <Option>ISSSTE</Option>
                  <Option>Magisterio</Option>
                  <Option>Seguro Insabi</Option>
                  <Option>Seguro Privado</Option>
                  <Option>No tiene</Option>
                </Select>
              </div>
            </div>
          </div>

          {/* Educación madre */}
          <div className="mt-5">
            <div className="w-full rounded-xl p-2 mt-1 bg-general text-2xl text-white">
              Educación
            </div>

            {/* Nivel escolar Madre*/}
            <div className="mt-5">
              <label className="text-2xl font-medium">Nivel escolar</label>
              <div className="w-full mt-3">
                <Select
                  label="Nivel escolar"
                  color="pink"
                  id="nivel-escolar-madre"
                >
                  <Option>Primaria</Option>
                  <Option>Secundaria</Option>
                  <Option>Preparatoria</Option>
                  <Option>Técnica</Option>
                  <Option>Profesional</Option>
                </Select>
              </div>
            </div>

            {/* Estudiando */}
            <div className="mt-5">
              <label className="text-2xl font-medium"> Estudiando</label>
              <div className="flex gap-10 items-center justify-center w-full rounded-lg mt-1 bg-generalYellow">
                <Radio
                  id="estudiando-madre-si"
                  name="estudiando-madre"
                  label="SI"
                  color="pink"
                />
                <Radio
                  id="estudiando-madre-no"
                  name="estudiando-madre"
                  label="NO"
                  color="pink"
                />
              </div>
            </div>

            {/* Ultimo grado cursado */}
            <div className="mt-5">
              <label className="text-2xl font-medium">
                Último grado cursado
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
                placeholder="Ingresa el último grado cursado de la madre"
                id="ultimo-grado-madre"
              />
            </div>

            {/* Carrera profesional madre */}
            <div className="mt-5">
              <label className="text-2xl font-medium">
                Carrera profesional
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
                placeholder="Ingresa la carrera profesional de la madre"
                id="carrera-madre"
              />
            </div>
          </div>

          {/* Empleo madre */}
          <div className="mt-5">
            <div className="w-full rounded-xl p-2 mt-1 bg-general text-2xl text-white">
              Empleo
            </div>

            {/* Empleo madre*/}
            <div className="mt-5">
              <label className="text-2xl font-medium">Empleo</label>
              <div className="w-full mt-3">
                <Select label="Empleo madre" color="pink" id="empleo-madre">
                  <Option>Ventas</Option>
                  <Option>Construcción</Option>
                  <Option>Gobierno</Option>
                  <Option>Ama de casa</Option>
                  <Option>Limpieza</Option>
                  <Option>Estudiante</Option>
                  <Option>Secretaria</Option>
                  <Option>Chofer</Option>
                  <Option>Comercio</Option>
                  <Option>Recepcionista</Option>
                  <Option>Cocinera</Option>
                  <Option>Costurera</Option>
                  <Option>Desempleado</Option>
                  <Option>Industria</Option>
                  <Option>Persona no económicamente activa</Option>
                </Select>
              </div>
            </div>

            {/* Ocupación madre*/}
            <div className="mt-5">
              <label className="text-2xl font-medium">Ocupación</label>
              <div className="w-full mt-3">
                <Select
                  label="Ocupación madre"
                  color="pink"
                  id="ocupacion-madre"
                >
                  <Option>Ama de casa</Option>
                  <Option>Empleado</Option>
                  <Option>Estudiante</Option>
                  <Option>Desempleado</Option>
                </Select>
              </div>
            </div>

            {/* Seguro Médico otorgado por la empresa */}
            <div className="mt-5">
              <label className="text-2xl font-medium">
                Seguro médico otorgado por la empresa
              </label>
              <div className="flex gap-10 items-center justify-center w-full rounded-lg mt-1 bg-generalYellow">
                <Radio
                  id="seguro-medico-empresa-madre-si"
                  name="seguro-medico-empresa-madre"
                  label="SI"
                  color="pink"
                />
                <Radio
                  id="seguro-medico-empresa-madre-no"
                  name="seguro-medico-empresa-madre"
                  label="NO"
                  color="pink"
                />
              </div>
            </div>

            {/* Posición laboral*/}
            <div className="mt-5">
              <label className="text-2xl font-medium">Posición Laboral</label>
              <div className="w-full mt-3">
                <Select
                  label="Posición laboral madre"
                  color="pink"
                  id="posicion-laboral-madre"
                >
                  <Option>Empleado</Option>
                  <Option>Empleador</Option>
                  <Option>Trabajador por cuenta propia</Option>
                  <Option>Trabajador sin salario fijo</Option>
                </Select>
              </div>
            </div>

            {/* Salario fijo mensual madre */}
            <div className="mt-5">
              <label className="text-2xl font-medium">
                Salario fijo mensual
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
                placeholder="Ingresa el salario fijo mensual de la madre"
                id="salario-mensual-madre"
              />
            </div>
          </div>

          {/* Espiritualidad madre */}
          <div className="mt-5">
            <div className="w-full rounded-xl p-2 mt-1 bg-general text-2xl text-white">
              Espiritualidad
            </div>

            <div className="mt-5">
              <label className="text-2xl font-medium">Religión</label>
              <div className="w-full mt-3">
                <Select label="Religión" color="pink" id="religion-madre">
                  <Option>Bautista</Option>
                  <Option>Católico</Option>
                  <Option>Cristiano</Option>
                  <Option>Evangélica Pentecostés</Option>
                  <Option>Mormón</Option>
                  <Option>Ninguna</Option>
                </Select>
              </div>
            </div>

            <div className="mt-5">
              <label className="text-2xl font-medium">Catolicidad</label>
              <div className="w-full mt-3">
                <Select label="Catolicidad" color="pink" id="catolicidad-madre">
                  <Option>Bautizo</Option>
                  <Option>Confirmación</Option>
                  <Option>Comunión</Option>
                  <Option>Matrimonio</Option>
                  <Option>Entronización</Option>
                </Select>
              </div>
            </div>

            {/* Catolicidad 2040 */}
            <div className="mt-5">
              <label className="text-2xl font-medium"> Persona2040</label>
              <div className="flex flex-col gap-10 items-center justify-center w-full rounded-lg sm:flex-row mt-1 bg-generalYellow">
                <Radio id="catolicidad-familiar" label="Bautizo" color="pink" />
                <Radio
                  id="catolicidad-familiar"
                  label="Confirmación"
                  color="pink"
                />
                <Radio
                  id="catolicidad-familiar"
                  label="Comunión"
                  color="pink"
                />
                <Radio
                  id="catolicidad-familiar"
                  label="Matrimonio"
                  color="pink"
                />
                <Radio
                  id="catolicidad-familiar"
                  label="Entronización"
                  color="pink"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatosFamiliar;
