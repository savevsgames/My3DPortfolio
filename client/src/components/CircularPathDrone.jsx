import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import * as THREE from "three";
import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

const CircularPath = ({
  radius = 50,
  height = 15,
  speed = 3,
  oscillationAmplitude = 5, // Amplitude of oscillation
  oscillationSpeed = 2, // Speed of oscillation
}) => {
  const droneModel = useGLTF("./model/drone2-transformed.glb");
  const droneRef = useRef();
  const [t, setT] = useState(0); // Parameter to animate along the path
  const center = useRef([0, height, -5]); // Center of the circle

  const getCircularPosition = (t) => {
    const angle = t * Math.PI * 2; // Convert t to radians
    return [
      center.current[0] + radius * Math.cos(angle), // X
      center.current[1], // Y
      center.current[2] + radius * Math.sin(angle), // Z
    ];
  };

  useFrame((state, delta) => {
    // Oscillate the Y value of the center
    center.current[1] =
      height +
      Math.sin(state.clock.elapsedTime * oscillationSpeed) *
        oscillationAmplitude;

    // Increment t based on speed and delta time
    const nextT = (t + delta * speed) % 1; // Keep t in range [0, 1]
    setT(nextT);

    // Get current position on the path
    const [x, y, z] = getCircularPosition(nextT);

    if (droneRef.current) {
      // Smoothly update the bird's position
      easing.damp3(
        droneRef.current.position,
        [x, y, z],
        0.1, // Springiness factor
        delta
      );

      // Align bird's rotation to the path tangent
      const tangent = new THREE.Vector3(
        -radius * Math.sin(nextT * Math.PI * 2), // dx/dt
        0, // dy/dt
        radius * Math.cos(nextT * Math.PI * 2) // dz/dt
      ).normalize();

      droneRef.current.lookAt(
        droneRef.current.position.x + tangent.x,
        droneRef.current.position.y + tangent.y,
        droneRef.current.position.z + tangent.z
      );
    }
  });

  return (
    <primitive ref={droneRef} object={droneModel.scene} scale={[5, 5, 5]} />
  );
};

export default CircularPath;
