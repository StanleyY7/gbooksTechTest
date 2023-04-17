import { BrowserRouter, Routes, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useSelector } from "react-redux";

import "./App.scss";
import MainPage from "./containers/MainPage/MainPage";
import TablePage from "./containers/TablePage/TablePage";
import BookPage from "./containers/BookPage/BookPage";

const App = () => {
  const book = useSelector((state: any) => state.global.selectBook);
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/displayAll" element={<TablePage />}></Route>
            <Route path={`/book`} element={<BookPage />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
