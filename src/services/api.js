import axios from "axios";

//creacion del axios y valores de configuracion

const dev = false;
const url = dev
  ? "http://localhost:4000/"
  : "https://api-test-personas.vercel.app/";

export function getAxio(isPublic = true) {
  return axios.create({
    baseURL: `${url}${isPublic ? "public" : "api/v1/"}/`,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
