import { useMutation, useQueryClient } from "react-query";
import { Button } from "./ui/button";
import deleteUser from "../lib/mutations/deleteUser";

type User = {
    _id: string;
    email: string;
    first_name: string;
    last_name: string;
}

const UserCard = ({ user }: { user: User }) => {
  const { _id, email, first_name, last_name } = user;

  const queryClient = useQueryClient();
  const mutation = useMutation(deleteUser, {
    onSuccess: () => {
    queryClient.refetchQueries("users")
    }})

  const onPress = async () => {
    mutation.mutate(_id)
  };

  return (
    <div className="rounded-lg p-3 bg-slate-700 flex justify-between items-center">
      <div>
        <h2>Name: {first_name + " " + last_name}</h2>
        <p>Email: {email}</p>
        <p>Student ID: {_id}</p>
      </div>
      <Button onClick={onPress}>Delete</Button>
    </div>
  );
};
export default UserCard;
