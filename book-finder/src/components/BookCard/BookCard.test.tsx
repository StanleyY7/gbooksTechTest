import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { store } from "../Redux/Store";
import BookCard from "./BookCard";
import { Provider } from "react-redux";
import { bookData } from "../../testData/testData";
import { BrowserRouter } from "react-router-dom";
import { setSelectBook } from "../Redux/GlobalSlice";

const renderBookCard = () => {
  store.dispatch(setSelectBook(bookData.items[0]));
  render(
    <Provider store={store}>
      <BrowserRouter>
        <BookCard />
      </BrowserRouter>
    </Provider>
  );
};

describe("BookList tests", () => {
  test("It should render with relevant data/content", () => {
    renderBookCard();
    const link = screen.getByRole("link");
    const title = screen.getByText(bookData.items[0].volumeInfo.title);
    const description = screen.getByText(
      bookData.items[0].volumeInfo.description
    );

    expect(link).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
