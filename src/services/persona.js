import { getAxio } from "./api";

const path = "persona/";

// levantamiento de las funcion para consultar los endpoint de personas

//creacion de persona
export function postPersona(values) {
  return getAxio()
    .post(`${path}`, values)
    .then((res) => res.data);
}

//consulta por el metodo post para buscar personas
export function postSearchPersona(values) {
  return getAxio(false)
    .post(`persona-like`, values)
    .then((res) => res.data);
}

//funcion para consultar personas
export function getPersonaLimit(offset) {
  return getAxio()
    .get(`${path}all/${offset}`)
    .then((res) => res.data);
}
//Consulta de persona segun su ID
export function getPersonaById(id) {
  return getAxio()
    .get(`${path}${id}`)
    .then((res) => res.data);
}

//Actualizacion de personas segun su id
export function putPersona(values) {
  return getAxio()
    .put(`${path}`, values)
    .then((res) => res.data);
}

//eliminacion de personas segun su id
export function deletePersona(idPersona) {
  return getAxio()
    .delete(`${path}${idPersona}`)
    .then((res) => res.data);
}
