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

const PortalScene = ({ scale = 10 }) => {
  const [active, setActive] = useState(false);
  const meshPortalMaterialRef = useRef();
  const cameraControlsRef = useRef();
  const modelMeshRef = useRef();
  const meshInfoBackgroundRef = useRef();
  const meshRightBackgroundRef = useRef();
  const meshLeftBackgroundRef = useRef();

  // MODELS
  const modelGreg = useGLTF(
    "./model/gregOfficeWorkerModel/Animation_Big_Wave_Hello_withSkin.glb"
  );
  const animations = useAnimations(modelGreg.animations, modelGreg.scene);
  console.log(animations.actions);

  const modelGreg2 = useGLTF(
    "./model/gregOfficeWorkerModel/Animation_Agree_Gesture_withSkin.glb"
  );
  const animations2 = useAnimations(modelGreg2.animations, modelGreg2.scene);
  console.log(animations2.actions);

  const modelGreg3 = useGLTF(
    "./model/gregOfficeWorkerModel/Animation_Stand_and_Chat_withSkin.glb"
  );
  const animations3 = useAnimations(modelGreg3.animations, modelGreg3.scene);
  console.log(animations3.actions);

  // TEXTURES
  // const texture = useTexture("./texture/1.png");
  const hdrTexture = useLoader(RGBELoader, "./envMap/6.hdr");
  hdrTexture.mapping = THREE.EquirectangularReflectionMapping;
  hdrTexture.rotation = Math.PI;

  const groundProps = {
    height: 20,
    radius: 22,
    scale: 50,
  };

  useEffect(() => {
    animations2.actions["Armature|Agree_Gesture|baselayer"].play();
    animations.actions["Armature|Big_Wave_Hello|baselayer"].play();
    animations3.actions["Armature|Stand_and_Chat|baselayer"].play();
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
    setActive(!active);
  };

  const cameraPosition = active
    ? [0, 80, -160] // Position when portal is active
    : [0, 100, -200]; // Default home position

  const cameraTarget = active
    ? [0, 60, 0] // Target when portal is active
    : [0, -50, 0]; // Default home target

  return (
    <group scale={scale} rotation-y={Math.PI} position={[0, 40, 0]}>
      <ControlledCamera
        cameraPosition={cameraPosition}
        cameraTarget={cameraTarget}
        isLocked={active} // Lock controls when the portal is active
        ref={cameraControlsRef}
        fov={90}
      />

      <Text font="./font/bold.ttf" position={[0, 2.2, 0.1]} fontSize={0.6}>
        ABOUT GREG
        <meshBasicMaterial toneMapped={false} color="white" />
      </Text>

      <RoundedBox args={[4, 6, 0.1]} radius={0.1} onClick={clickHandler}>
        <MeshPortalMaterial ref={meshPortalMaterialRef}>
          <ambientLight intensity={active ? 0.5 : 0} />
          <group>
            {/* Block behind the HTML content */}
            <mesh
              ref={meshInfoBackgroundRef}
              position={[0, 0, -3.5]}
              visible={active}
              onClick={() => setActive(!active)}
              onPointerOver={(e) => handleMouseOver(e.object)}
              onPointerOut={(e) => handleMouseOut(e.object)}
            >
              <boxGeometry args={[11, 12, 2, 8, 8, 8]} />
              <meshStandardMaterial color="lightgreen" />
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
              visible={active}
            >
              <meshStandardMaterial attach="material" color="black" />I AM A
              PROGRAMMER
            </Text3D>
            <primitive
              object={modelGreg.scene}
              scale={active ? 2.5 : 2}
              position={active ? [-2, 5.9, -3.2] : [-0.5, -2, -1]}
              ref={modelMeshRef}
              rotation={[0, (Math.PI / 2) * 3, 0]}
            />
            <Image
              url="./image/d20SVGLOGO.png"
              position={[-2, 3.5, -2.2]}
              scale={4}
              transparent
              visible={active}
            />
            <Image
              url="./image/Contributions_1.png"
              position={[0, -3, -2.2]}
              scale={[10, 3, 1]}
              fit="cover"
              transparent
              visible={active}
            />
          </group>
          <group rotation={[0, Math.PI / 3, 0]} position={[4, 0, 7.6]}>
            {/* Block right of the HTML content */}
            <mesh
              ref={meshRightBackgroundRef}
              meshLeftBackgroundRef
              position={[11, 0, 1.5]}
              rotation={[0, Math.PI / 2, 0]}
              visible={active}
              onClick={() => setActive(!active)}
              onPointerOver={(e) => handleMouseOver(e.object)}
              onPointerOut={(e) => handleMouseOut(e.object)}
            >
              <boxGeometry args={[9, 8, 2, 8, 8, 8]} />
              <meshStandardMaterial color="#9999ff" />
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
              visible={active}
            >
              <meshStandardMaterial attach="material" color="black" />I AM A
              MUSICIAN
            </Text3D>
            <primitive
              object={modelGreg2.scene}
              scale={active ? 2.5 : 0}
              position={active ? [11.25, 4, 2] : [0, -2, -1]}
              ref={modelMeshRef}
              rotation={[0, Math.PI, 0]}
            />
            <Image
              url="./image/HS_AlbumCover.png"
              position={[9.5, -1, 1.5]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={5}
              transparent
              visible={active}
            />
          </group>
          <group rotation={[0, -Math.PI / 3, 0]} position={[-3, 0, 5.3]}>
            {/* Block left of the HTML content */}
            <mesh
              ref={meshLeftBackgroundRef}
              position={[-10, 0, 5]}
              rotation={[0, Math.PI / 2, 0]}
              visible={active}
              onClick={() => setActive(!active)}
              onPointerOver={(e) => handleMouseOver(e.object)}
              onPointerOut={(e) => handleMouseOut(e.object)}
            >
              <boxGeometry args={[12, 10, 2, 8, 8, 8]} />
              <meshStandardMaterial color="lightblue" />
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
              visible={active}
            >
              <meshStandardMaterial attach="material" color="black" />I AM AN
              ELECTRICIAN
            </Text3D>
            <primitive
              object={modelGreg3.scene}
              scale={active ? 2.5 : 0}
              position={active ? [-9, 5, 5] : [0, -2, -1]}
              rotation={[0, Math.PI / 3, 0]}
            />
            <Image
              url="./image/GregBarkerJManCertificate.png"
              position={[-8.5, -1.5, 5]}
              rotation={[0, (Math.PI * 2) / 4, 0]}
              scale={[8, 6, 1]}
              transparent
              visible={active}
            />
          </group>
          <group>
            {/* Environment component */}
            <Environment files="./envMap/6.hdr" background />

            <mesh
              position={[0, -groundProps.height, 0]}
              scale={groundProps.scale}
            >
              <sphereGeometry args={[groundProps.radius, 128, 128]} />
              <meshBasicMaterial
                // envMap={hdrTexture}
                side={THREE.DoubleSide}
                // metalness={0.1}
                // roughness={8}
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

export default PortalScene;
