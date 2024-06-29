import { useMutation, useQueryClient } from "react-query";
import { Button } from "./ui/button";
import deletePublication from "../lib/mutations/deletePublication";
import { useState } from "react";
import updatePublication from "../lib/mutations/updatePublication";

type Publication = {
  _id: string;
  title: string;
  student_id: string;
  year: number;
};

const PublicationCard = ({ publication }: { publication: Publication }) => {
  const [updatedPublication, setUpdatedPublication] =
    useState<Publication>(publication);
  const { title, student_id, year, _id } = updatedPublication;

  const hasBeenUpdated = JSON.stringify(publication) !== JSON.stringify(updatedPublication);
  console.log(hasBeenUpdated);

  const queryClient = useQueryClient();
  const mutation = useMutation(deletePublication, {
    onSuccess: () => {
      queryClient.refetchQueries("publications");
    },
  });

  const mutationUpdate = useMutation(updatePublication, {
    onSuccess: () => {
        queryClient.refetchQueries("publications");
    }
  })

  const onUpdate = async () => {
    mutationUpdate.mutate(updatedPublication)
  };

  const onPress = async () => {
    mutation.mutate(_id);
  };

  return (
    <div className="rounded-lg p-6 bg-slate-700 flex justify-between items-center shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex-1">
        <h2 className="flex">
          Title:
          <input 
            className="bg-transparent rounded-md flex-1 px-1"
            value={title}
            onChange={(e) =>
              setUpdatedPublication({
                ...updatedPublication,
                title: e.target.value,
              })
            }
          />
        </h2>
        <p>
          Year:{" "}
          <input
            className="bg-transparent rounded-md"
            value={year}
            type="number"
            onChange={(e) =>
              setUpdatedPublication({
                ...updatedPublication,
                year: e.target.valueAsNumber,
              })
            }
          />
        </p>
        <p>Student ID: {student_id}</p>
        <p>ID: {_id}</p>
      </div>
      <div className="flex flex-col gap-2">
        {hasBeenUpdated && <Button onClick={onUpdate}>Update</Button>}
        <Button onClick={onPress}>Delete</Button>
      </div>
    </div>
  );
};
export default PublicationCard;
