// pages/gallery/[slug].test.js
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import { useArtPiecesStore } from '@/stores/artPiecesStore';
import ArtPieceDetailPage from '@/pages/gallery/[slug]';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));
jest.mock('@/stores/artPiecesStore');

describe('Art Piece Detail Page', () => {
  const mockArtPiece = {
    slug: 'test-piece',
    imageSource: '/test-image.jpg',
    name: 'Test Art Piece',
    artist: 'Test Artist',
    year: '2023',
    genre: 'Test Genre',
    dimensions: { width: 100, height: 100 },
    isFavorite: false,
    colors: ['#000000', '#FFFFFF']
  };

  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      query: { slug: 'test-piece' },
      back: jest.fn()
    }));

    useArtPiecesStore.mockImplementation((selector) => selector({
      artPieces: [mockArtPiece],
      isLoading: false,
      error: null
    }));
  });

  it('renders all art piece details', () => {
    render(<ArtPieceDetailPage />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(mockArtPiece.name)).toBeInTheDocument();
    expect(screen.getByText(`${mockArtPiece.artist}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockArtPiece.genre}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockArtPiece.year}`)).toBeInTheDocument();
  });

  it('renders back button', () => {
    render(<ArtPieceDetailPage />);

    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
  });
});