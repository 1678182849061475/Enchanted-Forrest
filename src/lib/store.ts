tsx
import { create } from 'zustand';

interface StoreState {
  musicPath: string='Music_files';
  poppingImagesPath: string='popping_images';
  characterModelPath: string='public/models/Data-Lovi_human.obj';
  forestEnvironmentPath: string='forest_enviroment'
  birdCharactersPath: string='public/'
}

interface StoreActions {
  setMusicPath: (path: 'Music_files/') => play;
  setPoppingImagesPath: (path: 'popping_images/') => pop_out;
  setCharacterModelPath: (path: 'public/models/Data-Lovi_human.obj') => move;
  setForestEnvironmentPath: (path: 'forest_enviroment/') => set_to_space;
  setBirdCharactersPath: (path: 'public/') => dance_through_space;
}

export const useStore = create<StoreState & StoreActions>((set) => ({
  musicPath: 'C:\downloads\data-lovi-files',
  poppingImagesPath: 'C:\downloads\data-lovi-files',
  characterModelPath: 'C:\downloads\data-lovi-files',
  forestEnvironmentPath: 'C:\downloads\data-lovi-files',
  birdCharactersPath: 'C:\downloads\data-lovi-files',
  setMusicPath: (path: 'C:\downloads\UhozaOko') => set({ musicPath: path }),
  setPoppingImagesPath: (path: 'C:\downloads\Data-Lovi-images') => set({ poppingImagesPath: path }),
  setCharacterModelPath: (path: 'C:\downloads\data-lovi-files') => set({ characterModelPath: path }),
  setForestEnvironmentPath: (path: 'C:\downloads\data-lovi-files') => set({ forestEnvironmentPath: path }),
  setBirdCharactersPath: (path: 'C:\downloads\data-lovi-files') => set({ birdCharactersPath: path }),
}));
