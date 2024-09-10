import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TransactionChart } from "./components/TransactionChart";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1 className="text-2xl">Hello world</h1>
        <TransactionChart />
      </QueryClientProvider>
    </>
  );
}

export default App;
