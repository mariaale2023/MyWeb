/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nimzu (https://sketchfab.com/nimzuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
Title: Fox's islands
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

// packege that makes enable animation. so "a" is from 'animated'
import { a } from "@react-spring/three";

import islandScene from "../assets/3d/island.glb";

const Island = ({ isRotating, setIsRotating, ...props }) => {
  // seRef is a React Hook that provides a way to create a mutable object that persists throughout the lifecycle of a component. manipulate properties of the 3D object represented by the Island component.
  const islandRef = useRef();

  const { gl, viewport } = useThree();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  // how much is continue moving after the start rotationg the island
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagantion();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  };
  const handlePointerUp = (e) => {
    e.stopPropagantion();
    e.preventDefault();
    setIsRotating(false);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    const delta = (clientX - lastX.current) / viewport.width;

    islandRef.current.rotation.y += delta * 0.01 * Math.PI;

    lastX.current = clientX;

    rotationSpeed.current = delta * 0.01 * Math.PI;
  };
  const handlePointerMove = (e) => {
    e.stopPropagantion();
    e.preventDefault();

    if (isRotating) {
      handlePointerUp(e);
    }
  };

  useEffect(() => {
    document.rom;
  }, [gl, handlePointerDown, handlePointerMove, handlePointerUp]);
  // useGLTF is used to load the 3D model from the specified GLB file
  const { nodes, materials } = useGLTF(islandScene);
  return (
    <a.group {...props} ref={islandRef}>
      {/* <a.group {...props} dispose={null}> */}
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
};

export default Island;
