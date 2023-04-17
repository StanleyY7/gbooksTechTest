import BackButton from "./BackButton";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const renderBackButton = () => {
  render(<BackButton />);
};

describe("BackButton tests", () => {
  test("BackButton should render with relevant button and button name", () => {
    renderBackButton();
    const button = screen.getByRole("button");
    const buttonName = screen.getByText("Back");
    expect(button).toBeInTheDocument();
    expect(buttonName).toBeInTheDocument();
  });
});
