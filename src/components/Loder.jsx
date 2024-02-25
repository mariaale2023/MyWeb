//  the <Html> component is from the @react-three/drei library, and it's used to overlay HTML content on a 3D scene created with react-three-fiber. The purpose of using <Html> is to render standard HTML content within the 3D scene
// https://www.npmjs.com/package/@react-three/drei
// https://www.npmjs.com/package/@react-three/drei#html

import catDonut from "../assets/images/catdonut_icon.png";

import { Html } from "@react-three/drei";

const Loder = () => {
  return (
    <Html>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col justify-center items-center border-2 border-opacity-20 border-pink-500 border-t-pink-500 rounded-full w-40 h-40  animate-spin mx-auto my-auto">
          <p className="text-pink-800 text-5xl">Loading...</p>
          <img
            src={catDonut}
            alt="Cat Donut Icon"
            className="w-20 h-20 animate-spin mx-auto my-auto"
          />
        </div>
      </div>

      {/* Adjust the size of the maria image based on the size of the spinning circle */}
    </Html>
  );
};

export default Loder;
