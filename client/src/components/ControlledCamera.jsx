import { CameraControls } from "@react-three/drei";
import useCameraStore from "../Store";
import { useRef, useEffect } from "react";

const ControlledCamera = ({ maxPolarAngle = (Math.PI * 2) / 5 }) => {
  const cameraPosition = useCameraStore((state) => state.cameraPosition);
  const cameraTarget = useCameraStore((state) => state.cameraTarget);
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      // Smoothly move the camera to the target position and focus point
      controlsRef.current.setLookAt(
        cameraPosition[0],
        cameraPosition[1],
        cameraPosition[2],
        cameraTarget[0],
        cameraTarget[1],
        cameraTarget[2],
        true // Enable smooth transition
      );
    }
  }, [cameraPosition, cameraTarget]);

  return (
    <CameraControls
      ref={controlsRef}
      maxPolarAngle={maxPolarAngle} // Limit vertical angle
      minPolarAngle={0} // Optional: Limit lower vertical angle
    />
  );
};

export default ControlledCamera;
