import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const globalStore = (set) => ({
  isMenuOpen: true,
  // setter
  setMenuOpen: (isMenuOpen)=> set({isMenuOpen}),
});

const useGlobalStore = create(
  process.env.NODE_ENV === 'production' ?
  globalStore : devtools(globalStore) 
);

export default useGlobalStore;