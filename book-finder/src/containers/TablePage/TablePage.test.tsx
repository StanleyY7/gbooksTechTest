import TablePage from "./TablePage";
import { screen, render, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../components/Redux/Store";
import { bookData } from "../../testData/testData";

const renderTablePage = async () => {
  await act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TablePage />
        </BrowserRouter>
      </Provider>
    );
  });
};

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(bookData),
  });
});

describe("TablePage Tests", () => {
  test("It should render the relevant content", () => {
    renderTablePage();
    const table = screen.getByRole("table");
    const link = screen.getByRole("link");
    const tableHeading = screen.getAllByRole("columnheader");
    const sortBox = screen.getByRole("combobox");
    const button = screen.getByRole("button");
    expect(table).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(tableHeading.length).toBe(3);
    expect(sortBox).toBeInTheDocument();
    expect(sortBox).toHaveValue("");
    expect(button).toBeInTheDocument();
  });

  test("When link is pressed it will take the user back to /", () => {
    renderTablePage();
    const link = screen.getByRole("link");

    fireEvent.click(link);
    expect(window.location.pathname).toBe("/");
  });
});
