import { render, screen } from '@testing-library/react';
import useRandomArtPiece from '@/hooks/useRandomArtPiece';
import SpotlightPage from '@/pages/spotlight';

jest.mock('@/stores/artPiecesStore');
jest.mock('@/hooks/useRandomArtPiece', () => ({
  __esModule: true,
  default: jest.fn()
}));

describe('Spotlight Page', () => {
  const mockArtPiece = {
    slug: 'test-piece',
    imageSource: '/test-image.jpg',
    artist: 'Test Artist',
    isFavorite: false
  };

  beforeEach(() => {
    useRandomArtPiece.mockReturnValue(mockArtPiece);
  });

  it('renders spotlight component with random art piece', () => {
    render(<SpotlightPage />);

    expect(screen.getByTestId('spotlight-bg')).toBeInTheDocument();
  });

  it('renders favorite button for the spotlighted piece', () => {
    render(<SpotlightPage />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});