import { useState } from "react";

function ListExample() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (input.trim() === "") return;

    setItems([...items, input]);
    setInput("");
  };

  return (
    <div>
      <h2>List Example</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
      />

      <button onClick={handleAddItem}>Add</button>

      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default ListExample;