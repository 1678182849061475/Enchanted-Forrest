tsx
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Gemini } from '@/lib/gemini';
import { useStore } from '@/lib/store';

const birdData = [
  { id: 'bird1', position: [5, 8, -5], model: 'Enchanted-Forest/public/bird.OBJ' },
  { id: 'bird2', position: [-10, 6, 2], model: '/public/Duck_obj.rar' },
  { id: 'bird3', position: [3, 4, 12], model: 'public/passarinho_gigante_mascarado.obj' },
];

export const GeminiBird = () => {
  const [speech, setSpeech] = useState('');
  const [birdId, setBirdId] = useState('');
  const birdCharactersPath = useStore((state) => state.birdCharactersPath);
  const geminiApiKey = process.env.GEMINI_API_KEY || '';
  const birdRef = useRef<THREE.Object3D>(new THREE.Object3D());

  useEffect(() => {
    async function generateSpeech() {
      if (!geminiApiKey) {
        console.warn('Gemini API key not set.');
        return;
      }
      const gemini = new Gemini({ key: geminiApiKey });
      const prompt = `Generate a short, whimsical sentence about the enchanted forest.`;
      const response = await gemini.generate(prompt);
      setSpeech(response);
      setBirdId('bird1');
    }

    generateSpeech();
  }, [geminiApiKey]);

  useFrame(() => {
    // Basic animation for the birds
    birdRef.current.position.y = 5 + Math.sin(Date.now() / 500) * 2;
    birdRef.current.rotation.y += 0.01;
  });

  return (
    <>
      {birdData.map((bird) => (
        <mesh key={bird.id} position={bird.position} ref={birdRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="yellow" />
          {birdId === bird.id && speech && (
            <mesh position={[0, 2, 0]}>
              <textGeometry args={[speech, { font: null, size: 0.5, height: 0.1 }]} />
              <meshBasicMaterial color="white" />
            </mesh>
          )}
        </mesh>
      ))}
    </>
  );
};
