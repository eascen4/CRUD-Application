import { useMutation, useQueryClient } from "react-query";
import { Button } from "./ui/button";
import deletePublication from "../lib/mutations/deletePublication";

type Publication = {
  _id: string;
  title: string;
  student_id: string;
  year: number;
};

const PublicationCard = ({ publication }: { publication: Publication }) => {
  const { title, student_id, year, _id } = publication;

  const queryClient = useQueryClient();
  const mutation = useMutation(deletePublication, {
    onSuccess: () => {
    queryClient.refetchQueries("publications")
    }})

  const onPress = async () => {
    mutation.mutate(_id)
  };

  return (
    <div className="rounded-lg p-3 bg-slate-700 flex justify-between items-center">
      <div>
        <h2>Title: {title}</h2>
        <p>Year: {year}</p>
        <p>Student ID: {student_id}</p>
        <p>ID: {_id}</p>
      </div>
      <Button onClick={onPress}>Delete</Button>
    </div>
  );
};
export default PublicationCard;
