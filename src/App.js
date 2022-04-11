import { useTitle } from "./useTitle";

function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
