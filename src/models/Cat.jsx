/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Omabuarts Studio (https://sketchfab.com/omabuarts)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/toon-cat-free-b2bd1ee7858444bda366110a2d960386
Title: Toon Cat FREE
*/

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
