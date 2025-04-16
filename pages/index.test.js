import { render, screen } from '@testing-library/react';
import GalleryPage from '@/pages';
import { useArtPiecesStore } from '@/stores/artPiecesStore';

jest.mock('@/stores/artPiecesStore', () => ({
  useArtPiecesStore: jest.fn()
}));

describe('Gallery Page', () => {
  const mockArtPieces = [
    {
      slug: 'piece-1',
      imageSource: '/image1.jpg',
      name: 'Piece 1',
      artist: 'Artist 1',
      isFavorite: false,
    }
  ];

  beforeEach(() => {
    useArtPiecesStore.mockImplementation((selector) =>
      selector({
        artPieces: mockArtPieces,
        isLoading: false,
        error: null,
      })
    );
  });

  it('renders list of all art pieces', () => {
    render(<GalleryPage />);
    expect(screen.getByText('Piece 1')).toBeInTheDocument();
    expect(screen.getByText('Artist 1')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});