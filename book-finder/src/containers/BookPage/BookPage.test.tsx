import { screen, render, fireEvent } from "@testing-library/react";
import BookPage from "./BookPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../components/Redux/Store";
import { setSelectBook } from "../../components/Redux/GlobalSlice";
import { bookData } from "../../testData/testData";
import "@testing-library/jest-dom/extend-expect";

const renderBookPage = (book: any) => {
  store.dispatch(setSelectBook(bookData.items[0]));
  render(
    <Provider store={store}>
      <BrowserRouter>
        <BookPage book={book} />
      </BrowserRouter>
    </Provider>
  );
};

describe("BookPage Tests", () => {
  test("It should render with relevant content", () => {
    renderBookPage(bookData.items);
    const link = screen.getAllByRole("link");
    const title = screen.getByText(bookData.items[0].volumeInfo.title);
    const description = screen.getByText(
      bookData.items[0].volumeInfo.description
    );

    expect(link.length).toBe(2);
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
  test("Clicking the BackButton sends the user back to /displayAll", () => {
    renderBookPage(bookData.items);
    const link = screen.getAllByRole("link");
    fireEvent.click(link[0]);
    expect(window.location.pathname).toBe("/displayAll");
  });
});
