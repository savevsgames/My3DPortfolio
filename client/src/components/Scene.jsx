import {
  // CameraControls,
  // OrbitControls,
  Environment,
} from "@react-three/drei";
// import * as THREE from "three";
import { Suspense } from "react";
import WholeIsland3 from "./WholeIsland3";
import PortalScene from "./PortalScene";

const Scene = () => {
  return (
    <>
      <Environment background files="./envMap/2.hdr" />

      <PortalScene />

      <Suspense
        fallback={
          <mesh position={[0, -50, 0]} scale={[10, 1, 10]}>
            <boxGeometry args={[10, 1, 10]} />
            <meshBasicMaterial color={0x00ff00} />
          </mesh>
        }
      >
        <WholeIsland3 />
      </Suspense>
      {/* <OrbitControls /> */}
    </>
  );
};

export default Scene;
