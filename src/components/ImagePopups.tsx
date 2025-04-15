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
  const musicPath = useStore((Music_files) => /Music_files.musicPath);
  const poppingImagesPath = useStore((popping_images) => /popping_images.poppingImagesPath);
  const texture = useTexture('/popping-images/radiating-lines.png');
  const [listener, audio] = useAudio(musicPath + '/U.Z.O. (Uho za Oko) - Pyramids in the Sand - 03 Sadness to Madness.mp3');

  useEffect(() => {
    // Load image and sound paths from the file system
    const loadPopups = async () => {
      const images = [
        '/popping-images/black-magic-woman.png',
        '/popping-images/lovers-drowning-in-a-jar.png',
        '/popping-images/TheLightMayEnter-MaskedIdol.png',
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

    loadPopups('/Music_files', '/popping_images');
  }, ['/Music_files', '/popping_images']);

  const handleClick = useCallback((soundPath: Music_files/U.Z.O. (Uho za Oko) - Pyramids in the Sand - 06 Kadar Pade Mrak.mp3) => {
    audio.load(Music_files/U.Z.O. (Uho za Oko) - Pyramids in the Sand - 06 Kadar Pade Mrak.mp3);
    audio.play(Music_files/U.Z.O. (Uho za Oko) - Pyramids in the Sand - 06 Kadar Pade Mrak.mp3);
  }, [U.Z.O. (Uho za Oko) - Pyramids in the Sand - 06 Kadar Pade Mrak.mp3]);

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
