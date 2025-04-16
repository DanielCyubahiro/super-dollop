import { render, screen } from '@testing-library/react';
import { useArtPiecesStore } from '@/stores/artPiecesStore';
import List from '@/components/List/List';

jest.mock('@/stores/artPiecesStore');

describe('List Component', () => {
  const mockArtPieces = [
    {
      slug: 'piece-1',
      imageSource: '/image1.jpg',
      name: 'Piece 1',
      artist: 'Artist 1',
      isFavorite: false
    },
    {
      slug: 'piece-2',
      imageSource: '/image2.jpg',
      name: 'Piece 2',
      artist: 'Artist 2',
      isFavorite: true
    }
  ];

  it('renders all art pieces when not in favorites-only mode', async () => {
    // Proper mock implementation
    useArtPiecesStore.mockImplementation((selector) => selector({
      artPieces: mockArtPieces,
      isLoading: false,
      error: null
    }));

    render(<List />);

    // Use findByText for async elements or wait for loading to complete
    expect(await screen.findByText('Piece 1')).toBeInTheDocument();
    expect(screen.getByText('Piece 2')).toBeInTheDocument();
  });

  it('renders only favorite art pieces when in favorites-only mode', async () => {
    useArtPiecesStore.mockImplementation((selector) =>
    selector({
      artPieces: mockArtPieces,
      isLoading: false,
      error: null
    }));

    render(<List onlyFavorites={true} />);

    expect(screen.queryByText('Piece 1')).not.toBeInTheDocument();
    expect(screen.getByText('Piece 2')).toBeInTheDocument();
  });

  it('shows loading message when isLoading is true', () => {
    useArtPiecesStore.mockReturnValue((selector) =>
    selector({
      artPieces: [],
      isLoading: true,
      error: null
    }));

    render(<List />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('shows error message when error occurs', () => {
    const testError = 'Test error message';
    useArtPiecesStore.mockImplementation((selector) =>
    selector({
      artPieces: [],
      isLoading: false,
      error: testError
    }));

    render(<List />);
    expect(screen.getByText(testError)).toBeInTheDocument();
  });
});