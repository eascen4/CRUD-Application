import PublicationForm from "./components/PublicationForm";
import Publications from "./components/Publications";
import UserForm from "./components/UserForm";
import Users from "./components/Users";

const App = () => {
  return (
    <main className="bg-slate-800 text-slate-50 min-h-screen relative">
      <h1 className="text-semibold text-3xl text-center pt-10 pb-5">
        Publications
      </h1>
      <div className=" flex flex-col xl:flex-row">
        <Publications />
        <Users />
      </div>
      <div className=" flex flex-col xl:flex-row">
        <PublicationForm />
        <UserForm />
      </div>
    </main>
  );
};
export default App;
