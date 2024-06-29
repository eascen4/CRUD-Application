import axios from "axios";

export default async function deleteUser(id: string) {
  return axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/users/delete`,
    {id}
  );
}
