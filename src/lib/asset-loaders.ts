typescript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

export const useGLTFLoader = (path: string) => {
  return useLoader(GLTFLoader, path);
};

export const useOBJLoader = (path: string) => {
  return useLoader(OBJLoader, path);
};

export const useMTLLoader = (path: string) => {
  return useLoader(MTLLoader, path);
};

export const useTextureLoader = (path: string) => {
  return useLoader(TextureLoader, path);
};
