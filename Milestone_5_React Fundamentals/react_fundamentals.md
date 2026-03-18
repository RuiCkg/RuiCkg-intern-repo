## Handling State & User Input Reflection

In this task, I created a simple counter component using React's `useState` hook. The counter increased by 1 each time the button was clicked, and the updated value was displayed immediately on the page.

Counter.js:

``` 
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Current count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;

```

App.js:
```
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>React State Practice</h1>
      <Counter />
    </div>
  );
}

export default App;

```

![alt text](images/Counter.png)

If we modify state directly instead of using `setState` or the setter function from `useState`, React may not detect the change properly. As a result, the component might not re-render, and the UI may not update as expected.

This task helped me understand that state in React should always be updated using the provided setter function so that React can manage re-rendering correctly.