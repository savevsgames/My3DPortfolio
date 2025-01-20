import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { useEffect, useRef, useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import * as THREE from "three";
import LoadingBar from "./LoadingBar";

const PortalEntry = () => {
  const [loading, setLoading] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const canvasContainerRef = useRef();

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      // Enter fullscreen
      canvasContainerRef.current?.requestFullscreen();
    } else {
      // Exit fullscreen
      document.exitFullscreen();
    }
  };

  // Fullscreen change event listener
  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        setFullscreen(!fullscreen);
      }
    });
  }, [fullscreen]);

  return (
    <div  className="relative w-[80vw] h-[60vh] sm:w-[80vw] sm:h-[70vh] lg:w-[70vw] lg:h-[80vh] 2xl:w-[70vw] 2xl:h-[80vh]"
      ref={canvasContainerRef}
      
    >
      {loading && <LoadingBar />}
      <div
        onClick={handleFullScreen}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50px",
          height: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#B4D55A",
          zIndex: 100,
          borderRadius: "0.25rem",
          boxShadow: "-5px 5px 5px 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        <BsArrowsFullscreen onClick={handleFullScreen} />
      </div>
      <Canvas
        onCreated={() => setLoading(false)}
        camera={{ position: [0, 50, -200] }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};
export default PortalEntry;
