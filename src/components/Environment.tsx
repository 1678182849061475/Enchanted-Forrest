tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { TextureLoader } from 'three';
import { useStore } from '@/lib/store';

export const Environment = () => {
  const forestEnvironmentPath = useStore((state) => state.forestEnvironmentPath);
  const objPath = forestEnvironmentPath + '/scene.obj'; // Replace with the actual path
  const mtlPath = forestEnvironmentPath + '/scene.mtl'; // Replace with the actual path
  const texturePath = forestEnvironmentPath + '/textures/color_map.png'; // Replace with the actual path

  const obj = useLoader(OBJLoader, objPath);
  const mtl = useLoader(MTLLoader, mtlPath);
  const texture = useLoader(TextureLoader, texturePath);

  useEffect(() => {
    if (mtl) {
      mtl.preload();
      obj.traverse((child: any) => {
        if (child.isMesh) {
          child.material = mtl.materials.scene_material;
        }
      });
    }
  }, [mtl, obj]);

  useEffect(() => {
    if (texture) {
      obj.traverse((child: any) => {
        if (child.isMesh) {
          child.material.map = texture;
          child.material.needsUpdate = true;
        }
      });
    }
  }, [texture, obj]);

  return <primitive object={obj} position={[0, 0, 0]} receiveShadow />;
};
