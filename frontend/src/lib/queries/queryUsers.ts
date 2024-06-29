import axios from "axios";

export default async function queryUsers() {
    return axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users`).then(response => response.data)
}