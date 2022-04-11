import { useBeforeLeave } from "./useBeforeLeave/useBeforeLeave";

function App() {
  const begForeLife = () => console.log("Plz don't leave");
  useBeforeLeave(begForeLife);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
