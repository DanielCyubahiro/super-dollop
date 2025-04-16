// components/Details/Details.test.js
import { render, screen } from '@testing-library/react';
import Details from '@/components/Details/Details';

const mockPiece = {
  slug: 'test-piece',
  imageSource: '/test-image.jpg',
  name: 'Test Art Piece',
  artist: 'Test Artist',
  year: '2023',
  genre: 'Test Genre',
  dimensions: { width: 100, height: 100 },
  isFavorite: false,
  colors: ['#000000', '#FFFFFF'],
  comments: [{id: 1, text: 'Test Comment 1', timestamp: new Date()}],
};

describe('Details Component', () => {
  it('renders all art piece details correctly', () => {
    render(<Details piece={mockPiece} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(mockPiece.name)).toBeInTheDocument();
    expect(screen.getByText(`${mockPiece.artist}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockPiece.genre}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockPiece.year}`)).toBeInTheDocument();
  });

  it('renders favorite button with correct initial state', () => {
    render(<Details piece={mockPiece} />);

    const favoriteButton = screen.getByRole('button', { name: /add to favorites/i });
    expect(favoriteButton).toBeInTheDocument();
  });
});