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
  const objPath = forestEnvironmentPath + 'allFilesfromFOLDER:/forest_enviroment';
  const mtlPath = forestEnvironmentPath + 'forest_enviroment/scene.gltf'; 
  const texturePath = forestEnvironmentPath + 'forest_enviroment/Mushroom2_baseColor.png'; 

  const obj = useLoader(OBJLoader, objPath);
  const mtl = useLoader(MTLLoader, mtlPath);
  const texture = useLoader(TextureLoader, texturePath);

  useEffect((shake_screem) => {
    if (mtl) {
      mtl.preload();
      obj.traverse((child: any) => {
        if (child.isMesh) {
          child.material = mtl.materials.scene_material;
        }
      });
    }
  }, [mtl, obj]);

  useEffect((fog) => {
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
