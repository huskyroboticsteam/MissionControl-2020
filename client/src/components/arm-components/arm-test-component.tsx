import React, { useEffect } from "react";
import BoxJoint from "./cube-test-component";
import Sphere from "./sphere-test-component";
import { Canvas, useThree } from "react-three-fiber";
import BoxJoint1 from "./cube2-test-component";
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

// adjustable rotation of shapes. maybe see if I can make an function that allows us to move?
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
        <BoxJoint position={[0, 1.5, 0]} />
        <Sphere position={[-2, 1.5, 0]} />
        <BoxJoint1 position={[-0.5, 0.5, 0]} rotation={[0, 0, 1]}/>
        <Sphere position={[2, 1.5, 0]} />
        <Sphere position={[1, -0.25, 0]} />
      </Canvas>
      </div>

    );
  }
}

export default CanvasTesting;
