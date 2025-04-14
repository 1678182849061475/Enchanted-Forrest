tsx
import React, { useState, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useTexture, useAudio } from '@react-three/drei';
import { useStore } from '@/lib/store';

interface ImagePopup {
  position: [number, number, number];
  image: string;
  sound: string;
  id: string;
}

export const ImagePopups = () => {
  const [popups, setPopups] = useState<ImagePopup[]>([]);
  const musicPath = useStore((state) => state.musicPath);
  const poppingImagesPath = useStore((state) => state.poppingImagesPath);
  const texture = useTexture('/popping-images/radiating-lines.png');
  const [listener, audio] = useAudio(musicPath + '/slow-and-sad.mp3');

  useEffect(() => {
    // Load image and sound paths from the file system
    const loadPopups = async () => {
      const images = [
        '/popping-images/abstract-1.jpg',
        '/popping-images/fractal-1.png',
        '/popping-images/radiating-lines.png',
      ];
      const sounds = [
        '/APP music/pop.mp3',
        '/APP music/glimmer.mp3',
        '/APP music/sparkle.mp3',
      ];
      const newPopups: ImagePopup[] = images.map((image, index) => ({
        position: [Math.random() * 20 - 10, Math.random() * 10 + 2, Math.random() * 20 - 10],
        image,
        sound: sounds[index % sounds.length],
        id: `popup-${index}`,
      }));
      setPopups(newPopups);
    };

    loadPopups();
  }, [musicPath, poppingImagesPath]);

  const handleClick = useCallback((soundPath: string) => {
    audio.load(soundPath);
    audio.play();
  }, [audio]);

  useFrame(() => {
    // Basic animation for the image popups
    popups.forEach((popup, index) => {
      const mesh = scene.getObjectByName(popup.id) as THREE.Mesh;
      if (mesh) {
        mesh.rotation.y += 0.01;
      }
    });
  });

  return (
    <>
      {popups.map((popup) => (
        <mesh
          key={popup.id}
          position={popup.position}
          onClick={() => handleClick(popup.sound)}
        >
          <planeGeometry args={[4, 3]} />
          <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
        </mesh>
      ))}
    </>
  );
};
