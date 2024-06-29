import axios from "axios";

type User = {
    email: string;
    first_name: string;
    last_name: string;
}

export default async function addUser(user : User) {
    return axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/users`,
      user
    );
  }