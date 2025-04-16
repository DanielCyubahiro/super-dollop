// pages/favorites.test.js
import { render, screen } from '@testing-library/react';
import { useArtPiecesStore } from '@/stores/artPiecesStore';
import FavoritesPage from '@/pages/favorites';

jest.mock('@/stores/artPiecesStore');

describe('Favorites Page', () => {
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

  beforeEach(() => {
    useArtPiecesStore.mockImplementation((selector) => selector({
      artPieces: mockArtPieces,
      isLoading: false,
      error: null
    }));
  });

  it('renders only favorite art pieces', () => {
    render(<FavoritesPage />);

    expect(screen.queryByText('Piece 1')).not.toBeInTheDocument();
    expect(screen.getByText('Piece 2')).toBeInTheDocument();
    expect(screen.getByText('Artist 2')).toBeInTheDocument();
  });
});