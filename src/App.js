import { useConfirm } from "./useConfirm/useConfirm";

function App() {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure ?", deleteWorld, abort);
  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={confirmDelete}>Delete the World</button>
    </div>
  );
}

export default App;
