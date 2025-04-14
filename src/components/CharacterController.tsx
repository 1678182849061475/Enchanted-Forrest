tsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTFLoader } from '@/lib/asset-loaders';
import { useKeyboard } from '@/hooks/useKeyboard';
import { useStore } from '@/lib/store';

interface CharacterControllerProps {
  moveForward: boolean;
  moveBackward: boolean;
  moveLeft: boolean;
  moveRight: boolean;
  jump: boolean;
}

export const CharacterController: React.FC<CharacterControllerProps> = ({
  moveForward,
  moveBackward,
  moveLeft,
  moveRight,
  jump,
}) => {
  const characterModelPath = useStore((state) => state.characterModelPath);
  const gltf = useGLTFLoader(characterModelPath);
  const characterRef = useRef<THREE.Object3D>(new THREE.Object3D());
  const { camera } = useThree();
  const speed = 0.2;
  const jumpForce = 0.5;
  const gravity = -0.05;

  const velocity = useRef(new THREE.Vector3(0, 0, 0));
  const isGrounded = useRef(true);

  useEffect(() => {
    if (gltf) {
      gltf.scene.traverse((child: any) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      characterRef.current.add(gltf.scene);
    }
  }, [gltf]);

  useFrame(() => {
    if (!characterRef.current) return;

    const direction = new THREE.Vector3();
    if (moveForward) direction.z = -1;
    if (moveBackward) direction.z = 1;
    if (moveLeft) direction.x = -1;
    if (moveRight) direction.x = 1;
    direction.normalize();

    characterRef.current.translateZ(direction.z * speed);
    characterRef.current.translateX(direction.x * speed);

    // Jumping and gravity
    if (isGrounded.current && jump) {
      velocity.current.y = jumpForce;
      isGrounded.current = false;
    }

    velocity.current.y += gravity;
    characterRef.current.position.y += velocity.current.y;

    // Ground collision
    if (characterRef.current.position.y < 0) {
      characterRef.current.position.y = 0;
      velocity.current.y = 0;
      isGrounded.current = true;
    }

    // Update camera position
    camera.position.x = characterRef.current.position.x;
    camera.position.y = characterRef.current.position.y + 5;
    camera.position.z = characterRef.current.position.z + 15;
  });

  return <primitive object={characterRef.current} />;
};
