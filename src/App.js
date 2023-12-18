import Canvas from "./components/Canvas";

function App() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Canvas
        width={700}
        height={500}
      />
    </div>
  );
}

export default App;
