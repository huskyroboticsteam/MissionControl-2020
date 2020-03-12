import React, { useEffect } from "react";
import Box from "./cube-test-component";
import Sphere from "./sphere-test-component";
import { Canvas, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};


class CanvasTesting extends React.Component {
  render() {
    return (
      <div>
        <Canvas
        style={{ height: 500, width: 500 }}
        camera={{ fov: 75, near: 0.1, far: 1000 }}
      >
        <CameraController />
        <ambientLight />
        <pointLight position={[100, 100, 10]} />
        <Box position={[1, 0, 0]} />
        <Box position={[-1, 0, 0]} />
        <Sphere position={[0, 0, 0]} />
        <Box position={[1, 1, 0]} />
        <Box position={[2, 2, 0]} />
        <Sphere position={[1, 2, 0]} />
      </Canvas>
      </div>

    );
  }
}

export default CanvasTesting;
