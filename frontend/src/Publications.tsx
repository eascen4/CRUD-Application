import { useQuery } from "react-query";
import PublicationCard from "./components/PublicationCard";
import { usePublications } from "./hooks/usePublications";

const Publications = () => {
    const {data, status} = useQuery("publications", usePublications)
    console.log(data)


  
}
export default Publications