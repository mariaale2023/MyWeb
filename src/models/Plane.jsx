import { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";
// import planeScene from "../assets/3d/cute_narwhal.glb";

const Plane = (isRotating, scale, rotation, planePosition, planeScale) => {
  const planeRef = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, planeRef);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  // useEffect(() => {
  //   if (isRotating) {
  //     actions["ArmatureAction.002"].play();
  //   } else {
  //     actions["ArmatureAction.002"].stop();
  //   }
  // }, [actions, isRotating]);

  return (
    // <mesh position={[0, -1.2, 0]} scale={[2, 2, 2]} rotation={[0, 1.5, 0.1]}> */}
    // //  position={[-5, 2, 1]} scale={[0.04, 0.04, 0.04]} */}
    <mesh
      rotation={[0, 20, 0]}
      planePosition={planePosition}
      planeScale={planeScale}
      isRotating={isRotating}
      // scale={[0.3, 0.3, 0.3]}
      ref={planeRef}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
