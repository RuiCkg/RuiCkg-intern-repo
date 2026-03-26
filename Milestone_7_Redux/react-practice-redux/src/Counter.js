import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "./counterSlice";

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Redux Counter</h2>

      <p>Count: {count}</p>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;