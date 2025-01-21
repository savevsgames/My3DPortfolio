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
import { Physics, RigidBody } from "@react-three/rapier";

const HobbyPortal = ({ scale = 10 }) => {
  const updateCamera = useCameraStore((state) => state.updateCamera);
  const [isHobbyActive, setIsHobbyActive] = useState(false);
  const meshPortalMaterialRef = useRef();
  const gregModelMeshRef = useRef();
  const meshGolfBall = useRef();
  const meshD20 = useRef();
  const meshFloorRef = useRef();
  const meshCloseRef = useRef();

  // MODELS
  const d20SVG = useGLTF("./model/D20SVG2.glb");
  console.log(d20SVG.scene);

  const writersDeskModel = useGLTF("./model/writers_desk.glb");
  const droneModel = useGLTF("./model/drone.glb");
  const guitarModel = useGLTF("./model/guitar3.glb");
  const campfireModel = useGLTF("./model/campfire1.glb");

  const gregHobbyModel1 = useGLTF(
    "./model/gregOfficeWorkerModel/Animation_Victory_Cheer_withSkin.glb"
  );
  const animations = useAnimations(
    gregHobbyModel1.animations,
    gregHobbyModel1.scene
  );
  console.log(animations.actions);

  // TEXTURES
  const texture = useTexture("./texture/2.png");
  const golfballTexture = useTexture("./texture/golfballtexture.jpg");
  const grassTexture = useTexture("./texture/grass1-albedo3.png");

  useEffect(() => {
    animations.actions["Armature|Victory_Cheer|baselayer"].play();
  }, []);

  const groundProps = {
    height: 1,
    radius: 30,
    scale: 4,
  };

  useFrame((_, delta) => {
    // Update blend property
    easing.damp(
      meshPortalMaterialRef.current,
      "blend",
      isHobbyActive ? 1 : 0,
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
    setIsHobbyActive(!isHobbyActive);
    updateCamera([80, 100, -100], [-100, 60, -80]);
  };

// Function to handle impulse on click
const clickImpulseHandler = (ref, target) => {
    if (ref.current) {
      // Get the current position of the object
      const currentPosition = ref.current.translation();
  
      // Calculate the direction vector toward the target
      const impulseVector = {
        x: target[0] - currentPosition.x,
        y: target[1] - currentPosition.y,
        z: target[2] - currentPosition.z,
      };
  
      // Normalize the impulse vector
      const magnitude = Math.sqrt(
        impulseVector.x ** 2 + impulseVector.y ** 2 + impulseVector.z ** 2
      );
      const normalizedImpulse = {
        x: (impulseVector.x / magnitude) * 10, // Scale impulse strength
        y: (impulseVector.y / magnitude) * 250,
        z: (impulseVector.z / magnitude) * 10,
      };
  
      // Apply the impulse
      ref.current.applyImpulse(normalizedImpulse, true); // Apply at the center of mass
    }
  };

  return (
    <group
      scale={scale}
      rotation-y={rotationYAngleToYaw(100)}
      position={[-155, 40, -90]}
    >
      <Text font="./font/bold.ttf" position={[0, 2.2, 0.1]} fontSize={0.6}>
        MY HOBBIES
        <meshBasicMaterial toneMapped={false} color="white" />
      </Text>

      <RoundedBox args={[4.5, 6, 0.1]} radius={0.1} onClick={clickHandler}>
        <MeshPortalMaterial ref={meshPortalMaterialRef}>
          <ambientLight intensity={isHobbyActive ? 0.8 : 0.1} />

          {/* FLOOR */}

          <group>
            <Text font="./font/bold.ttf" position={[0, 10, -10]} fontSize={5}>
              MY HOBBIES
              <meshBasicMaterial
                toneMapped={false}
                color="white"
                opacity={isHobbyActive ? 1 : 0}
                transparent
              />
            </Text>
            <mesh
              ref={meshCloseRef}
              position={[19, 13.5, -11.5]}
              rotation={[0, 0, 0]}
              visible={isHobbyActive}
              onClick={() => setIsHobbyActive(!isHobbyActive)}
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
              visible={isHobbyActive}
            >
              X
              <meshBasicMaterial toneMapped={false} color="#FF0000" />
            </Text>
            <primitive
              object={gregHobbyModel1.scene}
              scale={isHobbyActive ? 3.5 : 2.5}
              position={isHobbyActive ? [0, 0, 6] : [0, -2, 0]}
              ref={gregModelMeshRef}
              rotation={[0, (Math.PI / 2) * 3, 0]}
            />
          </group>

          {/* Block behind the HTML content */}
          <Physics gravity={[0, -9.81, 0]}>
            {/* Floor */}
            <RigidBody
              ref={meshFloorRef}
              type="kinematicPosition"
              colliders="hull"
              restitution={0.2}
              friction={1}
            >
              <mesh>
                <boxGeometry args={[80, 0.25, 80]} />
                <meshStandardMaterial
                  map={grassTexture}
                  transparent
                  opacity={isHobbyActive ? 1 : 0}
                />
              </mesh>
            </RigidBody>

            {/* Golf Ball */}
            <RigidBody
              ref={meshGolfBall}
              type="dynamic"
              gravityScale={0.5} // Default gravity
              restitution={0.1} // Adds bounciness
              friction={1} // Adds friction
              colliders="hull"
              mass={0.2}
              onPointerOver={(e) => handleMouseOver(e.object)}
              onPointerOut={(e) => handleMouseOut(e.object)}
              onClick={() => clickImpulseHandler(meshGolfBall, [0, 1, 0])} // Target is [0, 1, 0]
              position={[-3, 30, -3]}
            >
              <mesh>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial map={golfballTexture} />
              </mesh>
            </RigidBody>

            <RigidBody
              ref={meshD20}
              type="dynamic"
              gravityScale={0.5}
              mass={0.1}
              restitution={0.2}
              friction={0.1}
              colliders="hull"
              onPointerOver={(e) => handleMouseOver(e.object)}
              onPointerOut={(e) => handleMouseOut(e.object)}
              onClick={() => clickImpulseHandler(meshD20, [0, 1, 10])} // Target is [0, 1, 0]
            >
              <primitive
                object={d20SVG.scene}
                scale={0.3}
                position={[9, 5, -3]}
                rotation={[0, rotationYAngleToYaw(-30), 0]}
              />
            </RigidBody>
          </Physics>

          {/* TTRPG - right side */}
          <Text3D
            font="./font/Lexend.json"
            position={[6, 6, 0]}
            rotation={[0, rotationYAngleToYaw(-30), 0]}
            height={0.2}
            size={1}
            bevelEnabled
            bevelSegments={20}
            visible={isHobbyActive}
          >
            <meshStandardMaterial attach="material" color="purple" />
            TTRPGs
          </Text3D>

          {/* GOLF - Front */}
          <Text3D
            font="./font/Lexend.json"
            position={[-4, 6, 0]}
            rotation={[0, 0, 0]}
            height={0.2}
            size={0.8}
            bevelEnabled
            bevelSegments={20}
            visible={isHobbyActive}
          >
            <meshStandardMaterial attach="material" color="white" />
            GOLF
          </Text3D>

          <group
            rotation={[0, rotationYAngleToYaw(10), 0]}
            position={[2, 0, 9]}
            scale={1}
          >
            {/* Camping - right side */}

            <Text3D
              font="./font/Lexend.json"
              position={[12, 7, 1]}
              rotation={[0, -Math.PI / 2, 0]}
              height={0.2}
              size={0.8}
              bevelEnabled
              bevelSegments={20}
              visible={isHobbyActive}
            >
              <meshStandardMaterial attach="material" color="#ff8833" />
              CAMPING
            </Text3D>
            <primitive
              object={campfireModel.scene}
              scale={isHobbyActive ? 5 : 2.5}
              position={[12, 0.2, 8]}
              rotation={[0, rotationYAngleToYaw(-90), 0]}
              visible={isHobbyActive}
            />
          </group>

          <group rotation={[0, -Math.PI / 3, 0]} position={[-3, 0, 5.3]}>
            {/* Music - left side */}

            <Text3D
              font="./font/Lexend.json"
              position={[-9, 5, 9.5]}
              rotation={[0, (Math.PI * 2) / 4, 0]}
              height={0.2}
              size={0.8}
              bevelEnabled
              bevelSegments={20}
              visible={isHobbyActive}
            >
              <meshStandardMaterial attach="material" color="brown" />
              MUSIC
            </Text3D>
            <primitive
              object={guitarModel.scene}
              scale={10}
              position={[-10, 0, 3]}
              rotation={[0, rotationYAngleToYaw(90), 0]}
            />
          </group>

          <group
            rotation={[0, rotationYAngleToYaw(-10), 0]}
            position={[-6, 0, 7]}
            scale={1.3}
          >
            {/* Text3D to the left */}
            <Text3D
              font="./font/Lexend.json"
              position={[-7, 4, 6.8]}
              rotation={[0, (Math.PI * 2) / 4, 0]}
              height={0.2}
              size={0.8}
              bevelEnabled
              bevelSegments={20}
              visible={isHobbyActive}
            >
              <meshStandardMaterial attach="material" color="#B4D55A" />
              WRITING
            </Text3D>
            <primitive
              object={writersDeskModel.scene}
              scale={isHobbyActive ? 3 : 2.5}
              position={[-6, 0, 4]}
              rotation={[0, rotationYAngleToYaw(90), 0]}
              visible={isHobbyActive}
            />
          </group>

          <group>
            <mesh>
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

export default HobbyPortal;
