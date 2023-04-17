import { render, screen, fireEvent } from "@testing-library/react";
import DisplayButton from "./DisplayButton";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

const renderDisplayButton = () => {
  render(
    <BrowserRouter>
      <DisplayButton />
    </BrowserRouter>
  );
};

describe("DisplayButton Tests", () => {
  test("DisplayButton should render with relevant button and link", () => {
    renderDisplayButton();
    const link = screen.getByRole("link");
    const button = screen.getByRole("button");
    const buttonName = screen.getByText("Display");
    expect(link).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(buttonName).toBeInTheDocument();
  });

  test("When link is pressed it navigates the user to /displayAll", () => {
    renderDisplayButton();
    const navLink = screen.getByRole("link");
    fireEvent.click(navLink);
    expect(window.location.pathname).toEqual("/displayAll");
  });
});
