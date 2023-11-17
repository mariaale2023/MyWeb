import { useGLTF } from "@react-three/drei";
import React from "react";

import skyScene from "../assets/3d/sky.glb";

const Sky = () => {
  // useGLTF is used to load the 3D model from the specified GLB file
  const sky = useGLTF(skyScene);
  return (
    // component is used as a container for the <primitive> element. This allows the integration of the 3D model into the React Three.js scene.
    <mesh>
      {/* <primitive> is a react-three-fiber component that accepts an object prop, which is the Three.js object you want to render. In this case, sky.scene is passed as the object prop, where sky.scene is the root node of the loaded 3D model. */}
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
