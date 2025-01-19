import {
  // CameraControls,
  // OrbitControls,
  Environment,
} from "@react-three/drei";
// import * as THREE from "three";
import { Suspense } from "react";
import WholeIsland3 from "./WholeIsland3";
import PortalScene from "./PortalScene";
import { Cloud, Sky } from "@react-three/drei";

const sunPosition = [100, 50, 100];

const Scene = () => {
  return (
    <>
      <Environment
        background
        files="./envMap/3.hdr"
        intensity={0.2}
      />

      <Sky sunPosition={sunPosition} rayleigh={0.05}/>

      {/* <Cloud
        opacity={0.2} // Controls the transparency
        speed={0.8} // Animation speed
        width={400} // Width of the cloud area
        depth={2} // Z-depth of the cloud area
        segments={1200} // Quality of the cloud
      /> */}

      <PortalScene />

      <Suspense
        fallback={
          <mesh position={[0, -50, 0]} scale={[10, 1, 10]}>
            <boxGeometry args={[10, 1, 10]} />
            <meshBasicMaterial color={0x00ff00} />
          </mesh>
        }
      >
        <WholeIsland3 envMapIntensity={0.2} />
      </Suspense>
      {/* <OrbitControls /> */}
    </>
  );
};

export default Scene;
