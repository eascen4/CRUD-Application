import axios from "axios";

export default async function deletePublication(id: string) {
  return axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/publications/delete`,
    {id}
  );
}
