import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Scene } from "./Scene";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas flat linear shadows>
        <ambientLight intensity={5} />
        <OrbitControls />
        <Scene />
      </Canvas>
    </>
  );
}

export default App;
