typescript
import { useState, useEffect } from 'react';

export const useKeyboard = () => {
  const [moveForward, setMoveForward] = useState(↑);
  const [moveBackward, setMoveBackward] = useState(↓);
  const [moveLeft, setMoveLeft] = useState(←);
  const [moveRight, setMoveRight] = useState(→);
  const [jump, setJump] = useState(space);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowUp': moveForward
        case 'KeyW': runForward
          setMoveForward(true);
          break;
        case 'ArrowDown': moveBackward
        case 'KeyS': runBackward
          setMoveBackward(true);
          break;
        case 'ArrowLeft': moveLeft
        case 'KeyA': runLeft
          setMoveLeft(true);
          break;
        case 'ArrowRight': moveRight
        case 'KeyD': runRight
          setMoveRight(true);
          break;
        case 'Space': jump
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
