import Sort from "./Sort";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../Redux/Store";
const renderSort = () => {
  render(
    <Provider store={store}>
      <Sort />
    </Provider>
  );
};

describe("Sort Component Tests", () => {
  test("Sort should render with relevant content", () => {
    renderSort();
    const title = screen.getByText("Sort By:");
    const select = screen.getByRole("combobox");
    expect(title).toBeInTheDocument();
    expect(select).toBeInTheDocument();
  });

  test("should update selected value to title upon selecting the title option from the select/sort dropdown", () => {
    renderSort();
    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("");
    fireEvent.change(select, { target: { value: "title" } });
    expect(select).toHaveValue("title");
  });

  test("should update selected value to authors upon selecting the authors option from the select/sort dropdown", () => {
    renderSort();
    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("");
    fireEvent.change(select, { target: { value: "authors" } });
    expect(select).toHaveValue("authors");
  });

  test("should update selected value to publishedDate upon selecting the publishedDate option from the select/sort dropdown", () => {
    renderSort();
    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("");
    fireEvent.change(select, { target: { value: "publishedDate" } });
    expect(select).toHaveValue("publishedDate");
  });

  test("should update selected value to an empty string upon selecting none option after initially being at title from the select/sort dropdown", () => {
    renderSort();
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "title" } });
    expect(select).toHaveValue("title");
    fireEvent.change(select, { target: { value: "" } });
    expect(select).toHaveValue("");
  });
});
