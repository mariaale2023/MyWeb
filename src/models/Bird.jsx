import { useRef, useEffect } from "react";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// import birdScene from "../assets/3d/bird.glb";
// import birdScene from "../assets/3d/goofy_green.glb";
import birdScene from "../assets/3d/donut_cat.glb";

const Bird = () => {
  const birdRef = useRef();
  //  const { nodes, materials, scene, animations, asset } = useGLTF('path/to/model.glb');  => propertios of useGLTF
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  
  useEffect(() => {
    actions["donutAction"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    //Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (birdRef.current.position.x > camera.position.x + 10) {
      //change direction to backword and rotate the bird 180 degrees onm the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = 0;
    }

    // Update X and Z position base on the direction
    if (birdRef.current.rotation.y === 0) {
      // Moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.001;
    } else {
      //moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.001;
    }
  });

  return (
    
    <mesh
      position={[-1, -2, 1]}
      scale={[5, 5, 5]}
      rotation={[1, 0, 0]}
      ref={birdRef}
    >
      <primitive object={scene} />
    </mesh>

  
  );
};

export default Bird;
