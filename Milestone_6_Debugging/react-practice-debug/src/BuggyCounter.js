import { useEffect, useState } from "react";

function FixedCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Current count:", count);
  }, [count]);

  return (
    <div>
      <h2>Fixed Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default FixedCounter;

