typescript
export const playAudio = (audioPath: string) => {
  const audio = new Audio(audioPath);
  audio.play();
};
