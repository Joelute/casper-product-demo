import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mattress(props) {
  const { nodes, materials } = useGLTF("/mattress.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Box001_03_-_Default_0"].geometry}
        material={materials["03_-_Default"]}
        position={[0, 30, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Object001_07_-_Default_0"].geometry}
        material={materials["07_-_Default"]}
        position={[0, 30, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/mattress.glb");
