import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

const CircularPath = ({
  radius = 50,
  height = -15,
  speed = 0.5,
  pointerOverSpeed = 0.1,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [randomColor, setRandomColor] = useState(new THREE.Color(0xffffff)); // Default color
  const speedRef = useRef(speed); // Dynamic speed
  const birdModel = useGLTF("./model/rubberDuck.glb");
  const birdRef = useRef();
  const [t, setT] = useState(0); // Parameter to animate along the path

  const center = [0, -15, -120]; // New center of the circle

  const getCircularPosition = (t) => {
    const angle = t * Math.PI * 2; // Convert t to radians
    return [
      center[0] + radius * Math.cos(angle), // X
      center[1], // Y
      center[2] + radius * Math.sin(angle), // Z
    ];
  };

  useFrame((_, delta) => {
    // Increment t based on speed and delta time
    const nextT = (t + delta * speed) % 1; // Keep t in range [0, 1]
    setT(nextT);

    // Get current position on the path
    const [x, y, z] = getCircularPosition(nextT);

    if (birdRef.current) {
      // Smoothly update the bird's position
      easing.damp3(
        birdRef.current.position,
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

      birdRef.current.lookAt(
        birdRef.current.position.x + tangent.x,
        birdRef.current.position.y + tangent.y,
        birdRef.current.position.z + tangent.z
      );
    }
  });

  return (
    <primitive
      ref={birdRef}
      object={birdModel.scene}
      scale={[50, 50, 50]}
      onPointerOver={(e) => {
        setIsHovered(true);

        // Generate a new random color
        const newColor = new THREE.Color(
          Math.random(),
          Math.random(),
          Math.random()
        );
        setRandomColor(newColor);

        // Apply material changes
        if (e.object.material) {
          e.object.material.metalness = 0.9;
          e.object.material.roughness = 0.5;
          e.object.material.emissive = newColor;
          e.object.material.emissiveIntensity = 0.5;
        }
      }}
      onPointerOut={(e) => {
        setIsHovered(false);

        // Reset material changes
        if (e.object.material) {
          e.object.material.metalness = 0;
          e.object.material.roughness = 1;
          e.object.material.emissive = new THREE.Color(0x000000);
          e.object.material.emissiveIntensity = 0;
        }
      }}
    />
  );
};

export default CircularPath;
