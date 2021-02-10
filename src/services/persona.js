import { getAxio } from "./api";

const path = "persona/";

export function postPersona(values) {
  return getAxio()
    .post(`${path}`, values)
    .then((res) => res.data);
}

export function postSearchPersona(values) {
  return getAxio(false)
    .post(`persona-like`, values)
    .then((res) => res.data);
}

export function getPersonaLimit(offset) {
  return getAxio()
    .get(`${path}all/${offset}`)
    .then((res) => res.data);
}

export function getPersonaById(id) {
  return getAxio()
    .get(`${path}${id}`)
    .then((res) => res.data);
}

export function putPersona(values) {
  return getAxio()
    .put(`${path}`, values)
    .then((res) => res.data);
}

export function deletePersona(idPersona) {
  return getAxio()
    .delete(`${path}${idPersona}`)
    .then((res) => res.data);
}
