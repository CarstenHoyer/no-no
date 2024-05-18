import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Scene } from "./Scene";
import { OrbitControls } from "@react-three/drei";
import { ToneMapping } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { LinearToneMapping } from "three";

function App() {
  return (
    <Canvas
      shadows
      gl={{
        toneMapping: LinearToneMapping,
        toneMappingExposure: Math.pow(2, 0),
      }}
    >
      <ToneMapping
        blendFunction={BlendFunction.NORMAL} // blend mode
        adaptive={true} // toggle adaptive luminance map usage
        resolution={256} // texture resolution of the luminance map
        middleGrey={0.6} // middle grey factor
        maxLuminance={16.0} // maximum luminance
        averageLuminance={1.0} // average luminance
        adaptationRate={1.0} // luminance adaptation rate
      />
      <ambientLight intensity={1} />
      <directionalLight position={[0.5, 0, 0.866]} intensity={4} />
      <OrbitControls />
      <Scene />
    </Canvas>
  );
}

export default App;
