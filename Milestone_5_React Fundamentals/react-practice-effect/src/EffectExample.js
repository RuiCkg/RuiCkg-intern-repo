import { useEffect, useState } from "react";

function EffectExample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const result = await response.json();
    setData(result.slice(0, 5));
  };

  return (
    <div>
      <h2>useEffect Example</h2>
      <button onClick={fetchData}>Fetch Data</button>

      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default EffectExample;