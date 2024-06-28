import axios from "axios";

export async function usePublications() {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/publications`);
    return response.data;
}