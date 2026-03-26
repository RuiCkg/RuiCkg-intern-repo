import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
        ]),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

test("renders users from API", async () => {
  render(<UserList />);

  expect(await screen.findByText("Alice")).toBeInTheDocument();
  expect(await screen.findByText("Bob")).toBeInTheDocument();
});