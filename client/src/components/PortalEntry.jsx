import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { useRef, useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";

const PortalEntry = () => {
  const [loading, setLoading] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const canvasContainerRef = useRef();

  const handleFullScreen = () => {
    setFullscreen(!fullscreen);
    if (canvasContainerRef.current && fullscreen) {
      canvasContainerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      ref={canvasContainerRef}
      style={{
        height: "50vh",
        width: "50vw",
        position: "relative",
      }}
    >
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            zIndex: 10,
          }}
        >
          Loading...
        </div>
      )}
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
          backgroundColor: "#66FF66",
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
        // onClick={handleFullScreen} // Fullscreen toggle on click
      >
        <Scene />
      </Canvas>
    </div>
  );
};
export default PortalEntry;
