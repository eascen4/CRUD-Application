import axios from "axios";

type Publication = {
    title: string;
    student_id: string;
    year: number;
  };

export default async function addPublication(publication : Publication) {
  return axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/publications`,
    publication
  );
}
