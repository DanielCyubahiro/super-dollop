import { create } from "zustand";

export const useArtPiecesStore = create((set, get) => ({
  artPieces: [],
  isLoading: false,
  error: null,
  fetchArtPieces: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("https://example-apis.vercel.app/api/art");
      if (!response.ok) {
        throw new Error("Error fetching art pieces");
      }
      const data = await response.json();
      set({
        artPieces: data.map(piece => ({ ...piece, isFavorite: false })),
        isLoading: false,
      });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
  toggleFavorite: (slug) => {
    set(state => ({
      artPieces: state.artPieces.map(piece => piece.slug === slug
        ? { ...piece, isFavorite: !piece.isFavorite }
        : piece,
      ),
    }));
  },
}));
