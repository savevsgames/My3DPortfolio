import { CameraControls } from "@react-three/drei";
import { useRef, useEffect } from "react";

const ControlledCamera = ({ cameraPosition, cameraTarget }) => {
  const cameraControlsRef = useRef();

  useEffect(() => {
    if (
      cameraControlsRef.current &&
      cameraPosition?.length === 3 &&
      cameraTarget?.length === 3
    ) {
      cameraControlsRef.current.setLookAt(
        cameraPosition[0],
        cameraPosition[1],
        cameraPosition[2],
        cameraTarget[0],
        cameraTarget[1],
        cameraTarget[2],
        true // Smooth transition
      );
    }
  }, [cameraPosition, cameraTarget]);

  return (
    <CameraControls
      ref={cameraControlsRef}
      maxPolarAngle={Math.PI * 2 / 5} // Restrict to 30 degrees above horizon
      // minPolarAngle={Math.PI / 6} // Prevent looking too far down
    />
  );
};

export default ControlledCamera;
