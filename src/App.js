import { useEffect, useState } from "react";

function App() {
  const sayHello = () => console.log("Hello");
  const [leftNumber, setLeftNumber] = useState(0);
  const [rightNumber, setRightNumber] = useState(0);
  useEffect(sayHello, [leftNumber]);
  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={() => setLeftNumber(leftNumber + 1)}>
        {leftNumber}
      </button>
      <button onClick={() => setRightNumber(rightNumber + 1)}>
        {rightNumber}
      </button>
    </div>
  );
}

export default App;
