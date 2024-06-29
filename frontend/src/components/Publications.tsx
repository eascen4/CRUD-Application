import { useQuery } from "react-query";
import PublicationCard from "./PublicationCard";
import queryPublications from "../lib/queries/queryPublications";

type Publication = {
    _id: string;
    title: string;
    student_id: string;
    year: number;
}

const Publications = () => {
  const {data , status} = useQuery("publications", queryPublications);
  console.log(data);
  
  return (
    <section className="max-w-screen-xl bg-slate-600 mx-auto p-4 flex flex-col gap-2">
      {status === "success" ? data.map((publication : Publication) => (
        <PublicationCard key={publication._id} publication={publication} />
      )) : <p>Loading...</p>}
    </section>
  );
};
export default Publications;