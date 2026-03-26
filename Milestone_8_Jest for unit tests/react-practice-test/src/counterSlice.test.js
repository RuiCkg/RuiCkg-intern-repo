import counterReducer, { increment, decrement } from "./counterSlice";

describe("counter reducer", () => {
  it("should return the initial state", () => {
    expect(counterReducer(undefined, { type: undefined })).toEqual({
      value: 0,
    });
  });

  it("should handle increment", () => {
    const initialState = { value: 0 };
    const newState = counterReducer(initialState, increment());

    expect(newState.value).toBe(1);
  });

  it("should handle decrement", () => {
    const initialState = { value: 1 };
    const newState = counterReducer(initialState, decrement());

    expect(newState.value).toBe(0);
  });
});