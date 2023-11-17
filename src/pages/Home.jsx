import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loder from "../components/Loder";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";

{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
        POP UP
      </div> */
}

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.7, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
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
          <Sky />
          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
          />
          <Plane />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
