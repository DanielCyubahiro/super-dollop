import { create } from 'zustand'

export const useArtPiecesStore = create((set, get) => ({
  artPieces: [],
  isLoading: false,
  error: null,
  fetchArtPieces: async () => {
    set({isLoading: true});
    try {
      const response = await fetch('https://example-apis.vercel.app/api/art')
      if (!response.ok) {
        throw new Error('Error fetching art pieces');
      }
      const artPieces = await response.json();
      set({ artPieces, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  }
}))