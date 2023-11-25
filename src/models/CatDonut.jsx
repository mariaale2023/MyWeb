import { useRef, useEffect } from "react";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import catDonutScene from "../assets/3d/donut_cat.glb";

const CatDonut = () => {
  const catDonutRef = useRef();
  //  const { nodes, materials, scene, animations, asset } = useGLTF('path/to/model.glb');  => propertios of useGLTF
  const { scene, animations } = useGLTF(catDonutScene);
  const { actions } = useAnimations(animations, catDonutRef);

  useEffect(() => {
    actions["donutAction"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    //Update the Y position to simulate CatDonut-like motion using a sine wave
    catDonutRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (catDonutRef.current.position.x > camera.position.x + 10) {
      //change direction to backword and rotate the CatDonut 180 degrees onm the y-axis
      catDonutRef.current.rotation.y = Math.PI;
    } else if (catDonutRef.current.position.x < camera.position.x - 10) {
      // change direction to forward and reset the CatDonut's rotation
      catDonutRef.current.rotation.y = 0;
    }

    // Update X and Z position base on the direction
    if (catDonutRef.current.rotation.y === 0) {
      // Moving forward
      catDonutRef.current.position.x += 0.01;
      catDonutRef.current.position.z -= 0.001;
    } else {
      //moving backward
      catDonutRef.current.position.x -= 0.01;
      catDonutRef.current.position.z += 0.001;
    }
  });

  return (
    <mesh
      position={[-1, -2, 1]}
      scale={[5, 5, 5]}
      rotation={[1, 0, 0]}
      ref={catDonutRef}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default CatDonut;
