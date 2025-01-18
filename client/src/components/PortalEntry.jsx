import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const PortalEntry = () => {
  return (
    <div style={{ height: "40vh", width: "40vw" }}>
      <Canvas camera={{ position: [0, 50, -200] }}>
        <Scene />
      </Canvas>
    </div>
  );
};
export default PortalEntry;
