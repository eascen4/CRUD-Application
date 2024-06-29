import { useQuery } from "react-query";
import queryUsers from "../lib/queries/queryUsers";
import UserCard from "./UserCard";

type User = {
    _id: string;
    email: string;
    first_name: string;
    last_name: string;
}

const Users = () => {
  const {data , status} = useQuery("users", queryUsers);
  console.log(data);
  
  return (
    <section className="max-w-screen-xl bg-slate-600 mx-auto p-4 flex flex-col gap-2">
      {status === "success" ? data.map((user : User) => (
        <UserCard user={user}/>
      )) : <p>Loading...</p>}
    </section>
  );
};
export default Users;
