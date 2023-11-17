import React from "react";

import planeScene from "../assets/3d/plane.glb";
import { useGLTF } from "@react-three/drei";

const Plane = () => {
  const { scene, animation } = useGLTF(planeScene);

  return (
    <mesh position={[0, -1.2, 0]} scale={[2, 2, 2]} rotation={[0, 1.5, 0.1]}>
      {/* position={[-5, 2, 1]} scale={[0.04, 0.04, 0.04]} */}
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
