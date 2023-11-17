//  the <Html> component is from the @react-three/drei library, and it's used to overlay HTML content on a 3D scene created with react-three-fiber. The purpose of using <Html> is to render standard HTML content within the 3D scene
// https://www.npmjs.com/package/@react-three/drei
// https://www.npmjs.com/package/@react-three/drei#html

import { Html } from "@react-three/drei";

const Loder = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin">
          Hello
        </div>
      </div>
    </Html>
  );
};

export default Loder;
