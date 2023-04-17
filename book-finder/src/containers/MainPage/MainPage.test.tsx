import { render, screen, fireEvent } from "@testing-library/react";
import MainPage from "./MainPage";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

const renderMainPage = () => {
  render(
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
};

describe("MainPage tests", () => {
  test("MainPage should render with relevant content", () => {
    renderMainPage();

    // Main
    const heading = screen.getByText("Blossom Books");
    expect(heading).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();

    // Display Button
    const link = screen.getByRole("link");
    const button = screen.getByRole("button");
    const buttonName = screen.getByText("Display");
    expect(link).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(buttonName).toBeInTheDocument();
  });
  test("When DisplayButton is pressed, it should take the user to /displayAll", () => {
    renderMainPage();
    const link = screen.getByRole("link");
    fireEvent.click(link);
    expect(window.location.pathname).toEqual("/displayAll");
  });
});
