import { getAxio } from "./api";

const path = "persona/";

export function getPersonaLimit(offset) {
  return getAxio()
    .get(`${path}all/${offset}`)
    .then((res) => res.data);
}

export function getAgendaById(id) {
  return getAxio()
    .get(`${path}${id}`)
    .then((res) => res.data);
}
