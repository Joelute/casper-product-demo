
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mattress(props) {
  const { nodes, materials } = useGLTF('/mattress.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <group position={[0.017, 12.704, 0.076]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Plane001_Material_#49_0'].geometry}
            material={materials.Material_49}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Plane001_Material_#49_0_1'].geometry}
            material={materials.Material_49}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Plane001_Material_#49_0_2'].geometry}
            material={materials.Material_49}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box001_Material_#43_0'].geometry}
          material={materials.Material_43}
          position={[-0.017, 0, -0.081]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape002_Material_#44_0'].geometry}
          material={materials.Material_44}
          position={[-0.017, 0, -0.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Object001_Material_#45_0'].geometry}
          material={materials.Material_45}
          position={[-0.017, 0.101, -0.081]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Object002_Material_#46_0'].geometry}
          material={materials.Material_46}
          position={[-0.017, 7.138, 40.025]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Plane003_Material_#47_0'].geometry}
          material={materials.Material_47}
          position={[16.588, 10.545, 39.946]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Object003_Material_#48_0'].geometry}
          material={materials.Material_48}
          position={[-30.081, 7.667, 18.415]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box075_Material_#45_0'].geometry}
          material={materials.Material_45}
          position={[-30.225, 5.843, 19.048]}
          rotation={[1.57, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box076_Material_#45_0'].geometry}
          material={materials.Material_45}
          position={[-30.225, 5.843, -13.335]}
          rotation={[1.57, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Object004_Material_#48_0'].geometry}
          material={materials.Material_48}
          position={[-30.081, 7.667, -13.968]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box077_Material_#45_0'].geometry}
          material={materials.Material_45}
          position={[30.225, 5.843, -14.596]}
          rotation={[-1.572, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Box078_Material_#45_0'].geometry}
          material={materials.Material_45}
          position={[30.225, 5.843, 17.788]}
          rotation={[-1.572, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Object005_Material_#48_0'].geometry}
          material={materials.Material_48}
          position={[30.081, 7.667, -13.963]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Object006_Material_#48_0'].geometry}
          material={materials.Material_48}
          position={[30.081, 7.667, 18.42]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Sphere047_Material_#49_0'].geometry}
          material={materials.Material_49}
          position={[-11.806, 12.077, -33.91]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape001_Material_#49_0'].geometry}
          material={materials.Material_49}
          position={[0.017, 12.405, 0.076]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/mattress.glb')
