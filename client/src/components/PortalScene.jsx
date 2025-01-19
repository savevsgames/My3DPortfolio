import {
  useGLTF,
  useTexture,
  MeshPortalMaterial,
  RoundedBox,
  Text,
  CameraControls,
  // Center,
  // Float,
  Html,
  Text3D,
} from "@react-three/drei";
import * as THREE from "three";
import { useState, useRef, useEffect } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { useAnimations } from "@react-three/drei";
import ControlledCamera from "./ControlledCamera";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";

const PortalScene = ({ scale = 10 }) => {
  const [active, setActive] = useState(false);
  const meshPortalMaterialRef = useRef();
  const cameraControlsRef = useRef();
  const modelMeshRef = useRef();
  const meshInfoBackgroundRef = useRef();

  // MODELS
  const modelGreg = useGLTF(
    "./model/gregOfficeWorkerModel/Animation_Big_Wave_Hello_withSkin.glb"
  );
  const animations = useAnimations(modelGreg.animations, modelGreg.scene);
  console.log(animations.actions);

  const modelGreg2 = useGLTF("./model/Animation_Idle_withSkin.glb");
  const animations2 = useAnimations(modelGreg2.animations, modelGreg2.scene);
  console.log(animations2.actions);

  const modelGreg3 = useGLTF("./model/Animation_Walking_withSkin.glb");
  const animations3 = useAnimations(modelGreg3.animations, modelGreg3.scene);
  console.log(animations3.actions);

  // TEXTURES
  const texture = useTexture("./texture/1.png");
  const hdrTexture = useLoader(RGBELoader, "./envMap/2.hdr");
  hdrTexture.mapping = THREE.EquirectangularReflectionMapping;

  const groundProps = {
    height: 40,
    radius: 22,
    scale: 4,
  };

  useEffect(() => {
    animations2.actions["Armature|Idle|baselayer"].play();
    animations.actions["Armature|Big_Wave_Hello|baselayer"].play();
  }, []);

  useFrame((_, delta) => {
    easing.damp(
      meshPortalMaterialRef.current,
      "blend",
      active ? 1 : 0,
      0.5,
      delta
    );
  });

  // useEffect(() => {
  //   // Set encoding to improve HDR rendering
  //   hdrTexture.encoding = THREE.sRGBEncoding;
  // }, [hdrTexture]);

  const clickHandler = () => {
    setActive(!active);
  };

  const cameraPosition = active
    ? [-10, 100, -160] // Position when portal is active
    : [0, 100, -200]; // Default home position

  const cameraTarget = active
    ? [0, 60, 0] // Target when portal is active
    : [0, -50, 0]; // Default home target

  return (
    <group scale={scale} rotation-y={Math.PI} position={[0, 40, 0]}>
      <ControlledCamera
        cameraPosition={cameraPosition}
        cameraTarget={cameraTarget}
        ref={cameraControlsRef}
        fov={90}
      />

      <Text font="./font/bold.ttf" position={[0, 2.2, 0.1]} fontSize={0.6}>
        ABOUT GREG
        <meshBasicMaterial toneMapped={false} />
      </Text>

      <RoundedBox args={[4, 6, 0.1]} radius={0.1} onClick={clickHandler}>
        <MeshPortalMaterial ref={meshPortalMaterialRef}>
          <group>
            {/* Block behind the HTML content */}
            <mesh
              ref={meshInfoBackgroundRef}
              position={[0, 0, -3.5]}
              visible={active}
              onClick={() => setActive(!active)}
            >
              <boxGeometry args={[16, 4, 2, 8, 8, 8]} />
              <meshMatcapMaterial color="lightgreen" />
            </mesh>
            {/* Text3D behind */}
            <Text3D
              font="./font/Lexend.json"
              position={[-5.5, 0, -2.5]}
              rotation={[0, 0, 0]}
              height={0.2}
              size={0.75}
              bevelEnabled
              bevelSegments={20}
              visible={active}
            >
              <meshMatcapMaterial attach="material" color="black" />I AM A
              PROGRAMMER
            </Text3D>
            <primitive
              object={modelGreg.scene}
              scale={active ? 1.5 : 2}
              position={active ? [-5.5, 2, -3.2] : [-0.5, -2, -1]}
              ref={modelMeshRef}
              rotation={[0, (Math.PI / 2) * 3, 0]}
            />
          </group>
          <group rotation={[0, Math.PI / 3, 0]} position={[8.6, 0, 6.6]}>
            {/* Block right of the HTML content */}
            <mesh
              ref={meshInfoBackgroundRef}
              position={[11, 0, 2.2]}
              rotation={[0, Math.PI / 2, 0]}
              visible={active}
            >
              <boxGeometry args={[11, 6, 2, 8, 8, 8]} />
              <meshMatcapMaterial color="#9999ff" />
            </mesh>
            {/* Text3D to the right */}
            <Text3D
              font="./font/Lexend.json"
              position={[10, 0, -2.2]}
              rotation={[0, -Math.PI / 2, 0]}
              height={0.2}
              size={0.75}
              bevelEnabled
              bevelSegments={20}
              visible={active}
            >
              <meshMatcapMaterial attach="material" color="black" />I AM A
              MUSICIAN
            </Text3D>
            <primitive
              object={modelGreg2.scene}
              scale={active ? 1.5 : 0}
              position={active ? [11.25, 3, -1] : [0, -2, -1]}
              ref={modelMeshRef}
            />
          </group>
          <group rotation={[0, -Math.PI / 3, 0]} position={[-8, 0, 6.3]}>
            {/* Block left of the HTML content */}
            <mesh
              ref={meshInfoBackgroundRef}
              position={[-10, 0, 4]}
              rotation={[0, Math.PI / 2, 0]}
              visible={active}
            >
              <boxGeometry args={[13, 6, 2, 8, 8, 8]} />
              <meshMatcapMaterial color="lightblue" />
            </mesh>
            {/* Text3D to the left */}
            <Text3D
              font="./font/Lexend.json"
              position={[-9, 0, 9.5]}
              rotation={[0, (Math.PI * 2) / 4, 0]}
              height={0.08}
              size={0.7}
              bevelEnabled
              bevelSegments={20}
              visible={active}
            >
              <meshMatcapMaterial attach="material" color="black" />I AM AN
              ELECTRICIAN
            </Text3D>
          </group>
          <mesh position={[0, groundProps.height, 0]} scale={groundProps.scale}>
            <sphereGeometry args={[groundProps.radius, 128, 128]} />
            <meshBasicMaterial
              envMap={hdrTexture}
              envMapIntensity={0.01}
              side={THREE.BackSide}
              // metalness={0.1}
              // roughness={8}
            />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};

useGLTF.preload("./model/Animation_Walking_withSkin.glb");
useGLTF.preload("./model/Animation_Idle_withSkin.glb");

export default PortalScene;
