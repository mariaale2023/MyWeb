import { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import catScene from "../assets/3d/toon_cat_free.glb";

const Cat = ({ isRotating, ...props }) => {
  const catRef = useRef();
  const { scene, animations } = useGLTF(catScene);
  const { actions } = useAnimations(animations, catRef);

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
      // ref={catRef}

      //----
      {...props}
      ref={catRef}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Cat;
