import axios from "axios";

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
