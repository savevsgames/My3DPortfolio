import { useProgress } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/web";

const LoadingBar = () => {
  const { progress } = useProgress(); // Get loading progress (0-100)

  // Animation for the loading bar width
  const animatedProps = useSpring({
    config: { tension: 120, friction: 14 },
  });

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "20px",
          background: "#ddd",
          borderRadius: "10px",
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        <animated.div
          style={{
            ...animatedProps,
            height: "100%",
            background: "#B4D55A",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "20px",
          zIndex: 10,
          color: "#333333",
          fontSize: "1.5rem",
        }}
      >
        <h1 style={{ margin: 0, textAlign: "center" }}>Loading PORTALfolio ...</h1>
      </div>
    </>
  );
};

export default LoadingBar;
