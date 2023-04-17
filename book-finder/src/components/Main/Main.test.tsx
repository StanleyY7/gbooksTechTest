import Main from "./Main";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const renderMain = () => {
  render(<Main />);
};

describe("Main tests", () => {
  test("It should render with relevant content", () => {
    renderMain();
    const heading = screen.getByText("Blossom Books");
    expect(heading).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});
