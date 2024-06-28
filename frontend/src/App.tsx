import { QueryClient, QueryClientProvider } from "react-query";
import Publications from "./Publications";


const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Publications />
    </QueryClientProvider>
  );
};
export default App;
