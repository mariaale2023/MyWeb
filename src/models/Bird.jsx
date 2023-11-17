import { useGLTF } from "@react-three/drei";
import React from "react";

import birdScene from "../assets/3d/bird.glb";

const Bird = () => {
  //  const { nodes, materials, scene, animations, asset } = useGLTF('path/to/model.glb');  => propertios of useGLTF
  const { scene, animations } = useGLTF(birdScene);
  return (
    <mesh position={[-5, 2, 1]} scale={[0.005, 0.005, 0.005]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
