import { useState, useCallback } from "react";
import Child from "./Child";

function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useCallback Example</h2>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <input
        type="text"
        placeholder="Type something"
        onChange={(e) => setText(e.target.value)}
      />

      <Child onClick={handleClick} />
    </div>
  );
}

export default UseCallbackExample;