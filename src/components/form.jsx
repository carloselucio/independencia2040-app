import React, { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { Radio } from "@material-tailwind/react";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Form = ({ id }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch("http://localhost:8000/api/get_person/" + id.toString(), {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setData({
            id: data.id,
            first_name: data.first_name,
            paternal_surname: data.paternal_surname,
            maternal_surname: data.maternal_surname,
            gender: data.gender,
            birth_date: data.birth_date,
            phone_number: data.phone_number,
            person_2040: data.person_2040,
            has_photo: data.has_photo,
            religion: data.religion,
            health_insurance: data.health_insurance,
            civil_status: data.civil_status,
            status: data.status,
            curp: data.beneficiary.curp,
            is_tentative_birth_date: data.beneficiary.is_tentative_birth_date,
            how_found_out: data.beneficiary.how_found_out,
            state: data.beneficiary.location.state,
            municipality: data.beneficiary.location.municipality,
            locality: data.beneficiary.location.locality,
            neighborhood: data.beneficiary.location.neighborhood,
            street: data.beneficiary.location.street,
            outdoor_number: data.beneficiary.location.outdoor_number,
            interior_number: data.beneficiary.location.interior_number,
            zip_code: data.beneficiary.location.zip_code,
            parents_civil_status: data.beneficiary.family.parents_civil_status,
            house_type: data.beneficiary.family.house_type,
            number_of_siblings: data.beneficiary.family.number_of_siblings,
            civil_registration: data.beneficiary.family.civil_registration,
            has_birth_certificate_photo:
              data.beneficiary.family.has_birth_certificate_photo,
            birth_hospital: data.beneficiary.health.birth_hospital,
            birth_weight: data.beneficiary.health.birth_weight,
            birth_height: data.beneficiary.health.birth_height,
            has_vaccination_card_photo:
              data.beneficiary.health.has_vaccination_card_photo,
            vaccines: data.beneficiary.health.vaccines,
            responsible_id: data.beneficiary.responsible.id,
            spiritualities: data.spirituality,
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      setData({
        id: null,
        first_name: "",
        paternal_surname: "",
        maternal_surname: "",
        gender: "",
        birth_date: "",
        phone_number: "",
        person_2040: "",
        has_photo: false,
        religion: "",
        health_insurance: "",
        civil_status: "",
        status: "",
        curp: "",
        is_tentative_birth_date: false,
        how_found_out: "",
        state: "",
        municipality: "",
        locality: "",
        neighborhood: "",
        street: "",
        outdoor_number: "",
        interior_number: "",
        zip_code: "",
        parents_civil_status: "",
        house_type: "",
        number_of_siblings: null,
        civil_registration: false,
        has_birth_certificate_photo: false,
        birth_hospital: "",
        birth_weight: null,
        birth_height: null,
        has_vaccination_card_photo: null,
        vaccines: [],
        responsible_id: null,
        spiritualities: [],
      });
    }
  }, []);

  const [data, setData] = useState();

  const [edit, setEdit] = useState(id == undefined);

  function save() {}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleRadioBool = (e) => {
    const { name, checked, id } = e.target;

    if (checked && id == "si") {
      setData({ ...data, [name]: true });
    } else {
      setData({ ...data, [name]: false });
    }
  };

  const handleRadio = (e) => {
    const { name, checked, id } = e.target;
    if (checked) {
      setData({ ...data, [name]: id });
    }
  };

  const handleRadioBautizo = (e) => {
    const { name, checked, id } = e.target;

    if (checked && id == "si") {
      setData({ ...data, [name]: [{ field: "Bautizo" }] });
    } else {
      setData({ ...data, [name]: [] });
    }
  };

  if (data) {
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
                disabled={!edit}
                name="first_name"
                value={data.first_name}
                onChange={handleChange}
              />
            </div>

            {/* Apellido Paterno */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Apellido Paterno</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
                placeholder="Ingresa tu apellido paterno"
                disabled={!edit}
                name="paternal_surname"
                value={data.paternal_surname}
                onChange={handleChange}
              />
            </div>

            {/* Apellido Materno */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Apellido Materno</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
                placeholder="Ingresa tu apellido materno"
                disabled={!edit}
                name="maternal_surname"
                value={data.maternal_surname}
                onChange={handleChange}
              />
            </div>

            {/* Foto */}
            <div className="mt-5">
              <label className="text-2xl font-medium"> Foto</label>
              <div className="flex gap-10 items-center justify-center w-full rounded-lg mt-1 bg-generalYellow">
                <Radio
                  id="si"
                  label="SI"
                  color="pink"
                  disabled={!edit}
                  name="has_photo"
                  checked={data.has_photo}
                  onChange={handleRadioBool}
                />
                <Radio
                  id="no"
                  label="NO"
                  color="pink"
                  disabled={!edit}
                  name="has_photo"
                  checked={!data.has_photo}
                  onChange={handleRadioBool}
                />
              </div>
            </div>

            {/* Sexo */}
            <div className="mt-5">
              <label className="text-2xl font-medium"> Sexo</label>
              <div className="flex gap-10 items-center justify-center w-full rounded-lg mt-1 bg-generalYellow">
                <Radio
                  id="Masculino"
                  name="gender"
                  label="Masculino"
                  color="pink"
                  disabled={!edit}
                  checked={data.gender == "Masculino"}
                  onChange={handleRadio}
                />
                <Radio
                  id="Femenino"
                  name="gender"
                  label="Femenino"
                  color="pink"
                  disabled={!edit}
                  checked={data.gender == "Femenino"}
                  onChange={handleRadio}
                />
              </div>
            </div>

            {/* Persona 2040 */}
            <div className="mt-5">
              <label className="text-2xl font-medium"> Persona 2040</label>

              <div className="flex flex-col gap-10 items-center justify-center w-full rounded-lg sm:flex-row mt-1 bg-generalYellow">
                <Radio
                  id="P2040"
                  name="person_2040"
                  label="P2040"
                  color="pink"
                  disabled={!edit}
                  checked={data.person_2040 == "P2040"}
                  onChange={handleRadio}
                />
                <Radio
                  id="F2040"
                  name="person_2040"
                  label="F2040"
                  color="pink"
                  disabled={!edit}
                  checked={data.person_2040 == "F2040"}
                  onChange={handleRadio}
                />
                <Radio
                  id="R2040"
                  name="person_2040"
                  label="R2040"
                  color="pink"
                  disabled={!edit}
                  checked={data.person_2040 == "R2040"}
                  onChange={handleRadio}
                />
                <Radio
                  id="C2040"
                  name="person_2040"
                  label="C2040"
                  color="pink"
                  disabled={!edit}
                  checked={data.person_2040 == "C2040"}
                  onChange={handleRadio}
                />
              </div>
            </div>

            {/* TEL */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Teléfono</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
                placeholder="Ingresa tu número telefónico"
                disabled={!edit}
                name="phone_number"
                value={data.phone_number}
                onChange={handleChange}
              />
            </div>

            {/* Fecha de nacimiento */}
            <div className="mt-5">
              <label className="text-2xl font-medium">
                Fecha de Nacimiento
              </label>
              <Datepicker
                asSingle={true}
                value={{ startDate: data.birth_date, endDate: data.birth_date }}
                onChange={(d) => {
                  setData({ ...data, birth_date: d.startDate });
                }}
                useRange={false}
                primaryColor={"pink"}
                disabled={!edit}
              />
            </div>

            {/* Fecha Tentativa de nacimiento */}
            <div className="mt-5">
              <label className="text-2xl font-medium"> ¿Es tentativa?</label>
              <div className="flex flex-col gap-10 items-center justify-center w-full rounded-lg sm:flex-row mt-1 bg-generalYellow">
                <Radio
                  id="si"
                  name="is_tentative_birth_date"
                  label="Fecha tentativa de nacimiento"
                  color="pink"
                  disabled={!edit}
                  checked={data.is_tentative_birth_date}
                  onChange={handleRadioBool}
                />
                <Radio
                  id="no"
                  name="is_tentative_birth_date"
                  label="Fecha exacta de nacimiento"
                  color="pink"
                  disabled={!edit}
                  checked={!data.is_tentative_birth_date}
                  onChange={handleRadioBool}
                />
              </div>
            </div>

            {/* Estado Civil (No aplica P2040) */}
            <div className="mt-5">
              <label className="text-2xl font-medium">
                Estado civil (No aplica 2040)
              </label>
              <div className="w-full mt-3">
                <select
                  label="Estado civil"
                  color="pink"
                  id="estado-civil"
                  disabled={!edit}
                  name="civil_status"
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border-2 border-generalYellow text-gray-700"
                >
                  <option defaultValue hidden>
                    {data.civil_status}
                  </option>
                  <option>Casados</option>
                  <option>Divorciados</option>
                  <option>Madre soltera</option>
                  <option>Padre</option>
                  <option>Separados</option>
                  <option>Soltero(a)</option>
                  <option>Unión Libre</option>
                  <option>Viudo(a)</option>
                  <option>No Aplica</option>
                </select>
              </div>
            </div>

            {/* ¿Cómo te enteraste del plan? */}
            <div className="mt-5">
              <label className="text-2xl font-medium">
                ¿Cómo te enteraste del plan?
              </label>
              <div className="flex flex-col gap-10 items-center justify-center w-full rounded-lg sm:flex-row mt-1 bg-generalYellow">
                <Radio
                  id="Boca en boca"
                  name="how_found_out"
                  label="Boca a boca"
                  color="pink"
                  disabled={!edit}
                  checked={data.how_found_out == "Boca en boca"}
                  onChange={handleRadio}
                />
                <Radio
                  id="El Plan me buscó"
                  name="how_found_out"
                  label="El plan me busco"
                  color="pink"
                  disabled={!edit}
                  checked={data.how_found_out == "El Plan me buscó"}
                  onChange={handleRadio}
                />
                <Radio
                  id="Recomendación de un conocido"
                  name="how_found_out"
                  label="Recomendacion de un conocido"
                  color="pink"
                  disabled={!edit}
                  checked={data.how_found_out == "Recomendación de un conocido"}
                  onChange={handleRadio}
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
                disabled={!edit}
                name="responsible_id"
                value={data.responsible_id}
                onChange={handleChange}
              />
            </div>

            {/* Estatus */}
            <div className="mt-5">
              <label className="text-2xl font-medium"> Estatus </label>
              <div className="flex flex-col sm:flex-row gap-10 items-center justify-center w-full rounded-lg mt-1 bg-generalYellow">
                <Radio
                  id="Activo"
                  name="status"
                  label="Activo"
                  color="pink"
                  disabled={!edit}
                  checked={data.status == "Activo"}
                  onChange={handleRadio}
                />
                <Radio
                  id="Inactivo"
                  name="status"
                  label="Inactivo"
                  color="pink"
                  disabled={!edit}
                  checked={data.status == "Inactivo"}
                  onChange={handleRadio}
                />
                <Radio
                  id="Por contactar"
                  name="status"
                  label="Por contactar"
                  color="pink"
                  disabled={!edit}
                  checked={data.status == "Por contactar"}
                  onChange={handleRadio}
                />
                <Radio
                  id="Fallecido"
                  name="status"
                  label="Fallecido"
                  color="pink"
                  disabled={!edit}
                  checked={data.status == "Fallecido"}
                  onChange={handleRadio}
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
                disabled={!edit}
                name="state"
                value={data.state}
                onChange={handleChange}
              />
            </div>

            {/* Municipio */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Municipio</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
                placeholder="Ingresa tu municipio"
                id="municipio"
                disabled={!edit}
                name="municipality"
                value={data.municipality}
                onChange={handleChange}
              />
            </div>

            {/* Localidad */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Localidad</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
                placeholder="Ingresa tu localidad"
                id="localidad"
                disabled={!edit}
                name="locality"
                value={data.locality}
                onChange={handleChange}
              />
            </div>

            {/* Colonia */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Colonia</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
                placeholder="Ingresa tu colonia"
                id="colonia"
                disabled={!edit}
                name="neighborhood"
                value={data.neighborhood}
                onChange={handleChange}
              />
            </div>

            {/* Calle */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Calle</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
                placeholder="Ingresa tu calle"
                id="calle"
                disabled={!edit}
                name="street"
                value={data.street}
                onChange={handleChange}
              />
            </div>

            {/* Número exterior */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Número interior</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
                placeholder="Ingresa tu número interior"
                id="numeroInterior"
                disabled={!edit}
                name="interior_number"
                value={data.interior_number}
                onChange={handleChange}
              />
            </div>

            {/* Número exterior */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Número exterior</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
                placeholder="Ingresa tu número exterior"
                id="numeroExterior"
                disabled={!edit}
                name="outdoor_number"
                value={data.outdoor_number}
                onChange={handleChange}
              />
            </div>

            {/* CP */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Código Postal</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
                placeholder="Ingresa tu código postal"
                id="cp"
                disabled={!edit}
                name="zip_code"
                value={data.zip_code}
                onChange={handleChange}
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
                <select
                  label="Estado civil"
                  color="pink"
                  id="estado-civil-padres"
                  disabled={!edit}
                  name="parents_civil_status"
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border-2 border-generalYellow text-gray-700"
                >
                  <option defaultValue hidden>
                    {data.parents_civil_status}
                  </option>
                  <option>Casados</option>
                  <option>Divorciados</option>
                  <option>Madre soltera</option>
                  <option>Padre</option>
                  <option>Separados</option>
                  <option>Soltero(a)</option>
                  <option>Unión Libre</option>
                  <option>Viudo(a)</option>
                </select>
              </div>
            </div>

            {/* Casa */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Casa</label>
              <div className="w-full mt-3">
                <select
                  label="Casa"
                  color="pink"
                  id="status-casa"
                  disabled={!edit}
                  name="house_type"
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border-2 border-generalYellow text-gray-700"
                >
                  <option defaultValue hidden>
                    {data.house_type}
                  </option>
                  <option>Propia</option>
                  <option>Renta</option>
                  <option>Prestada</option>
                  <option>Cohabitada Fam. del padre</option>
                  <option>Cohabitada Fam. de la madre</option>
                </select>
              </div>
            </div>

            {/* No. de hermanos */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Número de hermanos</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
                placeholder="Ingresa el número de hermanos"
                id="number_of_siblings"
                disabled={!edit}
                name="number_of_siblings"
                value={data.number_of_siblings}
                onChange={handleChange}
              />
            </div>

            {/* Registro civil */}
            <div className="mt-5">
              <label className="text-2xl font-medium"> Registro Civil</label>
              <div className="flex gap-10 items-center justify-center w-full rounded-lg  mt-1 bg-generalYellow">
                <Radio
                  id="si"
                  name="civil_registration"
                  label="SI"
                  color="pink"
                  disabled={!edit}
                  checked={data.civil_registration}
                  onChange={handleRadioBool}
                />
                <Radio
                  id="no"
                  name="civil_registration"
                  label="NO"
                  color="pink"
                  disabled={!edit}
                  checked={!data.civil_registration}
                  onChange={handleRadioBool}
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
                  id="si"
                  name="has_birth_certificate_photo"
                  label="SI"
                  color="pink"
                  disabled={!edit}
                  checked={data.has_birth_certificate_photo}
                  onChange={handleRadioBool}
                />
                <Radio
                  id="no"
                  name="has_birth_certificate_photo"
                  label="NO"
                  color="pink"
                  disabled={!edit}
                  checked={!data.has_birth_certificate_photo}
                  onChange={handleRadioBool}
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
                disabled={!edit}
                name="birth_hospital"
                value={data.birth_hospital}
                onChange={handleChange}
              />
            </div>

            {/* Peso */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Peso</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
                placeholder="Ingresa el peso"
                id="peso"
                disabled={!edit}
                name="birth_weight"
                value={data.birth_weight}
                onChange={handleChange}
              />
            </div>

            {/* Estatura */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Estatura</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
                placeholder="Ingresa la estatura"
                id="estatura"
                disabled={!edit}
                name="birth_height"
                value={data.birth_height}
                onChange={handleChange}
              />
            </div>

            {/* Seguro Médico */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Seguro Médico</label>
              <div className="w-full mt-3">
                <select
                  label="Seguro Médico"
                  color="pink"
                  id="seguro-medico"
                  disabled={!edit}
                  name="health_insurance"
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border-2 border-generalYellow text-gray-700"
                >
                  <option defaultValue hidden>
                    {data.health_insurance}
                  </option>
                  <option>IMMS</option>
                  <option>ISSSTE</option>
                  <option>Magisterio</option>
                  <option>Seguro Insabi</option>
                  <option>Seguro Privado</option>
                  <option>No tiene</option>
                </select>
              </div>
            </div>

            {/* Foto cartilla vacunación */}
            <div className="mt-5">
              <label className="text-2xl font-medium">
                Foto cartilla vacunación
              </label>
              <div className="flex gap-10 items-center justify-center w-full rounded-lg  mt-1 bg-generalYellow">
                <Radio
                  id="si"
                  name="has_vaccination_card_photo"
                  label="SI"
                  color="pink"
                  disabled={!edit}
                  checked={data.has_vaccination_card_photo}
                  onChange={handleRadioBool}
                />
                <Radio
                  id="no"
                  name="has_vaccination_card_photo"
                  label="NO"
                  color="pink"
                  disabled={!edit}
                  checked={!data.has_vaccination_card_photo}
                  onChange={handleRadioBool}
                />
              </div>
            </div>

            {/* Vacunas */}
            <div className="mt-5" hidden>
              <div className="w-full rounded-xl p-2 mt-1 bg-general text-2xl text-white">
                Vacunas
              </div>

              {/* BGC */}
              <div className="mt-5">
                <label className="text-2xl font-medium">Fecha vacuna BGC</label>
                <Datepicker
                  asSingle={true}
                  useRange={false}
                  primaryColor={"pink"}
                  disabled={!edit}
                />
              </div>

              {/* Hepatitis b al nacer */}
              <div className="mt-5">
                <label className="text-2xl font-medium">
                  Fecha vacuna Hepatitis B (al nacer)
                </label>
                <Datepicker
                  asSingle={true}
                  useRange={false}
                  primaryColor={"pink"}
                  disabled={!edit}
                />
              </div>

              {/* Vacuna auditiva */}
              <div className="mt-5">
                <label className="text-2xl font-medium">
                  Fecha vacuna TAuditiva
                </label>
                <Datepicker
                  asSingle={true}
                  useRange={false}
                  primaryColor={"pink"}
                  disabled={!edit}
                />
              </div>

              {/* Vacuna Tamiz*/}
              <div className="mt-5">
                <label className="text-2xl font-medium">
                  Fecha vacuna Tamiz
                </label>
                <Datepicker
                  asSingle={true}
                  useRange={false}
                  primaryColor={"pink"}
                  disabled={!edit}
                />
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
                <select
                  label="Religión"
                  color="pink"
                  id="religion"
                  disabled={!edit}
                  name="religion"
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border-2 border-generalYellow text-gray-700"
                >
                  <option defaultValue hidden>
                    {data.religion}
                  </option>
                  <option>Bautista</option>
                  <option>Católico</option>
                  <option>Cristiano</option>
                  <option>Evangélica Pentecostés</option>
                  <option>Mormón</option>
                  <option>Ninguna</option>
                </select>
              </div>
            </div>

            {/* Bautizo */}
            <div className="mt-5">
              <label className="text-2xl font-medium">Bautizo</label>
              <div className="flex gap-10 items-center justify-center w-full rounded-lg  mt-1 bg-generalYellow">
                <Radio
                  id="si"
                  name="spiritualities"
                  label="SI"
                  color="pink"
                  disabled={!edit}
                  checked={data.spiritualities.length !== 0}
                  onChange={handleRadioBautizo}
                />
                <Radio
                  id="no"
                  name="spiritualities"
                  label="NO"
                  color="pink"
                  disabled={!edit}
                  checked={data.spiritualities.length == 0}
                  onChange={handleRadioBautizo}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center mt-10">
            {!edit && (
              <div
                className="rounded-2xl text-xl bg-general mr-5 sm:mr-20 py-3 pl-2 pr-2 text-white hover:cursor-pointer shadow-blue-gray-100 shadow-xl"
                onClick={() => {
                  setEdit(true);
                }}
              >
                Editar
              </div>
            )}
            {edit && (
              <div
                className="rounded-2xl text-xl bg-general mr-5 sm:mr-20 py-3 pl-2 pr-2 text-white hover:cursor-pointer shadow-blue-gray-100 shadow-xl"
                onClick={save()}
              >
                Guardar
              </div>
            )}
            <div
              disabled={id == undefined}
              className="rounded-2xl text-xl bg-general ml-5 sm:ml-20 py-3 pl-2 pr-2 text-white hover:cursor-pointer shadow-xl shadow-blue-gray-100"
              onClick={() =>
                navigate("/persona/" + id.toString() + "/familiar")
              }
            >
              Agregar familiar
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Form;
