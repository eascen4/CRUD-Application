import { useQuery } from "react-query";
import queryUsers from "../lib/queries/queryUsers";
import UserCard from "./UserCard";

type User = {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
};

const Users = () => {
  const { data, status } = useQuery("users", queryUsers);
  console.log(data);

  return (
    <section className="flex-1 px-4 max-w-screen-md w-full">
      <h1 className="text-semibold text-3xl text-center pt-10 pb-5">Users</h1>
      <div className="max-w-screen-xl bg-slate-600 mx-auto p-4 flex flex-col gap-2">
        {status === "success" ? (
          data.map((user: User) => <UserCard key={user._id} user={user} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};
export default Users;
