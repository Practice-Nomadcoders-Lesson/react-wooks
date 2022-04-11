import { useFullscreen } from "./useFullscreen/useFullscreen";

function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          src="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1"
          alt="grape"
          width="550"
        />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
}

export default App;
