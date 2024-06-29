import PublicationForm from "./components/PublicationForm";
import Publications from "./components/Publications";
import UserForm from "./components/UserForm";
import Users from "./components/Users";

const App = () => {
  return (
    <main className="bg-slate-800 text-slate-50 min-h-screen pb-16 relative">
      <div className="flex flex-col lg:flex-row items-center lg:justify-center">
        <Publications />
        <Users />
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-center">
        <PublicationForm />
        <UserForm />
      </div>
    </main>
  );
};
export default App;
