import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loder from "../components/Loder";
import Island from "../models/Island";

{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
        POP UP
      </div> */
}

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        {/* Suspense from https://react.dev/reference/react/Suspense 
        <Suspense> lets you display a fallback until its children have finished loading.*/}
        <Suspense fallback={<Loder />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          <Island />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
