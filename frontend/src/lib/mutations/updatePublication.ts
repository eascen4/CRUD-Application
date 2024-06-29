import axios from "axios";

type Publication = {
  _id: string;
  title: string;
  student_id: string;
  year: number;
};

export default async function updatePublication(
  updatedPublication: Publication
) {
  return axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/publications/update`,
    updatedPublication
  );
}
