import { render, screen } from '@testing-library/react';
import ListItem from '@/components/ListItem/ListItem';

const mockPiece = {
  slug: 'test-piece',
  imageSource: '/test-image.jpg',
  name: 'Test Art Piece',
  artist: 'Test Artist',
  dimensions: { width: 100, height: 100 },
  isFavorite: false
};

describe('ListItem Component', () => {
  it('renders art piece information correctly', () => {
    render(<ListItem piece={mockPiece} />);

    expect(screen.getByText(mockPiece.name)).toBeInTheDocument();
    expect(screen.getByText(mockPiece.artist)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', `/gallery/${mockPiece.slug}`);
  });

  it('renders favorite button with correct initial state', () => {
    render(<ListItem piece={mockPiece} />);

    const favoriteButton = screen.getByRole('button', { name: /add to favorites/i });
    expect(favoriteButton).toBeInTheDocument();
  });
});