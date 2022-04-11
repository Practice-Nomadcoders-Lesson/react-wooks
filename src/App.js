import { useNotification } from "./useNotification/useNotification";

function App() {
  const triggerNotif = useNotification("Can I steal your kimchi ?", {
    body: "I love kimchi don't you?",
  });
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
}

export default App;
