import { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

// import planeScene from "../assets/3d/plane.glb";
import planeScene from "../assets/3d/toon_cat_free.glb";
// import planeScene from "../assets/3d/cute_cat_in_cute_banana.glb";

const Plane = ({ isRotating, ...props }) => {
  // const Plane = ({ isRotating, position, scale }) => {
  const planeRef = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, planeRef);

  // useEffect(() => {
  //   if (isRotating) {
  //     actions["Take 001"].play();
  //   } else {
  //     actions["Take 001"].stop();
  //   }
  // }, [actions, isRotating]);

  useEffect(() => {
    if (isRotating) {
      actions["Scene"].play();
    } else {
      actions["Scene"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh
      // rotation={[0, 20, 0]}
      // isRotating={isRotating}
      // position={position}
      // scale={scale}
      // ref={planeRef}

      //----
      {...props}
      ref={planeRef}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
