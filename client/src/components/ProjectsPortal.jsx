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
  Image,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";
import { useState, useRef, useEffect } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { useAnimations } from "@react-three/drei";
import ControlledCamera from "./ControlledCamera";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";
import useCameraStore from "../Store";

const ProjectsPortal = ({ scale = 10 }) => {
  const updateCamera = useCameraStore((state) => state.updateCamera);
  const [isProjectActive, setIsProjectActive] = useState(false);
  const meshPortalMaterialRef = useRef();
  const cameraControlsRef = useRef();
  const modelMeshRef = useRef();
  const meshInfoBackgroundRef = useRef();
  const meshRightBackgroundRef = useRef();
  const meshLeftBackgroundRef = useRef();
  const meshFloorRef = useRef();

  // MODELS
  // const modelGreg = useGLTF(
  //   "./model/gregOfficeWorkerModel/Animation_Big_Wave_Hello_withSkin.glb"
  // );
  // const animations = useAnimations(modelGreg.animations, modelGreg.scene);
  // console.log(animations.actions);

  // const modelGreg2 = useGLTF(
  //   "./model/gregOfficeWorkerModel/Animation_Agree_Gesture_withSkin.glb"
  // );
  // const animations2 = useAnimations(modelGreg2.animations, modelGreg2.scene);
  // console.log(animations2.actions);

  // const modelGreg3 = useGLTF(
  //   "./model/gregOfficeWorkerModel/Animation_Stand_and_Chat_withSkin.glb"
  // );
  // const animations3 = useAnimations(modelGreg3.animations, modelGreg3.scene);
  // console.log(animations3.actions);

  // TEXTURES
  const texture = useTexture("./texture/1.png");
  texture.mapping = THREE.EquirectangularReflectionMapping;

  const groundProps = {
    height: 1,
    radius: 30,
    scale: 4,
  };

  // useEffect(() => {
  //   animations2.actions["Armature|Agree_Gesture|baselayer"].play();
  //   animations.actions["Armature|Big_Wave_Hello|baselayer"].play();
  //   animations3.actions["Armature|Stand_and_Chat|baselayer"].play();
  // }, []);

  useFrame((_, delta) => {
    easing.damp(
      meshPortalMaterialRef.current,
      "blend",
      isProjectActive ? 1 : 0,
      0.5,
      delta
    );
  });

  const handleMouseOver = (mesh) => {
    if (mesh.material) {
      mesh.material.metalness = 0.5; // Make it fully metallic
      mesh.material.roughness = 0.5; // Smooth surface
      mesh.material.needsUpdate = true; // Ensure the material updates
    }
  };

  const handleMouseOut = (mesh) => {
    if (mesh.material) {
      mesh.material.metalness = 0; // Default metalness
      mesh.material.roughness = 1; // Default roughness
      mesh.material.needsUpdate = true; // Ensure the material updates
    }
  };

  const clickHandler = () => {
    setIsProjectActive(!isProjectActive);
    updateCamera([0, 80, -160], [100, 60, -80]);
  };

  return (
    <group
      scale={scale}
      rotation-y={-(Math.PI * 3) / 5}
      position={[155, 40, -90]}
    >
      <Text font="./font/bold.ttf" position={[0, 2.2, 0.1]} fontSize={0.6}>
        MY PROJECTS
        <meshBasicMaterial toneMapped={false} color="white" />
      </Text>

      <RoundedBox args={[4, 6, 0.1]} radius={0.1} onClick={clickHandler}>
        <MeshPortalMaterial ref={meshPortalMaterialRef}>
          <ambientLight intensity={isProjectActive ? 0.5 : 0} />

          {/* FLOOR */}

          <group>
            <Text
              font="./font/bold.ttf"
              position={[0, 10, -10]}
              fontSize={5}
              visible={isProjectActive}
            >
              MY PROJECTS
              <meshBasicMaterial toneMapped={false} color="white" />
            </Text>
            <mesh
              ref={meshFloorRef}
              position={[0, -5, 0]}
              rotation={[0, 0, 0]}
              // visible={active}
              // onClick={() => setActive(!active)}
              // onPointerOver={(e) => handleMouseOver(e.object)}
              // onPointerOut={(e) => handleMouseOut(e.object)}
            >
              <boxGeometry args={[40, 2, 40, 8, 8, 8]} />
              <meshStandardMaterial color="#ffffff" opacity={0.2} transparent />
            </mesh>
          </group>
          <group>
            {/* Block behind the HTML content */}
            <mesh
              ref={meshInfoBackgroundRef}
              position={[0, 0, -3.5]}
              visible={isProjectActive}
              onClick={() => setIsProjectActive(!isProjectActive)}
              onPointerOver={(e) => handleMouseOver(e.object)}
              onPointerOut={(e) => handleMouseOut(e.object)}
            >
              <boxGeometry args={[11, 12, 2, 8, 8, 8]} />
              <meshStandardMaterial color="#dd4444" />
            </mesh>
            {/* Text3D behind */}
            <Text3D
              font="./font/Lexend.json"
              position={[-4.5, 0, -2.5]}
              rotation={[0, 0, 0]}
              height={0.2}
              size={0.6}
              bevelEnabled
              bevelSegments={20}
              visible={isProjectActive}
            >
              <meshStandardMaterial attach="material" color="black" />
              SHADOWTIDE ISLAND
            </Text3D>

            <Image
              url="./image/d20SVGLOGO.png"
              position={[-2, 3.5, -2.2]}
              scale={4}
              transparent
              visible={isProjectActive}
            />
            <Image
              url="./image/Contributions_1.png"
              position={[0, -3, -2.2]}
              scale={[10, 3, 1]}
              fit="cover"
              transparent
              visible={isProjectActive}
            />
          </group>
          <group rotation={[0, Math.PI / 3, 0]} position={[4, 0, 7.6]}>
            {/* Block right of the HTML content */}
            <mesh
              ref={meshRightBackgroundRef}
              meshLeftBackgroundRef
              position={[11, 0, 1.5]}
              rotation={[0, Math.PI / 2, 0]}
              visible={isProjectActive}
              onClick={() => setIsProjectActive(!isProjectActive)}
              onPointerOver={(e) => handleMouseOver(e.object)}
              onPointerOut={(e) => handleMouseOut(e.object)}
            >
              <boxGeometry args={[9, 8, 2, 8, 8, 8]} />
              <meshStandardMaterial color="#98A9B3" />
            </mesh>
            {/* Text3D to the right */}
            <Text3D
              font="./font/Lexend.json"
              position={[10, 2, -2.2]}
              rotation={[0, -Math.PI / 2, 0]}
              height={0.2}
              size={0.6}
              bevelEnabled
              bevelSegments={20}
              visible={isProjectActive}
            >
              <meshStandardMaterial attach="material" color="white" />
              BETTER BALLS
            </Text3D>

            <Image
              url="./image/HS_AlbumCover.png"
              position={[9.5, -1, 1.5]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={5}
              transparent
              visible={isProjectActive}
            />
          </group>
          <group rotation={[0, -Math.PI / 3, 0]} position={[-3, 0, 5.3]}>
            {/* Block left of the HTML content */}
            <mesh
              ref={meshLeftBackgroundRef}
              position={[-10, 0, 5]}
              rotation={[0, Math.PI / 2, 0]}
              visible={isProjectActive}
              onClick={() => setIsProjectActive(!isProjectActive)}
              onPointerOver={(e) => handleMouseOver(e.object)}
              onPointerOut={(e) => handleMouseOut(e.object)}
            >
              <boxGeometry args={[12, 10, 2, 8, 8, 8]} />
              <meshStandardMaterial color="orange" />
            </mesh>
            {/* Text3D to the left */}
            <Text3D
              font="./font/Lexend.json"
              position={[-9, 2, 9.5]}
              rotation={[0, (Math.PI * 2) / 4, 0]}
              height={0.2}
              size={0.6}
              bevelEnabled
              bevelSegments={20}
              visible={isProjectActive}
            >
              <meshStandardMaterial attach="material" color="black" />
              CAT GPT
            </Text3D>

            <Image
              url="./image/GregBarkerJManCertificate.png"
              position={[-8.5, -1.5, 5]}
              rotation={[0, (Math.PI * 2) / 4, 0]}
              scale={[8, 6, 1]}
              transparent
              visible={isProjectActive}
            />
          </group>
          <group>
            {/* Environment component */}
            {/* <Environment files="./envMap/9.hdr" background /> */}

            <mesh
            // position={[0, -groundProps.height, 0]}
            // scale={groundProps.scale}
            >
              <sphereGeometry args={[groundProps.radius, 64, 64]} />
              <meshBasicMaterial
                // envMap={hdrTexture}
                side={THREE.BackSide}
                map={texture}
              />
            </mesh>
          </group>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};

useGLTF.preload("./model/Animation_Walking_withSkin.glb");
useGLTF.preload("./model/Animation_Idle_withSkin.glb");

export default ProjectsPortal;
