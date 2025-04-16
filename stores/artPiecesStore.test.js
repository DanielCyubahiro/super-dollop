// stores/artPiecesStore.test.js
import { useArtPiecesStore } from '@/stores/artPiecesStore';

describe('ArtPiecesStore', () => {
  beforeEach(() => {
    useArtPiecesStore.setState({
      artPieces: [],
      isLoading: false,
      error: null
    });
  });

  it('initializes with empty state', () => {
    const state = useArtPiecesStore.getState();

    expect(state.artPieces).toEqual([]);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBeNull();
  });

  it('toggles favorite status correctly', () => {
    const testPiece = { slug: 'test', isFavorite: false };
    useArtPiecesStore.setState({
      artPieces: [testPiece]
    });

    // Toggle to favorite
    useArtPiecesStore.getState().toggleFavorite('test');
    expect(useArtPiecesStore.getState().artPieces[0].isFavorite).toBe(true);

    // Toggle back to not favorite
    useArtPiecesStore.getState().toggleFavorite('test');
    expect(useArtPiecesStore.getState().artPieces[0].isFavorite).toBe(false);
  });
});