import { useRef, useEffect } from "react";

import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

const Bird = () => {
  const birdRef = useRef();
  //  const { nodes, materials, scene, animations, asset } = useGLTF('path/to/model.glb');  => propertios of useGLTF
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);
  return (
    <mesh position={[-5, 2, 1]} scale={[0.005, 0.005, 0.005]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
