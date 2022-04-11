import { useFadeIn } from "./useFadeIn/useFadeIn";

function App() {
  const fadeInH1 = useFadeIn(2, 1);
  const fadeInP = useFadeIn(4, 5);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum alalalalal</p>
    </div>
  );
}

export default App;
