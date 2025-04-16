import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useArtPiecesStore = create(
  persist(
    (set, get) => ({
      artPieces: [],
      isLoading: false,
      error: null,
      fetchArtPieces: async () => {
        // Only fetch if we don't have data
        if (get().artPieces.length === 0 && !get().isLoading) {
          set({ isLoading: true });
          try {
            const response = await fetch(
              "https://example-apis.vercel.app/api/art");
            if (!response.ok) {
              throw new Error("Error fetching art pieces");
            }
            const data = await response.json();
            set({
              artPieces: data.map(piece => ({ ...piece, isFavorite: false, comments: [] })),
              isLoading: false,
            });
          } catch (error) {
            set({ error, isLoading: false });
          }
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
      addComment: (slug, newComment) => {
        set(state => ({
          artPieces: state.artPieces.map(piece => piece.slug === slug
            ? { ...piece, comments: [...piece.comments, newComment] }
            : piece,
          ),
        }));
      },
    }),
    {
      name: "art-pieces-storage",
    },
  ),
);