import { useState } from "react";

function App() {
  const [item, setItem] = useState(0);
  const incrementItem = () => {
    setItem((item) => item + 1);
  };
  const decrementItem = () => {
    setItem((item) => item - 1);
  };
  return (
    <div>
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
}

export default App;
