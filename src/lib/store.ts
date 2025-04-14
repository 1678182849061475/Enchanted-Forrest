tsx
import { create } from 'zustand';

interface StoreState {
  musicPath: string;
  poppingImagesPath: string;
  characterModelPath: string;
  forestEnvironmentPath: string;
  birdCharactersPath: string;
}

interface StoreActions {
  setMusicPath: (path: string) => void;
  setPoppingImagesPath: (path: string) => void;
  setCharacterModelPath: (path: string) => void;
  setForestEnvironmentPath: (path: string) => void;
  setBirdCharactersPath: (path: string) => void;
}

export const useStore = create<StoreState & StoreActions>((set) => ({
  musicPath: '',
  poppingImagesPath: '',
  characterModelPath: '',
  forestEnvironmentPath: '',
  birdCharactersPath: '',
  setMusicPath: (path: string) => set({ musicPath: path }),
  setPoppingImagesPath: (path: string) => set({ poppingImagesPath: path }),
  setCharacterModelPath: (path: string) => set({ characterModelPath: path }),
  setForestEnvironmentPath: (path: string) => set({ forestEnvironmentPath: path }),
  setBirdCharactersPath: (path: string) => set({ birdCharactersPath: path }),
}));
