import axios from "axios";

export default async function addPublication(publication) {
  return axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/publications`,
    publication
  );
}
