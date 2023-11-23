import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loder from "../components/Loder";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  //  For the rotation of the Island and the Plane
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    // let screenPosition = [0, -30, -43];
    let screenPosition = [0, -6.7, -43];
    let rotation = [0, 5, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -2, -3];
    }

    // if (window.innerWidth < 768) {
    //   screenScale = [0.8, 0.8, 0.8];
    //   screenPosition = [0, -1.5, 0];
    // } else {
    //   screenScale = [0.1, 0.1, 0.1];
    //   screenPosition = [0, -5, -5];
    // }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        {/* Suspense from https://react.dev/reference/react/Suspense 
        <Suspense> lets you display a fallback until its children have finished loading.*/}
        <Suspense fallback={<Loder />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          {/* <pointLight /> */}
          {/* <spotLight /> */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundcolor="#000000"
            intensity={0.5}
          />

          <Bird />

          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}

            // isSetRotating={isSetRotating}
          />
          <Plane
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20, 0]}
            // scale={[1, 1, 1]}
          />
          <Sky isRotating={isRotating} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
