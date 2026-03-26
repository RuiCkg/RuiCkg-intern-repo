import { render, screen, fireEvent } from "@testing-library/react";
import Hello from "./Hello";

test("renders initial message", () => {
  render(<Hello />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});

test("changes message on button click", () => {
  render(<Hello />);

  const button = screen.getByText("Click Me");
  fireEvent.click(button);

  expect(screen.getByText("Clicked!")).toBeInTheDocument();
});