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
    // MeshWobbleMaterial,
    // GradientTexture,
    // SpotLight,
  } from "@react-three/drei";
  import * as THREE from "three";
  import { useState, useRef, useEffect } from "react";
  import { easing } from "maath";
  import { useFrame } from "@react-three/fiber";
  import { useAnimations } from "@react-three/drei";


  
  const PortalScene = ({ scale = 10 }) => {
    const [active, setActive] = useState(false);
    const meshPortalMaterialRef = useRef();
    const cameraControlsRef = useRef();
    const modelMeshRef = useRef();
    const meshInfoBackgroundRef = useRef();
  
    const modelGreg2 = useGLTF("./model/Animation_Idle_withSkin.glb");
    const animations2 = useAnimations(modelGreg2.animations, modelGreg2.scene);
    console.log(animations2.actions);
    const modelGreg = useGLTF(
      "./model/gregOfficeWorkerModel/Animation_Big_Wave_Hello_withSkin.glb"
    );
    const animations = useAnimations(modelGreg.animations, modelGreg.scene);
    console.log(animations.actions);
    const texture = useTexture("./texture/1.png");
  
    useEffect(() => {
      animations2.actions["Armature|Idle|baselayer"].play();
      animations.actions["Armature|Big_Wave_Hello|baselayer"].play();
    }, []);
  
    useFrame((_, delta) => {
      easing.damp(
        meshPortalMaterialRef.current,
        "blend",
        active ? 1 : 0,
        0.2,
        delta
      );
    });
  
    useEffect(() => {
      if (active) {
        cameraControlsRef.current.setLookAt(0, 80, -100, 0, 60, 0, true);
      } else {
        cameraControlsRef.current.setLookAt(0, 100, -200, 0, -50, 0, true);
      }
    }, [active]);
  
    const clickHandler = () => {
      setActive(!active);
    };
  
  
    return (
      <group scale={scale} rotation-y={Math.PI} position={[0, 40, 0]}>
        <CameraControls ref={cameraControlsRef} />
  
        <Text font="./font/bold.ttf" position={[0, 2.2, 0.1]} fontSize={0.6}>
          ABOUT GREG
          <meshBasicMaterial toneMapped={false} />
        </Text>
  
        <RoundedBox args={[4, 6, 0.1]} radius={0.1} onClick={clickHandler}>
          <MeshPortalMaterial ref={meshPortalMaterialRef}>
            <primitive
              object={modelGreg2.scene}
              scale={active ? 1.5 : 0}
              position={active ? [11.25, 3, -1] : [0, -2, -1]}
              ref={modelMeshRef}
            />
            <primitive
              object={modelGreg.scene}
              scale={active ? 1.5 : 2}
              position={active ? [-5.5, 2, -3.2] : [-0.5, -2, -1]}
              ref={modelMeshRef}
              rotation={[0, (Math.PI / 2) * 3, 0]}
            />
  
            {/* Block behind the HTML content */}
            <mesh
              ref={meshInfoBackgroundRef}
              position={[0, 0, -3.5]}
              visible={active}
            >
              <boxGeometry args={[16, 4, 2, 8, 8, 8]} />
              <meshMatcapMaterial color="lightgreen" />
            </mesh>
  
            {/* Block right of the HTML content */}
            <mesh
              ref={meshInfoBackgroundRef}
              position={[11, 0, 1]}
              rotation={[0, Math.PI / 2, 0]}
              visible={active}
            >
              <boxGeometry args={[10, 6, 2, 8, 8, 8]} />
              <meshMatcapMaterial color="#9999ff" />
            </mesh>
  
            {/* Block left of the HTML content */}
            <mesh
              ref={meshInfoBackgroundRef}
              position={[-10, 0, 4]}
              rotation={[0, Math.PI / 2, 0]}
              visible={active}
            >
              <boxGeometry args={[12, 6, 2, 8, 8, 8]} />
              <meshMatcapMaterial color="lightblue" />
            </mesh>
            {/* Text3D to the right */}
            <Text3D
              font="./font/PressStart2P_Regular.json"
              position={[10, 0, -3]}
              rotation={[0, -Math.PI / 2, 0]}
              height={0.08}
              size={0.4}
              bevelEnabled
              bevelSegments={20}
              visible={active}
            >
              <meshMatcapMaterial attach="material" color="yellow" />I AM A
              MUSICIAN
            </Text3D>
  
            {/* Text3D to the left */}
            <Text3D
              font="./font/PressStart2P_Regular.json"
              position={[-9, 0, 9.5]}
              rotation={[0, (Math.PI * 2) / 4, 0]}
              height={0.08}
              size={0.4}
              bevelEnabled
              bevelSegments={20}
              visible={active}
            >
              <meshMatcapMaterial attach="material" color="orange" />I AM AN
              ELECTRICIAN
            </Text3D>
            {/* HTML content */}
  
            {/* <pointLight intensity={active ? 0.2 : 0} position={[0, 20, 0]} /> */}
            {active && (
              <Html
                position={[-10, 60, 10]}
                center
                distanceFactor={35} // Adjust scale based on camera distance
                transform
                rotation={[0, Math.PI, 0]}
              >
                <div
                  style={{
                    padding: "1.5rem",
                    background: "rgba(33, 33, 33, 0.9)",
                    borderRadius: "10px",
                    color: "white",
                    fontFamily: "Arial, sans-serif",
                    lineHeight: "1.6",
                    maxWidth: "60vw",
                    width: "60vw",
                  }}
                >
                  {/* Header with About Me and CLOSE */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <p
                      onClick={() => setActive(!active)}
                      onMouseEnter={(e) => {
                        e.target.style.color = "white";
                        e.target.style.backgroundColor = "rgba(255, 165, 0, 0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "orange";
                        e.target.style.backgroundColor =
                          "rgba(255, 255, 255, 0.1)";
                      }}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        borderRadius: "50%",
                        width: "4rem",
                        height: "4rem",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        fontSize: "2rem",
                        color: "orange",
                      }}
                    >
                      X
                    </p>
                  </div>
  
                  <h1
                    style={{
                      margin: "0px",
                      fontSize: "2.5rem",
                      textAlign: "center",
                    }}
                  >
                    WELCOME TO MY PORTAL-FOLIO
                  </h1>
  
                  {/* Avatar Photo */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <img
                      src="./image/gregwebavatar1.webp"
                      alt="Avatar"
                      style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        border: "3px solid white",
                        objectFit: "cover",
                      }}
                    />
                  </div>
  
                  {/* Introduction */}
                  <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                    About Greg
                  </h2>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      marginBottom: "1.5rem",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      padding: "1rem",
                      borderRadius: "10px",
                    }}
                  >
                    Hi, I'm Greg! Welcome to my "portal-folio." This portal is
                    just some facts about me and my projects, as well as ways to
                    connect with me.
                  </p>
                  {/* Sections */}
                  <div>
                    <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                      Portals to My Projects
                    </h2>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        marginBottom: "1.5rem",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        padding: "1rem",
                        borderRadius: "10px",
                      }}
                    >
                      Other portals here are dedicted to some of my favorite
                      projects that I've worked on so far. They range from machine
                      learning web applications with object detection (FWOB) to
                      LLM integrations (ChatGPT) and Shopify stores
                      (betterballs.com).
                    </p>
  
                    <p
                      style={{
                        fontSize: "1.2rem",
                        marginBottom: "1.5rem",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        padding: "1rem",
                        borderRadius: "10px",
                      }}
                    >
                      Discover my latest projects and contributions. From web
                      applications to interactive experiences, check out what I've
                      been working on!
                    </p>
                  </div>
  
                  <div
                    style={{
                      fontSize: "1.2rem",
                      marginBottom: "1.5rem",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      padding: "0 1rem 1rem 1rem",
                      borderRadius: "10px",
                    }}
                  >
                    <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                      Contact
                    </h2>
                    <p style={{ fontSize: "1.5rem" }}>
                      GitHub:{" "}
                      <a
                        href="https://github.com/savevsgames"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "orange",
                          textDecoration: "underline",
                          fontSize: "1.5rem",
                        }}
                      >
                        Visit My General GitHub Page
                      </a>
                    </p>
                    <p style={{ fontSize: "1.5rem" }}>
                      Feel free to reach out for collaborations, questions, or
                      just to say hi!
                    </p>
                    <p style={{ fontSize: "1.5rem" }}>
                      <strong>Email:</strong> gregcbarker@gmail.com
                    </p>
                  </div>
                </div>
              </Html>
            )}
  
            <mesh>
              <sphereGeometry args={[16, 64, 64]} />
              <meshBasicMaterial map={texture} side={THREE.BackSide} />
            </mesh>
          </MeshPortalMaterial>
        </RoundedBox>
      </group>
    );
  };
  
  useGLTF.preload("./model/Animation_Walking_withSkin.glb");
  useGLTF.preload("./model/Animation_Idle_withSkin.glb");
  
  export default PortalScene;
  