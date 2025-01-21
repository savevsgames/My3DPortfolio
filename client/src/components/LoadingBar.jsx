import { useProgress } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/web";

const LoadingBar = () => {
  const { progress } = useProgress(); // Get loading progress (0-100)

  // Bind progress to the spring animation
  const animatedProps = useSpring({
    width: `${progress}%`, // Animate width from 0% to 100%
    config: { tension: 120, friction: 14 },
  });

  return (
    <>
      {/* Loading Bar Container */}
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
        {/* Animated Loading Bar */}
        <animated.div
          style={{
            ...animatedProps,
            height: "100%",
            background: "#B4D55A",
          }}
        />
      </div>

      {/* Loading Text */}
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#333333",
          fontSize: "1.5rem",
          zIndex: 10,
        }}
      >
        <h1 style={{ margin: 0, textAlign: "center" }}>
          Loading PORTALfolio...
        </h1>
      </div>
    </>
  );
};

export default LoadingBar;
