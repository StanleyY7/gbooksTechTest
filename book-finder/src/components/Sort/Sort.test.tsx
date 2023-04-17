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

  test("should update selected value upon selecting an option from the select/sort dropdown", () => {
    renderSort();
    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("");
    fireEvent.change(select, { target: { value: "title" } });
    expect(select).toHaveValue("title"); //
  });
});
