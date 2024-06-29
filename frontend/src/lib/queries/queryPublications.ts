import axios from "axios";

export default async function queryPublications() {
    return axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/publications`).then(response => response.data)
}