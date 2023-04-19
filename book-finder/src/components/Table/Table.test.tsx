import { BrowserRouter } from "react-router-dom";
import Table from "./Table";
import { screen, render, fireEvent, act } from "@testing-library/react";
import { store } from "../Redux/Store";
import { Provider } from "react-redux";
import { bookData } from "../../testData/testData";
import "@testing-library/jest-dom/extend-expect";

const renderTable = async () => {
  await act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Table />
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

describe("Table Tests", () => {
  test("It should render with the relevant content", () => {
    renderTable();

    const table = screen.getByRole("table");
    const tableHeading = screen.getAllByRole("columnheader");
    const sortBox = screen.getByRole("combobox");
    expect(table).toBeInTheDocument();
    expect(tableHeading.length).toBe(3);
    expect(sortBox).toBeInTheDocument();
    expect(sortBox).toHaveValue("");
  });

  test("Clicking a different option in the Sort component will alter the value", () => {
    renderTable();

    const sortBox = screen.getByRole("combobox");
    expect(sortBox).toHaveValue("");
    fireEvent.change(sortBox, { target: { value: "authors" } });
    expect(sortBox).toHaveValue("authors");
  });
});
