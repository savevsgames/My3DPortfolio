import {
  useGLTF,
  useTexture,
  MeshPortalMaterial,
  RoundedBox,
  Text,
  Text3D,
  Image,
  Float,
} from "@react-three/drei";
import * as THREE from "three";
import { useState, useRef, useEffect } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { useAnimations } from "@react-three/drei";
import useCameraStore from "../Store";
import { rotationYAngleToYaw } from "../utils/CustomUtils";

const ProjectsPortal = ({ scale = 10 }) => {
  const updateCamera = useCameraStore((state) => state.updateCamera);
  const [isProjectActive, setIsProjectActive] = useState(false);
  const meshPortalMaterialRef = useRef();
  const modelBottleMeshRef = useRef();
  const gregModelMeshRef = useRef();
  const meshInfoBackgroundRef = useRef();
  const meshRightBackgroundRef = useRef();
  const meshLeftBackgroundRef = useRef();
  const meshFloorRef = useRef();
  const meshCloseRef = useRef();

  // MODELS
  const betterBallsBottle = useGLTF("./model/better_balls_bottle.glb");
  const gregSittingModel = useGLTF(
    "./model/gregOfficeWorkerModel/Animation_Chair_Sit_Idle_M_withSkin.glb"
  );
  const animations = useAnimations(
    gregSittingModel.animations,
    gregSittingModel.scene
  );
  console.log(animations.actions);

  // TEXTURES
  const texture = useTexture("./texture/1.png");
  //   texture.mapping = THREE.EquirectangularReflectionMapping;

  useEffect(() => {
    animations.actions["Armature|Chair_Sit_Idle_M|baselayer"].play();
  }, []);

  const groundProps = {
    height: 1,
    radius: 30,
    scale: 4,
  };

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
    updateCamera([-80, 100, -100], [100, 60, -80]);
  };

  const linkClickHandler = (url) => {
    if (isProjectActive) {
      window.open(url, "_blank");
    }
  };

  return (
    <group
      scale={scale}
      rotation-y={rotationYAngleToYaw(-100)}
      position={[155, 40, -90]}
    >
      <Text font="./font/bold.ttf" position={[0, 2.2, 0.1]} fontSize={0.6}>
        MY PROJECTS
        <meshBasicMaterial toneMapped={false} color="white" />
      </Text>

      <RoundedBox args={[4.5, 6, 0.1]} radius={0.1} onClick={clickHandler}>
        <MeshPortalMaterial ref={meshPortalMaterialRef}>
          <ambientLight intensity={isProjectActive ? 0.8 : 0} />

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
              ref={meshCloseRef}
              position={[19, 13.5, -11.5]}
              rotation={[0, 0, 0]}
              visible={isProjectActive}
              onClick={() => setIsProjectActive(!isProjectActive)}
              onPointerOver={(e) => handleMouseOver(e.object)}
              onPointerOut={(e) => handleMouseOut(e.object)}
            >
              <boxGeometry args={[3, 3, 0.5, 8, 8, 8]} />
              <meshStandardMaterial color="#ffffff" opacity={0.5} transparent />
            </mesh>
            <Text
              font="./font/bold.ttf"
              position={[19, 13.25, -11]}
              fontSize={3}
              visible={isProjectActive}
            >
              X
              <meshBasicMaterial toneMapped={false} color="#FF0000" />
            </Text>
            <primitive
              object={gregSittingModel.scene}
              scale={isProjectActive ? 3.5 : 2.5}
              position={isProjectActive ? [0, 6.8, -2] : [0, -2, 0]}
              ref={gregModelMeshRef}
              rotation={[0, (Math.PI / 2) * 3, 0]}
            />
            <mesh
              ref={meshFloorRef}
              position={[0, -8, 0]}
              rotation={[0, 0, 0]}
              visible={isProjectActive}
            >
              <boxGeometry args={[40, 2, 40, 8, 8, 8]} />
              <meshStandardMaterial color="#ffffff" opacity={0.2} transparent />
            </mesh>
          </group>
          <Float>
            <group position={[0, 2, 0]}>
              {/* Block behind the HTML content */}
              <mesh
                ref={meshInfoBackgroundRef}
                position={[0, 0, -3.5]}
                visible={isProjectActive}
                onClick={() =>
                  linkClickHandler("https://github.com/savevsgames/js_rpg2")
                }
                onPointerOver={(e) => handleMouseOver(e.object)}
                onPointerOut={(e) => handleMouseOut(e.object)}
              >
                <boxGeometry args={[11, 12, 2, 8, 8, 8]} />
                <meshStandardMaterial color="#dd4444" />
              </mesh>
              {/* Shadowtide - Front */}
              <Text3D
                font="./font/Lexend.json"
                position={[-4.5, 1.6, -2.5]}
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
                position={[-3.3, 4.2, -2.2]}
                scale={3.4}
                transparent
                visible={isProjectActive}
              />
              <Image
                url="./images/rpg2-screenshot.png"
                position={[0, -2.3, -2.2]}
                scale={[10, 4.9, 1]}
                fit="cover"
                transparent
                visible={isProjectActive}
              />
            </group>
          </Float>
          <Float>
            <group rotation={[0, Math.PI / 3, 0]} position={[4, 0, 7.6]}>
              {/* Better Balls - right side */}
              <mesh
                ref={meshRightBackgroundRef}
                meshLeftBackgroundRef
                position={[11, 0, 1.5]}
                rotation={[0, Math.PI / 2, 0]}
                visible={isProjectActive}
                onClick={() => linkClickHandler("https://www.betterballs.com/")}
                onPointerOver={(e) => handleMouseOver(e.object)}
                onPointerOut={(e) => handleMouseOut(e.object)}
              >
                <boxGeometry args={[9, 8, 2, 8, 8, 8]} />
                <meshStandardMaterial color="#98A9B3" />
              </mesh>
              {/* Text3D to the right */}
              <Text3D
                font="./font/Lexend.json"
                position={[10, 2, -1.6]}
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
              <primitive
                object={betterBallsBottle.scene}
                scale={1.5}
                position={[10, 5, -1.5]}
                ref={modelBottleMeshRef}
                rotation={[
                  0,
                  rotationYAngleToYaw(-90),
                  rotationYAngleToYaw(-65),
                ]}
                visible={isProjectActive}
              />

              <Image
                url="./image/betterballsrevitacreamheart.gif"
                position={[9.5, -0.75, 1.5]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[6,5,1]}
                transparent
                visible={isProjectActive}
              />
            </group>
          </Float>
          <Float>
            <group
              rotation={[0, rotationYAngleToYaw(10), 0]}
              position={[2, 0, 9]}
              scale={1.5}
            >
              {/* Better Balls - right side */}
              <mesh
                ref={meshRightBackgroundRef}
                meshLeftBackgroundRef
                position={[11, 0, 1.5]}
                rotation={[0, Math.PI / 2, 0]}
                visible={isProjectActive}
                onClick={() =>
                  linkClickHandler(
                    "https://github.com/soibun-sol/multi-search-dashboard"
                  )
                }
                onPointerOver={(e) => handleMouseOver(e.object)}
                onPointerOut={(e) => handleMouseOut(e.object)}
              >
                <boxGeometry args={[9, 8, 2, 8, 8, 8]} />
                <meshStandardMaterial color="#333399" />
              </mesh>
              {/* Text3D to the right */}
              <Text3D
                font="./font/Lexend.json"
                position={[10, 3, -1.6]}
                rotation={[0, -Math.PI / 2, 0]}
                height={0.2}
                size={0.6}
                bevelEnabled
                bevelSegments={20}
                visible={isProjectActive}
              >
                <meshStandardMaterial attach="material" color="#ff8833" />
                MULTI-SEARCH
              </Text3D>
              <Text3D
                font="./font/Lexend.json"
                position={[10, 2, -1.2]}
                rotation={[0, -Math.PI / 2, 0]}
                height={0.08}
                size={0.6}
                bevelEnabled
                bevelSegments={20}
                visible={isProjectActive}
              >
                <meshStandardMaterial attach="material" color="#ff8833" />
                DASHBOARD
              </Text3D>

              <Image
                url="./image/MultiSearchDashboard.png"
                position={[9.5, -0.75, 1.5]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[8, 3.9, 1]}
                transparent
                visible={isProjectActive}
              />
            </group>
          </Float>
          <Float>
            <group rotation={[0, -Math.PI / 3, 0]} position={[-3, 0, 5.3]}>
              {/* CatGPT - left side */}
              <mesh
                ref={meshLeftBackgroundRef}
                position={[-10, 0, 5]}
                rotation={[0, Math.PI / 2, 0]}
                visible={isProjectActive}
                onClick={() =>
                  linkClickHandler(
                    "https://github.com/OccultParrot/Tomogatch.ai"
                  )
                }
                onPointerOver={(e) => handleMouseOver(e.object)}
                onPointerOut={(e) => handleMouseOut(e.object)}
              >
                <boxGeometry args={[12, 10, 2, 8, 8, 8]} />
                <meshStandardMaterial color="orange" />
              </mesh>
              {/* Text3D to the left */}
              <Text3D
                font="./font/Lexend.json"
                position={[-9, 3, 9.5]}
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
                url="./image/cat-gpt-logo.png"
                position={[-8.5, -0.5, 5]}
                rotation={[0, (Math.PI * 2) / 4, 0]}
                scale={[6, 5.5, 1]}
                transparent
                visible={isProjectActive}
              />
            </group>
          </Float>
          <Float>
            <group
              rotation={[0, rotationYAngleToYaw(-10), 0]}
              position={[-6, 0, 7]}
              scale={1.3}
            >
              {/* FWOB - left side */}
              <mesh
                ref={meshLeftBackgroundRef}
                position={[-10, 0, 5]}
                rotation={[0, Math.PI / 2, 0]}
                visible={isProjectActive}
                onClick={() =>
                  linkClickHandler(
                    "https://friends-without-benefits.onrender.com/"
                  )
                }
                onPointerOver={(e) => handleMouseOver(e.object)}
                onPointerOut={(e) => handleMouseOut(e.object)}
              >
                <boxGeometry args={[12, 10, 2, 8, 8, 8]} />
                <meshStandardMaterial color="teal" />
              </mesh>
              {/* Text3D to the left */}
              <Text3D
                font="./font/Lexend.json"
                position={[-9, 3, 9.5]}
                rotation={[0, (Math.PI * 2) / 4, 0]}
                height={0.2}
                size={0.6}
                bevelEnabled
                bevelSegments={20}
                visible={isProjectActive}
              >
                <meshStandardMaterial attach="material" color="white" />
                FWOB
              </Text3D>

              <Image
                url="./image/FWOB.png"
                position={[-8.5, -0.5, 5]}
                rotation={[0, (Math.PI * 2) / 4, 0]}
                scale={[10.5, 4.9, 1]}
                transparent
                visible={isProjectActive}
              />
            </group>
          </Float>
          <group>
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
