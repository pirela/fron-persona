import axios from "axios";

const dev = true;
const url = dev
  ? "http://localhost:4000/"
  : "https://test-sequelize-ekfa1vjq3.vercel.app/";

export function getAxio(isPublic = true) {
  return axios.create({
    baseURL: `${url}${isPublic ? "public" : "api/v1/"}/`,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
