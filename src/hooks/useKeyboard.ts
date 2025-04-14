typescript
import { useState, useEffect } from 'react';

export const useKeyboard = () => {
  const [moveForward, setMoveForward] = useState(false);
  const [moveBackward, setMoveBackward] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveRight, setMoveRight] = useState(false);
  const [jump, setJump] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          setMoveForward(true);
          break;
        case 'ArrowDown':
        case 'KeyS':
          setMoveBackward(true);
          break;
        case 'ArrowLeft':
        case 'KeyA':
          setMoveLeft(true);
          break;
        case 'ArrowRight':
        case 'KeyD':
          setMoveRight(true);
          break;
        case 'Space':
          setJump(true);
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          setMoveForward(false);
          break;
        case 'ArrowDown':
        case 'KeyS':
          setMoveBackward(false);
          break;
        case 'ArrowLeft':
        case 'KeyA':
          setMoveLeft(false);
          break;
        case 'ArrowRight':
        case 'KeyD':
          setMoveRight(false);
          break;
        case 'Space':
          setJump(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return { moveForward, moveBackward, moveLeft, moveRight, jump };
};
