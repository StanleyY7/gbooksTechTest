import { BrowserRouter, Routes, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import "./App.scss";
import MainPage from "./containers/MainPage";
import TablePage from "./containers/TablePage";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/displayAll" element={<TablePage />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
