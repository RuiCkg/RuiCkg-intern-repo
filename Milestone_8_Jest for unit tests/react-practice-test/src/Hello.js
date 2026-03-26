import { useState } from "react";

function Hello() {
  const [message, setMessage] = useState("Hello");

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Clicked!")}>
        Click Me
      </button>
    </div>
  );
}

export default Hello;