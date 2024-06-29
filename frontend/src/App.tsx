import PublicationForm from "./components/PublicationForm";
import Publications from "./components/Publications";

const App = () => {

  return (
    <main className="bg-slate-800 text-slate-50 min-h-screen relative">
      <h1 className="text-semibold text-3xl text-center pt-10 pb-5">Publications</h1>
      <Publications />
      <PublicationForm />
    </main>
  );
};
export default App;
