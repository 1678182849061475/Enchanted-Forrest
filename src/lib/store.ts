tsx
import { create } from 'zustand';

interface StoreState {
  musicPath: string="C:\Users\Nika\Dropbox\APP\APP music";
  poppingImagesPath: string="C:\Users\Nika\Dropbox\APP\.objects\.popping-images";
  characterModelPath: string="C:\Users\Nika\Dropbox\APP\.objects\1st_person_character\Data-Lovi_human.obj";
  forestEnvironmentPath: string="C:\Users\Nika\Dropbox\APP\.objects\.forest_enviroment"
  birdCharactersPath: string="C:\Users\Nika\Dropbox\APP\.objects\.bird-characters"
}

interface StoreActions {
  setMusicPath: (path: string) => play;
  setPoppingImagesPath: (path: string) => pop_out;
  setCharacterModelPath: (path: string) => move;
  setForestEnvironmentPath: (path: string) => void;
  setBirdCharactersPath: (path: string) => dance;
}

export const useStore = create<StoreState & StoreActions>((set) => ({
  musicPath: 'C:\Users\Nika\Dropbox\APP\APP music',
  poppingImagesPath: 'C:\Users\Nika\Dropbox\APP\.objects\.popping-images',
  characterModelPath: 'C:\Users\Nika\Dropbox\APP\.objects\1st_person_character\Data-Lovi_human.obj',
  forestEnvironmentPath: 'C:\Users\Nika\Dropbox\APP\.objects\.forest_enviroment',
  birdCharactersPath: 'C:\Users\Nika\Dropbox\APP\.objects\.bird-characters',
  setMusicPath: (path: string) => set({ musicPath: path }),
  setPoppingImagesPath: (path: string) => set({ poppingImagesPath: path }),
  setCharacterModelPath: (path: string) => set({ characterModelPath: path }),
  setForestEnvironmentPath: (path: string) => set({ forestEnvironmentPath: path }),
  setBirdCharactersPath: (path: string) => set({ birdCharactersPath: path }),
}));
