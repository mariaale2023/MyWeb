import { useState, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loder from "../components/Loder";

import CandyHouse from "../models/CandyHouse";
import Sky from "../models/Sky";
import Bird from "../models/CatDonut";
import Cat from "../models/Cat";
import HomeInfo from "../components/HomeInfo";

import cat_purr from "../assets/Cat-meow-and-purr-sound-effect.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  // Set up Audio
  const audioRef = useRef(new Audio(cat_purr));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  //  For the rotation of the CandyHouse and the Cat
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustCandyHouseForScreenSize = () => {
    let screenScale = null;
    // let screenPosition = [0, -30, -43];
    let screenPosition = [0, -5, -43];
    // let rotation = [-0.3, 0, -0.1]; // for moon
    let rotation = [5, 0, 1.55]; // for candy house
    // let rotation = [0, 0, 1.55]; // Adjust this line for horizontal rotation; // for candy house

    if (window.innerWidth < 768) {
      screenScale = [15, 15, 15];
    } else {
      screenScale = [27, 27, 27];
    }
    return [screenScale, screenPosition, rotation];
  };
  const adjustCatForScreenSize = () => {
    let screenScale, screenPosition;
    let rotation;

    if (window.innerWidth < 768) {
      screenScale = [0.0015, 0.0015, 0.0015];
      screenPosition = [0, -1.7, 0];
    } else {
      screenScale = [0.004, 0.004, 0.004];
      screenPosition = [0, -4.4, -3];
    }

    return [screenScale, screenPosition];
  };

  const [candyHouseScale, candyHousePosition, candyHouseRotation] =
    adjustCandyHouseForScreenSize();

  const [catScale, catPosition] = adjustCatForScreenSize();

  return (
    <section className=" w-full h-screen relative">
      <div className=" mt-14 absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
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
          <ambientLight intensity={0.9} />
          {/* <pointLight /> */}
          {/* <spotLight /> */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundcolor="#000000"
            intensity={0.3}
          />

          <Bird />

          <CandyHouse
            scale={candyHouseScale}
            position={candyHousePosition}
            rotation={candyHouseRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Cat
            isRotating={isRotating}
            position={catPosition}
            scale={catScale}
            rotation={[0, 1.5, 0]}
          />
          <Sky isRotating={isRotating} />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2 ">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="cursor-pointer object-contain w-10 h-10"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
