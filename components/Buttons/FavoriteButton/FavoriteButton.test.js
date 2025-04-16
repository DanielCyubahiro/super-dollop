// components/Buttons/FavoriteButton/FavoriteButton.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { useArtPiecesStore } from '@/stores/artPiecesStore';
import FavoriteButton from '@/components/Buttons/FavoriteButton/FavoriteButton';

jest.mock('@/stores/artPiecesStore');

describe('FavoriteButton Component', () => {
  const mockToggleFavorite = jest.fn();
  const mockArtPiece = {
    slug: 'test-piece',
    isFavorite: false
  };

  beforeEach(() => {
    jest.clearAllMocks();

    useArtPiecesStore.mockImplementation((selector) => {
      return selector({
        toggleFavorite: mockToggleFavorite,
        artPieces: [mockArtPiece],
      });
    });
  });

  it('calls toggleFavorite when clicked', () => {
    const testSlug = 'test-piece';
    render(<FavoriteButton slug={testSlug}>Test</FavoriteButton>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockToggleFavorite).toHaveBeenCalledWith(testSlug);
  });

  it('renders children correctly', () => {
    render(<FavoriteButton slug="test">Test Content</FavoriteButton>);

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('updates the respective favorite property', () => {
    const updatedMockToggleFavorite = jest.fn((slug) => {
      mockArtPiece.isFavorite = !mockArtPiece.isFavorite;
    });

    useArtPiecesStore.mockImplementation((selector) => {
      return selector({
        toggleFavorite: updatedMockToggleFavorite,
        artPieces: [mockArtPiece],
      });
    });

    render(<FavoriteButton slug="test-piece">Test</FavoriteButton>);

    // Initial state should be false
    expect(mockArtPiece.isFavorite).toBe(false);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    // After click, should be true
    expect(mockArtPiece.isFavorite).toBe(true);
    expect(updatedMockToggleFavorite).toHaveBeenCalledWith('test-piece');

    fireEvent.click(button);

    // After second click, should be false again
    expect(mockArtPiece.isFavorite).toBe(false);
    expect(updatedMockToggleFavorite).toHaveBeenCalledTimes(2);
  });
});