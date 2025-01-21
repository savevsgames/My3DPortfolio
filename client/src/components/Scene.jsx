import {
  // CameraControls,
  // OrbitControls,
  Environment,
} from "@react-three/drei";
// import * as THREE from "three";
import { Suspense } from "react";
import WholeIsland3 from "./WholeIsland3";
import AboutPortal from "./AboutPortal";
import ProjectsPortal from "./ProjectsPortal";
import HobbyPortal from "./HobbyPortal";
import { Cloud, Sky } from "@react-three/drei";
import useCameraStore from "../Store";
import ControlledCamera from "./ControlledCamera";
import CircularPath from "./CircularPath";

const sunPosition = [100, 50, 100];

const Scene = () => {
  const cameraPosition = useCameraStore((state) => state.cameraPosition);
  const cameraTarget = useCameraStore((state) => state.cameraTarget);

  return (
    <>
      <Environment background files="./envMap/3.hdr" intensity={0.2} />

      <Sky sunPosition={sunPosition} rayleigh={0.05} />

      <ControlledCamera
        cameraPosition={cameraPosition}
        cameraTarget={cameraTarget}
        fov={90}
      />

      <CircularPath radius={50} height={0} speed={0.1} pointerOverSpeed={0.1}/>
      <AboutPortal />
      <ProjectsPortal />
      <HobbyPortal />

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
