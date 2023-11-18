import React from "react";

import planeScene from "../assets/3d/plane.glb";
import { useGLTF } from "@react-three/drei";

const Plane = (rotation, planePosition, planeScale, isRotating) => {
  const { scene, animation } = useGLTF(planeScene);

  return (
    // <mesh position={[0, -1.2, 0]} scale={[2, 2, 2]} rotation={[0, 1.5, 0.1]}> */}
    // //  position={[-5, 2, 1]} scale={[0.04, 0.04, 0.04]} */}
    <mesh
      rotation={[0, 20, 0]}
      planePosition={planePosition}
      planeScale={planeScale}
      isRotating={isRotating}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
